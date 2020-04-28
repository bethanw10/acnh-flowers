<template>
    <div>
        <header>
            <h1>ACNH Guide for
                <select class="option-select" v-model="selectedFlowerType">
                    <option v-for="flowerType in Object.keys(flowerData)" v-bind:key="flowerType" v-bind:value="flowerType">
                        {{flowerType}}
                    </option>
                </select>

                (<select class="option-select" v-model="selectedViewType">
                    <option value="list-view">List View</option>
                    <option value="grid-view">Grid View</option>
                </select>)
            </h1>
            {{flowerData[selectedFlowerType].description}}
        </header>
        <FlowerGenetics
                :flowerType="selectedFlowerType"
                :viewType="selectedViewType"
                :genotypes="flowerData[selectedFlowerType].genotypes"
        />
    </div>
</template>

<script>
    import FlowerGenetics from "./FlowerGenetics";

    export default {
        name: "FlowerGuide",
        components: {FlowerGenetics},
        data : function() {
            return {
                test: "",
                selectedFlowerType: "Mums",
                selectedViewType: "list-view",
                flowerTypes: ["Roses", "Mums", "Cosmos", "Lilies", "Pansies", "Hyacinths", "Tulips", "Windflowers"],
                flowerData: {
                    "Mums": {
                        numGenes: 3,
                        description: "Mums have three genes, R (red), Y (yellow) and W (white).",
                        genotypes: [
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
                    },
                    "Roses": {
                        numGenes: 4,
                        description: "Roses have four genes, R (red), Y (yellow),  W (white) and S (shade).",
                        genotypes: [
                            {genotype: "rryyWWss",color: "White"},
                            {genotype: "rryyWWSs",color: "White"},
                            {genotype: "rryyWWSS",color: "White"},
                            {genotype: "rryyWwss",color: "White", origin: "seed"},
                            {genotype: "rryyWwSs",color: "White"},
                            {genotype: "rryyWwSS",color: "White"},
                            {genotype: "rryywwss",color: "Purple"},
                            {genotype: "rryywwSs",color: "Purple"},
                            {genotype: "rryywwSS",color: "Purple"},
                            {genotype: "rrYyWWss",color: "Yellow"},
                            {genotype: "rrYyWWSs",color: "Yellow"},
                            {genotype: "rrYyWWSS",color: "Yellow"},
                            {genotype: "rrYyWwss",color: "White"},
                            {genotype: "rrYyWwSs",color: "White"},
                            {genotype: "rrYyWwSS",color: "White"},
                            {genotype: "rrYywwss",color: "Purple"},
                            {genotype: "rrYywwSs",color: "Purple"},
                            {genotype: "rrYywwSS",color: "Purple"},
                            {genotype: "rrYYWWss",color: "Yellow", origin: "seed"},
                            {genotype: "rrYYWWSs",color: "Yellow"},
                            {genotype: "rrYYWWSS",color: "Yellow"},
                            {genotype: "rrYYWwss",color: "Yellow"},
                            {genotype: "rrYYWwSs",color: "Yellow"},
                            {genotype: "rrYYWwSS",color: "Yellow"},
                            {genotype: "rrYYwwss",color: "White"},
                            {genotype: "rrYYwwSs",color: "White"},
                            {genotype: "rrYYwwSS",color: "White"},
                            {genotype: "RryyWWss",color: "Red"},
                            {genotype: "RryyWWSs",color: "Pink"},
                            {genotype: "RryyWWSS",color: "White"},
                            {genotype: "RryyWwss",color: "Red"},
                            {genotype: "RryyWwSs",color: "Pink"},
                            {genotype: "RryyWwSS",color: "White"},
                            {genotype: "Rryywwss",color: "Red"},
                            {genotype: "RryywwSs",color: "Pink"},
                            {genotype: "RryywwSS",color: "Purple"},
                            {genotype: "RrYyWWss",color: "Orange"},
                            {genotype: "RrYyWWSs",color: "Yellow"},
                            {genotype: "RrYyWWSS",color: "Yellow"},
                            {genotype: "RrYyWwss",color: "Red"},
                            {genotype: "RrYyWwSs",color: "Pink"},
                            {genotype: "RrYyWwSS",color: "White"},
                            {genotype: "RrYywwss",color: "Red"},
                            {genotype: "RrYywwSs",color: "Pink"},
                            {genotype: "RrYywwSS",color: "Purple"},
                            {genotype: "RrYYWWss",color: "Orange"},
                            {genotype: "RrYYWWSs",color: "Yellow"},
                            {genotype: "RrYYWWSS",color: "Yellow"},
                            {genotype: "RrYYWwss",color: "Orange"},
                            {genotype: "RrYYWwSs",color: "Yellow"},
                            {genotype: "RrYYWwSS",color: "Yellow"},
                            {genotype: "RrYYwwss",color: "Red"},
                            {genotype: "RrYYwwSs",color: "Pink"},
                            {genotype: "RrYYwwSS",color: "White"},
                            {genotype: "RRyyWWss",color: "Black"},
                            {genotype: "RRyyWWSs",color: "Red", origin: "seed"},
                            {genotype: "RRyyWWSS",color: "Pink"},
                            {genotype: "RRyyWwss",color: "Black"},
                            {genotype: "RRyyWwSs",color: "Red"},
                            {genotype: "RRyyWwSS",color: "Pink"},
                            {genotype: "RRyywwss",color: "Black"},
                            {genotype: "RRyywwSs",color: "Red"},
                            {genotype: "RRyywwSS",color: "Pink", origin: "mystery island"},
                            {genotype: "RRYyWWss",color: "Orange"},
                            {genotype: "RRYyWWSs",color: "Orange"},
                            {genotype: "RRYyWWSS",color: "Yellow"},
                            {genotype: "RRYyWwss",color: "Red"},
                            {genotype: "RRYyWwSs",color: "Red"},
                            {genotype: "RRYyWwSS",color: "White"},
                            {genotype: "RRYywwss",color: "Black"},
                            {genotype: "RRYywwSs",color: "Red"},
                            {genotype: "RRYywwSS",color: "Purple"},
                            {genotype: "RRYYWWss",color: "Orange"},
                            {genotype: "RRYYWWSs",color: "Orange"},
                            {genotype: "RRYYWWSS",color: "Yellow"},
                            {genotype: "RRYYWwss",color: "Orange"},
                            {genotype: "RRYYWwSs",color: "Orange", origin: "mystery island"},
                            {genotype: "RRYYWwSS",color: "Yellow"},
                            {genotype: "RRYYwwss",color: "Blue"},
                            {genotype: "RRYYwwSs",color: "Red"},
                            {genotype: "RRYYwwSS",color: "White"}
                        ]
                    },
                    "Cosmos": {
                        numGenes: 3,
                        description: "Cosmos have three genes, R (red), Y (yellow) and S (Shade).",
                        genotypes: [
                            {genotype:"rryyss", color:"White"},
                            {genotype:"rryySs", color:"White", origin : "seed"},
                            {genotype:"rryySS", color:"White"},
                            {genotype:"rrYyss", color:"Yellow"},
                            {genotype:"rrYySs", color:"Yellow"},
                            {genotype:"rrYySS", color:"White"},
                            {genotype:"rrYYss", color:"Yellow"},
                            {genotype:"rrYYSs", color:"Yellow", origin : "seed"},
                            {genotype:"rrYYSS", color:"Yellow"},
                            {genotype:"Rryyss", color:"Pink"},
                            {genotype:"RryySs", color:"Pink"},
                            {genotype:"RryySS", color:"Pink"},
                            {genotype:"RrYyss", color:"Orange"},
                            {genotype:"RrYySs", color:"Orange"},
                            {genotype:"RrYySS", color:"Pink", origin:"mystery island"},
                            {genotype:"RrYYss", color:"Orange"},
                            {genotype:"RrYYSs", color:"Orange"},
                            {genotype:"RrYYSS", color:"Orange"},
                            {genotype:"RRyyss", color:"Red", origin : "seed"},
                            {genotype:"RRyySs", color:"Red"},
                            {genotype:"RRyySS", color:"Red"},
                            {genotype:"RRYyss", color:"Orange"},
                            {genotype:"RRYySs", color:"Orange", origin:"mystery island"},
                            {genotype:"RRYySS", color:"Red"},
                            {genotype:"RRYYss", color:"Black"},
                            {genotype:"RRYYSs", color:"Black"},
                            {genotype:"RRYYSS", color:"Red"},
                        ]
                    },
                }
            };
        }
    }
</script>

<style scoped>
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

    .option-select {
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 20px;
        margin: 0 10px;
    }
</style>