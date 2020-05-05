<template>
    <div>
        <div class="genotype-form">
            <genotype-select :flower-type="flowerType" :genotypes="genotypes" label="First flower"
                             v-model="firstFlower"/>
            <span class="plus">➕</span>
            <genotype-select :flower-type="flowerType" :genotypes="genotypes" label="Second flower"
                             v-model="secondFlower"/>
        </div>
        <div class="outcomes">
            <PunnettSquares
                    :genotype1="firstFlower.genotype"
                    :genotype2="secondFlower.genotype"
                    class="punnett-squares-view"
                    v-if="viewType === 'punnett-squares' && firstFlower && secondFlower"/>

            <ListView :flower-type="flowerType"
                      :outcomes="getOutcomes(firstFlower.genotype, secondFlower.genotype, genotypes)"
                      v-if="viewType === 'list-view' || viewType === 'punnett-squares'"
            />
            <GridView :flower-type="flowerType"
                      :outcomes="getOutcomes(firstFlower.genotype, secondFlower.genotype, genotypes)"
                      v-else-if="firstFlower && secondFlower"
            />
        </div>
    </div>
</template>

<script>
    import GenotypeSelect from "./Genotype.select.vue"
    import PunnettSquares from "./PunnettSquares";
    import ListView from "./ListView";

    import {GeneticsMixin} from "./Genetics.mixin"
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
        margin: 30px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 992px) {
        .genotype-form {
            flex-direction: column;
            width: 100%;
        }
    }

    .plus {
        margin: 0 20px;
    }

    .outcomes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .punnett-squares-view {
        margin-bottom: 30px;
    }

</style>
