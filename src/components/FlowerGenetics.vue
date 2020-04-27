<template>
    <div>
        <header>
            <h1>AC:NH Flower Guide for
                <select class="flower-select">
                    <option v-for="flowerType in flowerTypes" :value="selectedFlowerType" v-bind:key="flowerType">
                        {{flowerType}}
                    </option>
                </select>
            </h1>
            Mums have three genes, R (red), Y (yellow) and W (white).
        </header>
        <div class="genotype-form">
            <genotype-select :genotypes="flowers" v-model="firstFlower"></genotype-select>
            <span class="plus">➕</span>
            <genotype-select :genotypes="flowers" v-model="secondFlower"></genotype-select>
        </div>
        <div class="outcomes">
            <table>
                <tbody v-for="(colorData, color) in getOutcomes(firstFlower, secondFlower)" v-bind:key="color">
                <tr class="header-row">
                    <th :rowspan="colorData.outcomes.length + 1">
                        <flower-image :color="color" v-bind:key="color"/>
                    </th>
                    <th>{{color}}</th>
                    <th>{{colorData.percent}}%</th>
                </tr>
                <tr v-for="outcome in colorData.outcomes" v-bind:key="outcome.genotype">
                    <td>{{outcome.genotype}}</td>
                    <td>{{outcome.percent}}%</td>
                </tr>
                </tbody>
            </table>

            <div class="outcome-grid" v-if="false && firstFlower && secondFlower">
                <div class="outcome-grid-header"></div>
                <div class="outcome-grid-header">Color</div>
                <div class="outcome-grid-header">Chance</div>
                <div class="outcome-grid-header">Possible Genotypes</div>
                <template v-for="(colorData, color) in getOutcomes(firstFlower, secondFlower)">
                    <flower-image :color="color" v-bind:key="color"/>
                    <div v-bind:key="color">{{color}}</div>
                    <div v-bind:key="color">{{colorData.percent}}%</div>
                    <div class="outcome-sub-grid" v-bind:key="color">
                        <template v-for="outcome in colorData.outcomes">
                            <div v-bind:key="outcome.genotype">{{outcome.genotype}}</div>
                            <div v-bind:key="outcome.genotype">{{outcome.percent}}%</div>
                        </template>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import GenotypeSelect from "./Genotype.select.vue"
    import FlowerImage from "./FlowerImage";

    import { GeneticsMixin } from "./Genetics.mixin"

    export default {
        name: 'flower-genetics',
        components: {GenotypeSelect, FlowerImage},
        mixins: [GeneticsMixin],
        methods: {
            displayValue(flower) {
                // 160 is a non-breaking space
                // Selects don't allow 'whitespace: pre' that allows multiple spaces so we have to do this instead
                let colour = (flower.color).padEnd(7, String.fromCharCode(160));
                return `${colour} ${flower.genotype}${flower.origin ? ` (${flower.origin})` : ''}`;
            },
            flowerBackground(color) {
                let hexColors = {
                    ["Red"]: "#e8645a",
                    ["Pink"]: "#f2c8b8",
                    ["White"]: "#FFF",
                    ["Purple"]: "#a77ba8",
                    ["Green"]: "#7fd47b",
                    ["Yellow"]: "#e8e46f"
                };
                return hexColors[color];
            },
        },
        data: function () {
            return {
                selectedFlowerType: 'Roses',
                flowerTypes: ["Roses", "Mums", "Cosmos", "Lilies", "Pansies", "Hyacinths", "Tulips", "Windflowers"],
                firstFlower: '',
                secondFlower: '',
                flowers: [
                    {genotype: "RRyyWW", color: "Red", origin: "seed"},
                    {genotype: "RRyyWw", color: "Red"},
                    {genotype: "RRyyww", color: "Red"},
                    {genotype: "RrYyWw", color: "Red"},
                    {genotype: "RRYyww", color: "Red"},
                    {genotype: "RRYYww", color: "Red"},

                    {genotype: "rrYyww", color: "White"},
                    {genotype: "rryyWW", color: "White"},
                    {genotype: "rryyWw", color: "White", origin: "seed"},

                    {genotype: "rrYyWW", color: "Yellow"},
                    {genotype: "rrYyWw", color: "Yellow"},
                    {genotype: "rrYYWW", color: "Yellow", origin: "seed"},
                    {genotype: "rrYYWw", color: "Yellow"},
                    {genotype: "rrYYww", color: "Yellow"},
                    {genotype: "RrYyWW", color: "Yellow"},

                    {genotype: "RryyWW", color: "Pink"},
                    {genotype: "RryyWw", color: "Pink"},
                    {genotype: "Rryyww", color: "Pink"},
                    {genotype: "RrYyww", color: "Pink", origin: "mystery island"},

                    {genotype: "rryyww", color: "Purple"},
                    {genotype: "RrYYWW", color: "Purple"},
                    {genotype: "RrYYWw", color: "Purple"},
                    {genotype: "RrYYww", color: "Purple"},
                    {genotype: "RRYyWW", color: "Purple"},
                    {genotype: "RRYyWw", color: "Purple", origin: "mystery island"},

                    {genotype: "RRYYWW", color: "Green"},
                    {genotype: "RRYYWw", color: "Green"}
                ]
            }
        }
    }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  header {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: normal;
    text-align: center;
    margin-top: 20px;
  }

  h1 {
    display: flex;
    justify-content: center;
  }

  .flower-select {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 20px;
    margin-left: 10px;
  }

  .genotype-form {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 50px 0;
  }

  .plus {
    margin: 0 20px;
  }

  /*List view*/
  table {
    border-spacing: 0;
  }

  tbody::after
  {
    content: '';
    display: block;
    height: 30px;
  }

  td, th {
    text-align: left;
  }

  td {
    padding:  3px 20px;
  }

  th {
    padding: 3px 20px;
    font-size: 18px;
    font-weight: bold;
  }

  /*Grid view*/
  .outcomes {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .outcome-grid {
    width: 25vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    grid-gap: 30px 25px;
    text-align: center;
  }

  .outcome-grid-header {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 -20px 0;
  }

  .outcome-sub-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 25px;
    text-align: start;
  }
</style>
