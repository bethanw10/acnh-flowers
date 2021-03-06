<template>
    <div class="genotype-select">
        <flower-image :color="selectedGenotype.color" :flowerType="flowerType"/>

        <div class="container">
            <label class="label responsive-text">{{label}}</label>
            <select class="dropdown responsive-text" v-model="selectedGenotype" v-on:change="updateValue()">
                <option disabled hidden value="">Select a genotype</option>
                <option :style="{ backgroundColor: flowerBackground(flower.color) }" v-bind:key="index" v-bind:value="flower"
                        v-for="(flower, index) in genotypes">
                    {{displayValue(flower)}}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
    import FlowerImage from "./FlowerImage";

    export default {
        name: "genotype-select",
        components: {FlowerImage},
        props: {
            label: String,
            flowerType: String,
            genotypes: Array,
        },
        data: function () {
            return {
                selectedGenotype: ''
            };
        },
        methods: {
            updateValue: function () {
                this.$emit('input', this.selectedGenotype)
            },
            displayValue(flower) {
                // 160 is a non-breaking space
                // Selects don't allow 'whitespace: pre' that allows multiple spaces so we have to do this instead
                let colour = (flower.color).padEnd(6, String.fromCharCode(160));
                let genotype = flower.genotype.match(/(.{2})/g).join(' ');
                return `${colour} ${genotype}${flower.origin ? ` (${flower.origin})` : ''}`;
            },
            flowerBackground(color) {
                let hexColors = {
                    ["Red"]: "#e8645a",
                    ["Orange"]: "#e8a75a",
                    ["Black"]: "#868382",
                    ["Pink"]: "#f2c8b8",
                    ["White"]: "#FFF",
                    ["Purple"]: "#a77ba8",
                    ["Green"]: "#7fd47b",
                    ["Yellow"]: "#e8e46f",
                    ["Blue"]: "#4a8fff"
                };
                return hexColors[color];
            },
        },
        watch: {
            flowerType: function () {
                this.selectedGenotype = '';
            }
        }
    }
</script>

<style scoped>
    .genotype-select {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .container {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        flex: 1;
    }

    label {
        font-weight: bold;
        margin-right: 10px;
    }

    .dropdown {
        border: 1px solid #999;
        border-radius: 2px;
        padding: 5px;
        font-family: 'Source Code Pro', monospace;
        margin: 10px 0;
    }
</style>