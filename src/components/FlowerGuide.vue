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
                    <option value="punnett-squares">Punnett Squares</option>
                </select>)
            </h1>
            <div class="description">
                {{flowerData[selectedFlowerType].description}} <br/> <br/>
                Flowers have a number of genes that control their color - usually 3 expect for roses which have 4.<br/>
                A gene is made of a pair of alleles which can be dominant (represented by a uppercase letter) or recessive (represented by a lowercase letter).<br/>
                When cross breeding flowers, one allele is taken from each parent at random for each gene. The possible outcomes can be predicted using a Punnett square (link):
                <div class="punnett-square">
                    <table>
                        <tr><td> </td> <td>R</td> <td>r</td></tr>
                        <tr><td>r</td> <td>Rr</td><td>rr</td></tr>
                        <tr><td>r</td> <td>Rr</td><td>rr</td></tr>
                        <tr><td></td><td colspan="3">R</td></tr>
                    </table>
                </div>

                <br/>
                Notes:
                <br/>
                <ul>
                    <li>For two flowers to breed they must touch horizontally, vertically or diagonally, have been watered and there is an empty spot next to one of the parents</li>
                    <li> Flowers can clone if they are on their own or if all flowers that it’s touching have already bred with different partners. Clones will have the exact same genes as their parent</li>
                    <li>Flower from seed bags and mystery island flowers always have the same genes. It's helpful to start cross breeding with these flowers so you can more easily track what genes your flowers have</li>
                    <li>Colors don't necessarily work the same way between flowers e.g. a RRYYSS cosmo is Red but a RRYYSS Lily is white</li>
                    <li>Watering flower 5 people higher chance of breeding</li>
                    <li>There's no cap on the number of new flowers spawned each day - but each flower can only breed once per day</li>
                    <li>Golden roses have a unique requirement - water a black rose with a golden watering can</li>
                </ul>
            </div>

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
                selectedFlowerType: "Mums",
                selectedViewType: "list-view",
                flowerTypes: ["Roses", "Mums", "Cosmos", "Lilies", "Pansies", "Hyacinths", "Tulips", "Windflowers"],
                flowerData: {
                    "Mums": {
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
                        description: "Roses have four genes, R (red), Y (yellow),  W (white) and S (shade).",
                        genotypes: [
                            {genotype: "rryyWWss",color: "White"},
                            {genotype: "rryyWWSs",color: "White"},
                            {genotype: "rryyWWSS",color: "White"},
                            {genotype: "rryyWwss",color: "White", origin: "seed"},
                            {genotype: "rryyWwSs",color: "White"},
                            {genotype: "rryyWwSS",color: "White"},
                            {genotype: "rrYyWwss",color: "White"},
                            {genotype: "rrYyWwSs",color: "White"},
                            {genotype: "rrYyWwSS",color: "White"},
                            {genotype: "rrYYwwss",color: "White"},
                            {genotype: "rrYYwwSs",color: "White"},
                            {genotype: "rrYYwwSS",color: "White"},
                            {genotype: "RryyWWSS",color: "White"},
                            {genotype: "RryyWwSS",color: "White"},
                            {genotype: "RrYyWwSS",color: "White"},
                            {genotype: "RrYYwwSS",color: "White"},
                            {genotype: "RRYyWwSS",color: "White"},
                            {genotype: "RRYYwwSS",color: "White"},

                            {genotype: "RryyWWss",color: "Red"},
                            {genotype: "RrYywwss",color: "Red"},
                            {genotype: "RryyWwss",color: "Red"},
                            {genotype: "Rryywwss",color: "Red"},
                            {genotype: "RrYyWwss",color: "Red"},
                            {genotype: "RrYYwwss",color: "Red"},
                            {genotype: "RRyyWWSs",color: "Red", origin: "seed"},
                            {genotype: "RRyyWwSs",color: "Red"},
                            {genotype: "RRyywwSs",color: "Red"},
                            {genotype: "RRYyWwss",color: "Red"},
                            {genotype: "RRYyWwSs",color: "Red"},
                            {genotype: "RRYywwSs",color: "Red"},
                            {genotype: "RRYYwwSs",color: "Red"},

                            {genotype: "rrYyWWss",color: "Yellow"},
                            {genotype: "rrYyWWSs",color: "Yellow"},
                            {genotype: "rrYyWWSS",color: "Yellow"},
                            {genotype: "rrYYWWss",color: "Yellow", origin: "seed"},
                            {genotype: "rrYYWWSs",color: "Yellow"},
                            {genotype: "rrYYWWSS",color: "Yellow"},
                            {genotype: "rrYYWwss",color: "Yellow"},
                            {genotype: "rrYYWwSs",color: "Yellow"},
                            {genotype: "rrYYWwSS",color: "Yellow"},
                            {genotype: "RrYyWWSs",color: "Yellow"},
                            {genotype: "RrYyWWSS",color: "Yellow"},
                            {genotype: "RrYYWWSs",color: "Yellow"},
                            {genotype: "RrYYWWSS",color: "Yellow"},
                            {genotype: "RrYYWwSs",color: "Yellow"},
                            {genotype: "RrYYWwSS",color: "Yellow"},
                            {genotype: "RRYyWWSS",color: "Yellow"},
                            {genotype: "RRYYWWSS",color: "Yellow"},
                            {genotype: "RRYYWwSS",color: "Yellow"},

                            {genotype: "rryywwss",color: "Purple"},
                            {genotype: "rryywwSs",color: "Purple"},
                            {genotype: "rryywwSS",color: "Purple"},
                            {genotype: "rrYywwss",color: "Purple"},
                            {genotype: "rrYywwSs",color: "Purple"},
                            {genotype: "rrYywwSS",color: "Purple"},
                            {genotype: "RryywwSS",color: "Purple"},
                            {genotype: "RrYywwSS",color: "Purple"},
                            {genotype: "RRYywwSS",color: "Purple"},

                            {genotype: "RrYyWWss",color: "Orange"},
                            {genotype: "RrYYWWss",color: "Orange"},
                            {genotype: "RrYYWwss",color: "Orange"},
                            {genotype: "RRYyWWss",color: "Orange"},
                            {genotype: "RRYyWWSs",color: "Orange"},
                            {genotype: "RRYYWWss",color: "Orange"},
                            {genotype: "RRYYWWSs",color: "Orange"},
                            {genotype: "RRYYWwss",color: "Orange"},
                            {genotype: "RRYYWwSs",color: "Orange", origin: "mystery island"},

                            {genotype: "RryyWWSs",color: "Pink"},
                            {genotype: "RryyWwSs",color: "Pink"},
                            {genotype: "RryywwSs",color: "Pink"},
                            {genotype: "RrYyWwSs",color: "Pink"},
                            {genotype: "RrYywwSs",color: "Pink"},
                            {genotype: "RrYYwwSs",color: "Pink"},
                            {genotype: "RRyyWWSS",color: "Pink"},
                            {genotype: "RRyyWwSS",color: "Pink"},
                            {genotype: "RRyywwSS",color: "Pink", origin: "mystery island"},

                            {genotype: "RRyyWWss",color: "Black"},
                            {genotype: "RRyyWwss",color: "Black"},
                            {genotype: "RRyywwss",color: "Black"},
                            {genotype: "RRYywwss",color: "Black"},

                            {genotype: "RRYYwwss",color: "Blue"}
                        ]
                    },
                    "Cosmos": {
                        description: "Cosmos have three genes, R (red), Y (yellow) and S (Shade).",
                        genotypes: [
                            {genotype:"rryyss", color:"White"},
                            {genotype:"rryySs", color:"White", origin : "seed"},
                            {genotype:"rryySS", color:"White"},
                            {genotype:"rrYySS", color:"White"},
                            {genotype:"rrYyss", color:"Yellow"},
                            {genotype:"rrYySs", color:"Yellow"},
                            {genotype:"rrYYss", color:"Yellow"},
                            {genotype:"rrYYSs", color:"Yellow", origin : "seed"},
                            {genotype:"rrYYSS", color:"Yellow"},
                            {genotype:"RRyyss", color:"Red", origin : "seed"},
                            {genotype:"RRyySs", color:"Red"},
                            {genotype:"RRyySS", color:"Red"},
                            {genotype:"RRYySS", color:"Red"},
                            {genotype:"RRYYSS", color:"Red"},
                            {genotype:"Rryyss", color:"Pink"},
                            {genotype:"RryySs", color:"Pink"},
                            {genotype:"RryySS", color:"Pink"},
                            {genotype:"RrYySS", color:"Pink", origin:"mystery island"},
                            {genotype:"RrYyss", color:"Orange"},
                            {genotype:"RrYySs", color:"Orange"},
                            {genotype:"RrYYss", color:"Orange"},
                            {genotype:"RrYYSs", color:"Orange"},
                            {genotype:"RrYYSS", color:"Orange"},
                            {genotype:"RRYyss", color:"Orange"},
                            {genotype:"RRYySs", color:"Orange", origin:"mystery island"},
                            {genotype:"RRYYss", color:"Black"},
                            {genotype:"RRYYSs", color:"Black"},
                        ]
                    },
                    "Lilies": {
                        description: "Lilies have three genes, R (red), Y (yellow) and S (Shade).",
                        genotypes: [
                            {genotype:"rryyss", color: "White"},
                            {genotype:"rryySs", color: "White"},
                            {genotype:"rryySS", color: "White", origin: "seed"},
                            {genotype:"rrYySs", color: "White"},
                            {genotype:"rrYySS", color: "White"},
                            {genotype:"rrYYSS", color: "White"},
                            {genotype:"RRYYSS", color: "White"},
                            {genotype:"RryySS", color: "White"},
                            {genotype:"rrYyss", color: "Yellow"},
                            {genotype:"rrYYss", color: "Yellow", origin: "seed"},
                            {genotype:"rrYYSs", color: "Yellow"},
                            {genotype:"RrYySs", color: "Yellow"},
                            {genotype:"RrYySS", color: "Yellow"},
                            {genotype:"RrYYSs", color: "Yellow"},
                            {genotype:"RrYYSS", color: "Yellow"},
                            {genotype:"Rryyss", color: "Red"},
                            {genotype:"RRYySs", color: "Red"},
                            {genotype:"RRyySs", color: "Red", origin: "seed"},
                            {genotype:"RryySs", color: "Pink"},
                            {genotype:"RRyySS", color: "Pink"},
                            {genotype:"RRYySS", color: "Pink", origin: "mystery island"},
                            {genotype:"RrYyss", color: "Orange"},
                            {genotype:"RrYYss", color: "Orange"},
                            {genotype:"RRYYss", color: "Orange"},
                            {genotype:"RRYYSs", color: "Orange", origin: "mystery island"},
                            {genotype:"RRyyss", color: "Black"},
                            {genotype:"RRYyss", color: "Black", origin: "mystery island"},
                        ]
                    },
                    "Pansies": {
                        description: "Lilies have three genes, R (red), Y (yellow) and W (White).",
                        genotypes: [
                            {genotype:"rryyWW", color: "White"},
                            {genotype:"rryyWw", color: "White", origin:"seed"},
                            {genotype:"rrYyWW", color: "Yellow"},
                            {genotype:"rrYyWw", color: "Yellow"},
                            {genotype:"rrYYWW", color: "Yellow", origin:"seed"},
                            {genotype:"rrYYWw", color: "Yellow"},
                            {genotype:"rrYYww", color: "Yellow"},
                            {genotype:"RrYYWW", color: "Yellow"},
                            {genotype:"RrYYWw", color: "Yellow"},
                            {genotype:"RrYYww", color: "Yellow"},
                            {genotype:"RRyyWW", color: "Red", origin:"seed"},
                            {genotype:"RRyyWw", color: "Red"},
                            {genotype:"RryyWW", color: "Red"},
                            {genotype:"RryyWw", color: "Red"},
                            {genotype:"RRYyWW", color: "Red"},
                            {genotype:"RRYyWw", color: "Red"},
                            {genotype:"rrYyww", color: "Blue"},
                            {genotype:"rryyww", color: "Blue"},
                            {genotype:"Rryyww", color: "Blue", origin: "mystery island"},
                            {genotype:"RrYyWW", color: "Orange"},
                            {genotype:"RrYyWw", color: "Orange"},
                            {genotype:"RrYyww", color: "Orange"},
                            {genotype:"RRYYWW", color: "Orange"},
                            {genotype:"RRYYWw", color: "Orange", origin: "mystery island"},
                            {genotype:"RRyyww", color: "Purple"},
                            {genotype:"RRYyww", color: "Purple"},
                            {genotype:"RRYYww", color: "Purple"}
                        ]
                    },
                    "Hyacinths": {
                        description: "Hyacinths have three genes, R (red), Y (yellow) and W (White).",
                        genotypes: [
                            {genotype:"rryyWW", color: "White"},
                            {genotype:"rryyWw", color: "White", origin: "seed"},
                            {genotype:"rrYyww", color: "White"},
                            {genotype:"Rryyww", color: "White"},
                            {genotype:"rrYyWW", color: "Yellow"},
                            {genotype:"rrYyWw", color: "Yellow"},
                            {genotype:"rrYYWW", color: "Yellow", origin: "seed"},
                            {genotype:"rrYYWw", color: "Yellow"},
                            {genotype:"rrYYww", color: "Yellow"},
                            {genotype:"RrYYWw", color: "Yellow"},
                            {genotype:"RrYYww", color: "Yellow"},
                            {genotype:"RrYyWw", color: "Yellow"},
                            {genotype:"RrYyww", color: "Yellow"},
                            {genotype:"RryyWW", color: "Red"},
                            {genotype:"RRyyWW", color: "Red"},
                            {genotype:"RRyyWw", color: "Red", origin: "seed"},
                            {genotype:"RRyyww", color: "Red"},
                            {genotype:"RRYyWw", color: "Red"},
                            {genotype:"RRYyww", color: "Red"},
                            {genotype:"RryyWw", color: "Pink", origin: "mystery island"},
                            {genotype:"RrYyWW", color: "Orange"},
                            {genotype:"RrYYWW", color: "Orange", origin: "mystery island"},
                            {genotype:"RRYYWW", color: "Purple"},
                            {genotype:"RRYYWw", color: "Purple"},
                            {genotype:"RRYYww", color: "Purple"},
                            {genotype:"RRYyWW", color: "Blue", origin: "mystery island"},
                            {genotype:"rryyww", color: "Blue"},
                        ]
                    },
                    "Tulips": {
                        description: "Cosmos have three genes, R (red), Y (yellow) and S (Shade).",
                        genotypes: [
                            {genotype:"rryyss", color: "White"},
                            {genotype:"rryySs", color: "White", origin: "seed"},
                            {genotype:"rryySS", color: "White"},
                            {genotype:"rrYySS", color: "White"},
                            {genotype:"RryySS", color: "White"},
                            {genotype:"rrYyss", color: "Yellow"},
                            {genotype:"rrYySs", color: "Yellow"},
                            {genotype:"rrYYss", color: "Yellow", origin: "seed"},
                            {genotype:"rrYYSs", color: "Yellow"},
                            {genotype:"rrYYSS", color: "Yellow"},
                            {genotype:"RrYySs", color: "Yellow"},
                            {genotype:"RrYySS", color: "Yellow"},
                            {genotype:"RrYYSs", color: "Yellow"},
                            {genotype:"RrYYSS", color: "Yellow"},
                            {genotype:"Rryyss", color: "Red"},
                            {genotype:"RRyySs", color: "Red", origin: "seed"},
                            {genotype:"RRyySS", color: "Red"},
                            {genotype:"RRYySs", color: "Red"},
                            {genotype:"RRYySS", color: "Red"},
                            {genotype:"RryySs", color: "Pink", origin: "mystery island"},
                            {genotype:"RrYyss", color: "Orange"},
                            {genotype:"RrYYss", color: "Orange", origin: "mystery island"},
                            {genotype:"RRyyss", color: "Black"},
                            {genotype:"RRYyss", color: "Black", origin: "mystery island"},
                            {genotype:"RRYYss", color: "Purple"},
                            {genotype:"RRYYSs", color: "Purple"},
                            {genotype:"RRYYSS", color: "Purple"}
                        ]
                    },
                    "Windflowers": {
                        description: "Windflowers have three genes, R (red), O (Orange) and W (White).",
                        genotypes: [
                            {genotype: "rrooWW", color:"White"},
                            {genotype: "rrooWw", color:"White", origin:"seed"},
                            {genotype: "rrOoWW", color:"Orange"},
                            {genotype: "rrOoWw", color:"Orange"},
                            {genotype: "rrOOWW", color:"Orange", origin:"seed"},
                            {genotype: "rrOOWw", color:"Orange"},
                            {genotype: "rrOOww", color:"Orange"},
                            {genotype: "RrOOWW", color:"Orange"},
                            {genotype: "RrOOWw", color:"Orange"},
                            {genotype: "RrOOww", color:"Orange"},
                            {genotype: "RRooWW", color:"Red", origin:"seed"},
                            {genotype: "RRooWw", color:"Red"},
                            {genotype: "RROoWW", color:"Red"},
                            {genotype: "RROoWw", color:"Red"},
                            {genotype: "RrooWW", color:"Red"},
                            {genotype: "RrooWw", color:"Red"},
                            {genotype: "rrooww", color:"Blue"},
                            {genotype: "rrOoww", color:"Blue"},
                            {genotype: "Rrooww", color:"Blue"},
                            {genotype: "RrOoWW", color:"Pink"},
                            {genotype: "RrOoWw", color:"Pink"},
                            {genotype: "RrOoww", color:"Pink"},
                            {genotype: "RROOWW", color:"Pink"},
                            {genotype: "RROOWw", color:"Pink"},
                            {genotype: "RRooww", color:"Purple"},
                            {genotype: "RROoww", color:"Purple"},
                            {genotype: "RROOww", color:"Purple"},
                        ]
                    }
                }
            };
        }
    }
</script>

<style>

    h1 {
        letter-spacing: 2px;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0;
    }

    .description {
        max-width: 50vw;
    }

    .option-select {
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 20px;
        margin: 0 10px;
    }


    .punnett-squares {
        display: flex;
        margin-bottom: 30px;
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