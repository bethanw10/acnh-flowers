<template>
    <div class="punnett-squares responsive-text">
        <div class="punnett-square" v-for="(combination, index) in allGeneCombinations(genotype1, genotype2)"
             :key="index">
            <table>
                <tr><td></td>                           <td>{{genotype1[index*2]}}</td> <td>{{genotype1[index*2 + 1]}}</td></tr>
                <tr><td>{{genotype2[index*2]}}</td>     <td>{{combination[0]}}</td>     <td>{{combination[1]}}</td></tr>
                <tr><td>{{genotype2[index*2 + 1]}}</td> <td>{{combination[2]}}</td>     <td>{{combination[3]}}</td></tr>
                <tr><td></td>
                    <td colspan="3">
                        <template v-for="(outcome, gene) in outcomeTotals(combination)">
                            <span :key="gene"><b>{{gene}}</b> {{outcome.percent}}%<br/></span>
                        </template>
                     </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import {GeneticsMixin} from "./Genetics.mixin";

    export default {
        name: "PunnetSquares",
        mixins: [GeneticsMixin],
        props: {
            genotype1: String,
            genotype2: String,
        },
        methods: {
            outcomeTotals(combination) {
                let outcomes = this.groupByNumOccurrences(combination);

                for (let key in outcomes) {
                    outcomes[key].percent = (outcomes[key].total / 4) * 100;
                }

                return outcomes;
            }
        }
    }
</script>

<style scoped>

    .punnett-squares {
        display: flex;
        justify-content: center;
    }

    .punnett-square {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .punnett-square table {
        text-align: center;
        border-collapse: collapse;
        border-spacing: 0;
        margin: 0 10px;
    }

    .punnett-square table tr:first-child td, .punnett-square table tr:last-child td{
        border: none;
        border-right: 2px solid #d2d2d2;
        border-bottom: 2px solid #d2d2d2;
        height: auto;
        font-weight: bold;
        padding: 5px;
        background: none;
    }

    .punnett-square table tr:last-child td {
        border: none;
        font-weight: normal;
    }

    .punnett-square table td:nth-child(1) {
        border: none;
        border-bottom: 2px solid #d2d2d2;
        width: auto;
        font-weight: bold;
        padding: 5px;
        background: none;
    }

    .punnett-square td {
        border: 2px solid #d2d2d2;
        background: #f5f5f5;
        padding: 2px;
        height: 42px;
        width: 42px;
    }
</style>