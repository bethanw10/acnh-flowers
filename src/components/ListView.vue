<template>
    <table class="outcome-table responsive-text">
        <tbody v-for="(colorData, color) in outcomes" v-bind:key="color">
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
</template>

<script>
    import FlowerImage from "./FlowerImage";
    export default {
        name: "ListView",
        components: { FlowerImage},
        props: {
            flowerType: String,
            outcomes: Object
        },
    }
</script>

<style scoped>
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

    @media only screen and (max-width: 992px) {
        .outcome-table th{
            font-size: calc(18px + 1vw);
        }
    }

    .color-header {
        min-width: 150px;
    }
</style>