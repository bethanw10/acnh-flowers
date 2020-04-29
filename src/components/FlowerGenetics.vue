<template>
    <div>
        <div class="genotype-form">
            <genotype-select label="First flower" :flower-type="flowerType" :genotypes="genotypes" v-model="firstFlower"/>
            <span class="plus">➕</span>
            <genotype-select label= "Second flower" :flower-type="flowerType" :genotypes="genotypes" v-model="secondFlower"/>
        </div>
        <div class="outcomes">
            <PunnetSquares
                    v-if="viewType === 'punnett-squares' && firstFlower && secondFlower"
                    :genotype1="firstFlower.genotype"
                    :genotype2="secondFlower.genotype"/>

            <table class="outcome-table" v-if="viewType === 'list-view' || viewType === 'punnett-squares'">
                <tbody v-for="(colorData, color) in getOutcomes(firstFlower, secondFlower)" v-bind:key="color">
                <tr class="header-row">
                    <th :rowspan="colorData.outcomes.length + 1">
                        <flower-image :color="color" :flower-type="flowerType" v-bind:key="color"/>
                    </th>
                    <th class="color-header">{{color}}</th>
                    <th>{{colorData.percent}}%</th>
                </tr>
                <tr v-for="outcome in colorData.outcomes" v-bind:key="outcome.genotype">
                    <td>{{outcome.genotype.match(/(.{2})/g).join(' ')}}</td>
                    <td>{{outcome.percent}}%</td>
                </tr>
                </tbody>
            </table>

            <div class="outcome-grid" v-else-if="firstFlower && secondFlower">
                <div class="outcome-grid-header"></div>
                <div class="outcome-grid-header">Color</div>
                <div class="outcome-grid-header">Chance</div>
                <div class="outcome-grid-header">Possible Genotypes</div>
                <template v-for="(colorData, color) in getOutcomes(firstFlower, secondFlower)">
                    <flower-image :color="color" :flower-type="flowerType" v-bind:key="'image-' + color"/>
                    <div v-bind:key="'color-' + color">{{color}}</div>
                    <div v-bind:key="'percent-'+ color">{{colorData.percent}}%</div>
                    <div class="outcome-sub-grid" v-bind:key="color">
                        <template v-for="outcome in colorData.outcomes">
                            <div v-bind:key="'genotype-' + outcome.genotype">{{outcome.genotype.match(/(.{2})/g).join(' ')}}</div>
                            <div v-bind:key="'percent-' + outcome.genotype">{{outcome.percent}}%</div>
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
    import PunnetSquares from "./PunnetSquares";

    import { GeneticsMixin } from "./Genetics.mixin"

    export default {
        name: 'flower-genetics',
        components: {GenotypeSelect, FlowerImage, PunnetSquares},
        mixins: [GeneticsMixin],
        props: {
            flowerType: String,
            viewType: String,
            genotypes: Array
        },
        data: function () {
            return {
                firstFlower: '',
                secondFlower: '',
            }
        },
        methods: {
            uniqueCombinations(combination) {
                return [...new Set(combination)];
            }
        },
        watch: {
            flowerType: function () {
                this.firstFlower = '';
                this.secondFlower = '';
            }
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    .genotype-form {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px 0;
    }

    .plus {
        margin: 0 20px;
    }

    .punnett-squares {
        margin-bottom: 30px;
    }

    /*List view*/
    .outcome-table table {
        border-spacing: 0;
    }

    .outcome-table tbody::after
    {
        content: '';
        display: block;
        height: 30px;
    }

    .outcome-table tbody:last-child::after {
        display: none;
    }

    .outcome-table td, th {
        text-align: left;
    }

    .outcome-table td {
        padding:  3px 20px;
    }

    .outcome-table th {
        padding: 3px 20px;
        font-size: 18px;
        font-weight: bold;
    }

    .color-header {
        min-width: 150px;
    }

    /*Grid view*/
    .outcomes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .outcome-grid {
        max-width: 500px;
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
