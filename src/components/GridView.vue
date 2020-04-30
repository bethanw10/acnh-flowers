<template>
    <div class="outcome-grid">
        <div class="outcome-grid-header"></div>
        <div class="outcome-grid-header">Color</div>
        <div class="outcome-grid-header">Chance</div>
        <div class="outcome-grid-header">Possible Genotypes</div>
        <template v-for="(colorData, color) in outcomes">
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
</template>

<script>
    import FlowerImage from "./FlowerImage";
    export default {
        name: "GridView",
        components: { FlowerImage},
        props: {
            flowerType: String,
            outcomes: Object
        },
    }
</script>

<style scoped>
    .outcome-grid {
        display: grid;
        grid-template-columns: repeat(4, auto);
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

    .outcome-sub-grid div:nth-child(2n) {
        text-align: center;
    }
</style>