<template>
    <div>
        <div class="genotype-form">
            <genotype-select label="First flower" :flower-type="flowerType" :genotypes="genotypes" v-model="firstFlower"/>
            <span class="plus">➕</span>
            <genotype-select label= "Second flower" :flower-type="flowerType" :genotypes="genotypes" v-model="secondFlower"/>
        </div>
        <div class="outcomes">
            <PunnettSquares
                    v-if="viewType === 'punnett-squares' && firstFlower && secondFlower"
                    :genotype1="firstFlower.genotype"
                    :genotype2="secondFlower.genotype"/>

            <ListView v-if="viewType === 'list-view' || viewType === 'punnett-squares'"
                      :flower-type="flowerType"
                      :outcomes="getOutcomes(firstFlower.genotype, secondFlower.genotype, genotypes)"
            />
            <GridView v-else-if="firstFlower && secondFlower"
                      :flower-type="flowerType"
                      :outcomes="getOutcomes(firstFlower.genotype, secondFlower.genotype, genotypes)"
            />
        </div>
    </div>
</template>

<script>
    import GenotypeSelect from "./Genotype.select.vue"
    import PunnettSquares from "./PunnettSquares";
    import ListView from "./ListView";

    import { GeneticsMixin } from "./Genetics.mixin"
    import GridView from "./GridView";

    export default {
        name: 'FlowerGenetics',
        components: {GenotypeSelect, PunnettSquares, ListView, GridView},
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

    .outcomes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .punnett-squares {
        margin-bottom: 30px;
    }
</style>
