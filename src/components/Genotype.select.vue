<template>
    <div class="genotype-select">
        <flower-image :color="selectedGenotype.color"></flower-image>

        <div class="container">
            <label class="label">First flower</label>
            <select class="dropdown" v-model="selectedGenotype" v-on:change="updateValue()">
                <option value="" disabled hidden>Select a genotype</option>
                <option v-for="(flower, index) in genotypes" v-bind:value="flower" v-bind:key="index"
                        :style="{ backgroundColor: flowerBackground(flower.color)}">
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
          genotypes: Array
        },
        data: function() {
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
            flowerImage(color) {
                let hexColors = {
                    ["Red"]: "https://acnhcdn.com/latest/MenuIcon/PltMum2.png",
                    ["Pink"]: "https://acnhcdn.com/latest/MenuIcon/PltMum3.png",
                    ["White"]: "https://acnhcdn.com/latest/MenuIcon/PltMum0.png",
                    ["Purple"]: "https://acnhcdn.com/latest/MenuIcon/PltMum5.png",
                    ["Green"]: "https://acnhcdn.com/latest/MenuIcon/PltMum4.png",
                    ["Yellow"]: "https://acnhcdn.com/latest/MenuIcon/PltMum1.png"
                };
                return hexColors[color];
            }
        }
    }
</script>

<style scoped>
    .genotype-select {
        display: flex;
    }

    .container {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
    }

    label {
        font-weight: bold;
        font-size: 14px;
        margin-right: 10px;
    }

    .dropdown {
        border: 1px solid #999;
        border-radius: 2px;
        padding: 5px;
        font-family: 'Source Code Pro', monospace;
        font-size: 14px;
        margin: 10px 0;
    }
</style>