<template>
    <div>
        <header>
            <h1>ACNH Guide for
                <select class="option-select" v-model="selectedFlowerType">
                    <option v-bind:key="flowerType" v-bind:value="flowerType"
                            v-for="flowerType in Object.keys(flowerData)">
                        {{flowerType}}
                    </option>
                </select>

                (<select class="option-select" v-model="selectedViewType">
                    <option value="list-view">List View</option>
                    <option value="grid-view">Grid View</option>
                    <option value="punnett-squares">Punnett Squares</option>
                </select>)
            </h1>

            <div class="explanation">
                <div class="explanation-header" v-on:click="openExplanation = !openExplanation">
                    <div></div>
                    {{openExplanation ? 'Hide explanation' : 'Show explanation'}}
                    <i class="accordion-arrow material-icons">
                        {{openExplanation ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}
                    </i>
                </div>
                <div class="explanation-body" v-show="openExplanation">
                    <p>
                        Flowers have a number of genes that control their color.
                        Most flowers use <strong>R (red)</strong>, <strong>Y (yellow)</strong> and <strong>W
                        (white)</strong>.
                        Roses are unique because they also make use of the 4th gene - <strong> S (Shade) </strong>.
                        A gene is made of a pair of alleles which can be dominant (represented by a uppercase letter) or
                        recessive (represented by a lowercase letter).
                        For example, a dominant red gene is written as <strong>R</strong>, and a recessive red gene is
                        written as <strong>r</strong>.
                    </p>
                    <p>
                        When cross breeding flowers, one allele is taken from each parent at random for each gene. The
                        possible outcomes can be predicted using a
                        <a href="https://en.wikipedia.org/wiki/Punnett_square"> Punnett square.</a>
                    </p>
                    <p>For example, when breeding two flowers where both flowers have the gene <strong>'Rr'</strong>:
                    </p>
                    <PunnettSquares genotype1="Rr" genotype2="Rr"/>
                    <p>The possible outcomes for this pair are <strong>RR, Rr and rr</strong>. Since Rr appears in 2 of
                        the 4 squares it has a 50% chance of occurring, while RR and rr have a 25% chance.</p>

                    <p>To work out all the possible outcomes for two flowers, you can start by drawing a punnet square
                        for each gene.
                        For example if you bred a yellow cosmo with the genotype <strong>RR yy Ww</strong> with a orange
                        cosmo with the genotype <strong>RR Yy WW</strong>:</p>

                    <PunnettSquares genotype1="rrYYSs" genotype2="RRYySs"/>

                    <table class="forked-line" v-if="false">
                        <tr>
                            <td rowspan="6"><b>Rr</b> (1)</td>
                            <td rowspan="3"><b>YY</b>(1/2)</td>
                            <td><b>SS</b> (1/4)</td>
                            <td><b>RR YY SS</b> (1/8)</td>
                        </tr>
                        <tr>
                            <td><b>Ss</b> (1/2)</td>
                            <td><b>RR YY Ss</b> (1/4)</td>
                        </tr>
                        <tr>
                            <td><b>ss</b> (1/4)</td>
                            <td><b>RR YY ss</b> (1/8)</td>
                        </tr>
                        <tr>
                            <td rowspan="3"><b>Yy</b> (1/2)</td>
                            <td><b>SS</b> (1/4)</td>
                            <td><b>RR Yy SS</b> (1/4)</td>
                        </tr>
                        <tr>
                            <td><b>Ss</b> (1/2)</td>
                            <td><b>RR Yy Ss</b> (1/4)</td>
                        </tr>
                        <tr>
                            <td><b>ss</b> (1/4)</td>
                            <td><b>RR Yy ss</b> (1/8)</td>
                        </tr>
                    </table>

                    <p>These combination of these genes can result in these flowers:</p>

                    <div class="grid-view">
                        <ListView :outcomes="getOutcomes('rrYYSs', 'RRYySs', flowerData['Cosmos'].genotypes)"
                                  flower-type="Cosmos"/>
                    </div>

                    <p>Unfortunately, there's no easy way to check a flower's genotype in game. If you breed the flowers
                        shown above to get an orange flower,
                        it could have any of the genotypes listed under Orange. In some blue rose guides, you'll need to
                        check if the flower you've bred is the right one
                        by breeding it with a certain color to see what color offspring it produces <a
                                href="https://i.imgur.com/f1nET1S.png">(example)</a>.</p>

                    <p>However, flowers from seed bags and mystery island flowers will always have the same genes.
                        It's helpful to start cross breeding with these flowers so you can track what genes your flowers
                        have.</p>

                    <h4>Notes:</h4>
                    <ul>
                        <li>For two flowers to breed they must: touch horizontally, vertically or diagonally, have been
                            watered and have an empty spot next to one of the parents
                        </li>
                        <li>Flowers can clone if they are on their own or if all flowers that it’s touching have already
                            bred with different partners. Clones will have the exact same genes as their parent
                        </li>
                        <li>Colors don't necessarily work the same way between flowers e.g. a RRYYSS cosmo is Red but a
                            RRYYSS Lily is white
                        </li>
                        <li>Visitors watering your flowers increases their chances of spawning new flowers <a
                                href="https://media.discordapp.net/attachments/694317725190717440/702969678200438844/flower_production.png">(more
                            info)</a></li>
                        <li>There's no cap on the number of new flowers spawned each day - but each flower can only
                            breed once per day
                        </li>
                        <li>Golden roses have a unique requirement - you need to water a black rose with a golden
                            watering can. Golden roses also can't clone themselves
                        </li>
                    </ul>

                    <h4>Useful links</h4>
                    <ul>
                        <li>
                            <a href="https://imgur.com/a/ptCPgVK">ACNH Hybrid Guide: Full collection</a><br/>
                            Full list of guides by peach-n-key, including how to get every flower color. The blue rose
                            guide is especially helpful.
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/d/1P0mJsxET4zaZxk2CqrKtorVI8GEavPHzy5lj2ZdV-nE/preview">
                                Flower Layouts and Placements
                            </a><br/>
                            A very useful layout guide. Explains why the checkerboard method isn't the best to use.
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/u/0/d/1ARIQCUc5YVEd01D7jtJT9EEJF45m07NXhAm4fOpNvCs/mobilebasic">
                                ACNH/ACNL Advanced Flower Genetics
                            </a><br/>
                            A more in depth guide into the flower breeding mechanics, including a technical explanation
                            an how genes are represented in game.
                        </li>
                        <li>
                            <a href="https://docs.google.com/spreadsheets/u/0/d/11pRCX8G0xGizSYWgVhoUSu7pE-MV7AOprBcgSY1whB4/htmlview#">
                                ACNH/ACNL Flower Genes
                            </a> <br/>
                            Spreadsheet of all the possible flower colors and their genotypes.
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/d/1XPAaPUvGMWQ-n5sBLV3jM78QKxqKjiGCzx5HnD7K5RI/preview">
                                Garden FAQ
                            </a><br/>
                            Long list of FAQs about flower breeding.
                        </li>
                        <li>
                            <a href="https://aeonsake.gitlab.io/acnh-flower-breeder/">Flower Breeding Simulator</a><br/>
                            Very useful for planning layouts!
                        </li>
                        <li>
                            <a href="https://aiterusawato.github.io/guides/acnh/flowers.html#bookcomplete-list-of-genotypes">
                                Flowers — The Complete Guide
                            </a><br/>
                            A lot of useful information on flowers, also includes some information on weed mechanics.
                        </li>
                    </ul>
                </div>
            </div>

        </header>
        <FlowerGenetics
                :flowerType="selectedFlowerType"
                :genotypes="flowerData[selectedFlowerType].genotypes"
                :viewType="selectedViewType"
        />
    </div>
</template>

<script>
    import FlowerGenetics from "./FlowerGenetics";
    import PunnettSquares from "./PunnettSquares";
    import {GeneticsMixin} from "./Genetics.mixin"
    import ListView from "./ListView";

    export default {
        name: "FlowerGuide",
        components: {ListView, FlowerGenetics, PunnettSquares},
        mixins: [GeneticsMixin],
        data: function () {
            return {
                selectedFlowerType: "Mums",
                selectedViewType: "list-view",
                openExplanation: false,
                flowerData: {
                    "Roses": {
                        genotypes: [
                            {genotype: "rryyWWss", color: "White"},
                            {genotype: "rryyWWSs", color: "White"},
                            {genotype: "rryyWWSS", color: "White"},
                            {genotype: "rryyWwss", color: "White", origin: "seed"},
                            {genotype: "rryyWwSs", color: "White"},
                            {genotype: "rryyWwSS", color: "White"},
                            {genotype: "rrYyWwss", color: "White"},
                            {genotype: "rrYyWwSs", color: "White"},
                            {genotype: "rrYyWwSS", color: "White"},
                            {genotype: "rrYYwwss", color: "White"},
                            {genotype: "rrYYwwSs", color: "White"},
                            {genotype: "rrYYwwSS", color: "White"},
                            {genotype: "RryyWWSS", color: "White"},
                            {genotype: "RryyWwSS", color: "White"},
                            {genotype: "RrYyWwSS", color: "White"},
                            {genotype: "RrYYwwSS", color: "White"},
                            {genotype: "RRYyWwSS", color: "White"},
                            {genotype: "RRYYwwSS", color: "White"},

                            {genotype: "RryyWWss", color: "Red"},
                            {genotype: "RrYywwss", color: "Red"},
                            {genotype: "RryyWwss", color: "Red"},
                            {genotype: "Rryywwss", color: "Red"},
                            {genotype: "RrYyWwss", color: "Red"},
                            {genotype: "RrYYwwss", color: "Red"},
                            {genotype: "RRyyWWSs", color: "Red", origin: "seed"},
                            {genotype: "RRyyWwSs", color: "Red"},
                            {genotype: "RRyywwSs", color: "Red"},
                            {genotype: "RRYyWwss", color: "Red"},
                            {genotype: "RRYyWwSs", color: "Red"},
                            {genotype: "RRYywwSs", color: "Red"},
                            {genotype: "RRYYwwSs", color: "Red"},

                            {genotype: "rrYyWWss", color: "Yellow"},
                            {genotype: "rrYyWWSs", color: "Yellow"},
                            {genotype: "rrYyWWSS", color: "Yellow"},
                            {genotype: "rrYYWWss", color: "Yellow", origin: "seed"},
                            {genotype: "rrYYWWSs", color: "Yellow"},
                            {genotype: "rrYYWWSS", color: "Yellow"},
                            {genotype: "rrYYWwss", color: "Yellow"},
                            {genotype: "rrYYWwSs", color: "Yellow"},
                            {genotype: "rrYYWwSS", color: "Yellow"},
                            {genotype: "RrYyWWSs", color: "Yellow"},
                            {genotype: "RrYyWWSS", color: "Yellow"},
                            {genotype: "RrYYWWSs", color: "Yellow"},
                            {genotype: "RrYYWWSS", color: "Yellow"},
                            {genotype: "RrYYWwSs", color: "Yellow"},
                            {genotype: "RrYYWwSS", color: "Yellow"},
                            {genotype: "RRYyWWSS", color: "Yellow"},
                            {genotype: "RRYYWWSS", color: "Yellow"},
                            {genotype: "RRYYWwSS", color: "Yellow"},

                            {genotype: "rryywwss", color: "Purple"},
                            {genotype: "rryywwSs", color: "Purple"},
                            {genotype: "rryywwSS", color: "Purple"},
                            {genotype: "rrYywwss", color: "Purple"},
                            {genotype: "rrYywwSs", color: "Purple"},
                            {genotype: "rrYywwSS", color: "Purple"},
                            {genotype: "RryywwSS", color: "Purple"},
                            {genotype: "RrYywwSS", color: "Purple"},
                            {genotype: "RRYywwSS", color: "Purple"},

                            {genotype: "RrYyWWss", color: "Orange"},
                            {genotype: "RrYYWWss", color: "Orange"},
                            {genotype: "RrYYWwss", color: "Orange"},
                            {genotype: "RRYyWWss", color: "Orange"},
                            {genotype: "RRYyWWSs", color: "Orange"},
                            {genotype: "RRYYWWss", color: "Orange"},
                            {genotype: "RRYYWWSs", color: "Orange"},
                            {genotype: "RRYYWwss", color: "Orange"},
                            {genotype: "RRYYWwSs", color: "Orange", origin: "mystery island"},

                            {genotype: "RryyWWSs", color: "Pink"},
                            {genotype: "RryyWwSs", color: "Pink"},
                            {genotype: "RryywwSs", color: "Pink"},
                            {genotype: "RrYyWwSs", color: "Pink"},
                            {genotype: "RrYywwSs", color: "Pink"},
                            {genotype: "RrYYwwSs", color: "Pink"},
                            {genotype: "RRyyWWSS", color: "Pink"},
                            {genotype: "RRyyWwSS", color: "Pink"},
                            {genotype: "RRyywwSS", color: "Pink", origin: "mystery island"},

                            {genotype: "RRyyWWss", color: "Black"},
                            {genotype: "RRyyWwss", color: "Black"},
                            {genotype: "RRyywwss", color: "Black"},
                            {genotype: "RRYywwss", color: "Black"},

                            {genotype: "RRYYwwss", color: "Blue"}
                        ]
                    },
                    "Mums": {
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
                    "Cosmos": {
                        genotypes: [
                            {genotype: "rryyss", color: "White"},
                            {genotype: "rryySs", color: "White", origin: "seed"},
                            {genotype: "rryySS", color: "White"},
                            {genotype: "rrYySS", color: "White"},
                            {genotype: "rrYyss", color: "Yellow"},
                            {genotype: "rrYySs", color: "Yellow"},
                            {genotype: "rrYYss", color: "Yellow"},
                            {genotype: "rrYYSs", color: "Yellow", origin: "seed"},
                            {genotype: "rrYYSS", color: "Yellow"},
                            {genotype: "RRyyss", color: "Red", origin: "seed"},
                            {genotype: "RRyySs", color: "Red"},
                            {genotype: "RRyySS", color: "Red"},
                            {genotype: "RRYySS", color: "Red"},
                            {genotype: "RRYYSS", color: "Red"},
                            {genotype: "Rryyss", color: "Pink"},
                            {genotype: "RryySs", color: "Pink"},
                            {genotype: "RryySS", color: "Pink"},
                            {genotype: "RrYySS", color: "Pink", origin: "mystery island"},
                            {genotype: "RrYyss", color: "Orange"},
                            {genotype: "RrYySs", color: "Orange"},
                            {genotype: "RrYYss", color: "Orange"},
                            {genotype: "RrYYSs", color: "Orange"},
                            {genotype: "RrYYSS", color: "Orange"},
                            {genotype: "RRYyss", color: "Orange"},
                            {genotype: "RRYySs", color: "Orange", origin: "mystery island"},
                            {genotype: "RRYYss", color: "Black"},
                            {genotype: "RRYYSs", color: "Black"},
                        ]
                    },
                    "Lilies": {
                        genotypes: [
                            {genotype: "rryyss", color: "White"},
                            {genotype: "rryySs", color: "White"},
                            {genotype: "rryySS", color: "White", origin: "seed"},
                            {genotype: "rrYySs", color: "White"},
                            {genotype: "rrYySS", color: "White"},
                            {genotype: "rrYYSS", color: "White"},
                            {genotype: "RRYYSS", color: "White"},
                            {genotype: "RryySS", color: "White"},
                            {genotype: "rrYyss", color: "Yellow"},
                            {genotype: "rrYYss", color: "Yellow", origin: "seed"},
                            {genotype: "rrYYSs", color: "Yellow"},
                            {genotype: "RrYySs", color: "Yellow"},
                            {genotype: "RrYySS", color: "Yellow"},
                            {genotype: "RrYYSs", color: "Yellow"},
                            {genotype: "RrYYSS", color: "Yellow"},
                            {genotype: "Rryyss", color: "Red"},
                            {genotype: "RRYySs", color: "Red"},
                            {genotype: "RRyySs", color: "Red", origin: "seed"},
                            {genotype: "RryySs", color: "Pink"},
                            {genotype: "RRyySS", color: "Pink"},
                            {genotype: "RRYySS", color: "Pink", origin: "mystery island"},
                            {genotype: "RrYyss", color: "Orange"},
                            {genotype: "RrYYss", color: "Orange"},
                            {genotype: "RRYYss", color: "Orange"},
                            {genotype: "RRYYSs", color: "Orange", origin: "mystery island"},
                            {genotype: "RRyyss", color: "Black"},
                            {genotype: "RRYyss", color: "Black", origin: "mystery island"},
                        ]
                    },
                    "Pansies": {
                        genotypes: [
                            {genotype: "rryyWW", color: "White"},
                            {genotype: "rryyWw", color: "White", origin: "seed"},
                            {genotype: "rrYyWW", color: "Yellow"},
                            {genotype: "rrYyWw", color: "Yellow"},
                            {genotype: "rrYYWW", color: "Yellow", origin: "seed"},
                            {genotype: "rrYYWw", color: "Yellow"},
                            {genotype: "rrYYww", color: "Yellow"},
                            {genotype: "RrYYWW", color: "Yellow"},
                            {genotype: "RrYYWw", color: "Yellow"},
                            {genotype: "RrYYww", color: "Yellow"},
                            {genotype: "RRyyWW", color: "Red", origin: "seed"},
                            {genotype: "RRyyWw", color: "Red"},
                            {genotype: "RryyWW", color: "Red"},
                            {genotype: "RryyWw", color: "Red"},
                            {genotype: "RRYyWW", color: "Red"},
                            {genotype: "RRYyWw", color: "Red"},
                            {genotype: "rrYyww", color: "Blue"},
                            {genotype: "rryyww", color: "Blue"},
                            {genotype: "Rryyww", color: "Blue", origin: "mystery island"},
                            {genotype: "RrYyWW", color: "Orange"},
                            {genotype: "RrYyWw", color: "Orange"},
                            {genotype: "RrYyww", color: "Orange"},
                            {genotype: "RRYYWW", color: "Orange"},
                            {genotype: "RRYYWw", color: "Orange", origin: "mystery island"},
                            {genotype: "RRyyww", color: "Purple"},
                            {genotype: "RRYyww", color: "Purple"},
                            {genotype: "RRYYww", color: "Purple"}
                        ]
                    },
                    "Hyacinths": {
                        genotypes: [
                            {genotype: "rryyWW", color: "White"},
                            {genotype: "rryyWw", color: "White", origin: "seed"},
                            {genotype: "rrYyww", color: "White"},
                            {genotype: "Rryyww", color: "White"},
                            {genotype: "rrYyWW", color: "Yellow"},
                            {genotype: "rrYyWw", color: "Yellow"},
                            {genotype: "rrYYWW", color: "Yellow", origin: "seed"},
                            {genotype: "rrYYWw", color: "Yellow"},
                            {genotype: "rrYYww", color: "Yellow"},
                            {genotype: "RrYYWw", color: "Yellow"},
                            {genotype: "RrYYww", color: "Yellow"},
                            {genotype: "RrYyWw", color: "Yellow"},
                            {genotype: "RrYyww", color: "Yellow"},
                            {genotype: "RryyWW", color: "Red"},
                            {genotype: "RRyyWW", color: "Red"},
                            {genotype: "RRyyWw", color: "Red", origin: "seed"},
                            {genotype: "RRyyww", color: "Red"},
                            {genotype: "RRYyWw", color: "Red"},
                            {genotype: "RRYyww", color: "Red"},
                            {genotype: "RryyWw", color: "Pink", origin: "mystery island"},
                            {genotype: "RrYyWW", color: "Orange"},
                            {genotype: "RrYYWW", color: "Orange", origin: "mystery island"},
                            {genotype: "RRYYWW", color: "Purple"},
                            {genotype: "RRYYWw", color: "Purple"},
                            {genotype: "RRYYww", color: "Purple"},
                            {genotype: "RRYyWW", color: "Blue", origin: "mystery island"},
                            {genotype: "rryyww", color: "Blue"},
                        ]
                    },
                    "Tulips": {
                        genotypes: [
                            {genotype: "rryyss", color: "White"},
                            {genotype: "rryySs", color: "White", origin: "seed"},
                            {genotype: "rryySS", color: "White"},
                            {genotype: "rrYySS", color: "White"},
                            {genotype: "RryySS", color: "White"},
                            {genotype: "rrYyss", color: "Yellow"},
                            {genotype: "rrYySs", color: "Yellow"},
                            {genotype: "rrYYss", color: "Yellow", origin: "seed"},
                            {genotype: "rrYYSs", color: "Yellow"},
                            {genotype: "rrYYSS", color: "Yellow"},
                            {genotype: "RrYySs", color: "Yellow"},
                            {genotype: "RrYySS", color: "Yellow"},
                            {genotype: "RrYYSs", color: "Yellow"},
                            {genotype: "RrYYSS", color: "Yellow"},
                            {genotype: "Rryyss", color: "Red"},
                            {genotype: "RRyySs", color: "Red", origin: "seed"},
                            {genotype: "RRyySS", color: "Red"},
                            {genotype: "RRYySs", color: "Red"},
                            {genotype: "RRYySS", color: "Red"},
                            {genotype: "RryySs", color: "Pink", origin: "mystery island"},
                            {genotype: "RrYyss", color: "Orange"},
                            {genotype: "RrYYss", color: "Orange", origin: "mystery island"},
                            {genotype: "RRyyss", color: "Black"},
                            {genotype: "RRYyss", color: "Black", origin: "mystery island"},
                            {genotype: "RRYYss", color: "Purple"},
                            {genotype: "RRYYSs", color: "Purple"},
                            {genotype: "RRYYSS", color: "Purple"}
                        ]
                    },
                    "Windflowers": {
                        genotypes: [
                            {genotype: "rrooWW", color: "White"},
                            {genotype: "rrooWw", color: "White", origin: "seed"},
                            {genotype: "rrOoWW", color: "Orange"},
                            {genotype: "rrOoWw", color: "Orange"},
                            {genotype: "rrOOWW", color: "Orange", origin: "seed"},
                            {genotype: "rrOOWw", color: "Orange"},
                            {genotype: "rrOOww", color: "Orange"},
                            {genotype: "RrOOWW", color: "Orange"},
                            {genotype: "RrOOWw", color: "Orange"},
                            {genotype: "RrOOww", color: "Orange"},
                            {genotype: "RRooWW", color: "Red", origin: "seed"},
                            {genotype: "RRooWw", color: "Red"},
                            {genotype: "RROoWW", color: "Red"},
                            {genotype: "RROoWw", color: "Red"},
                            {genotype: "RrooWW", color: "Red"},
                            {genotype: "RrooWw", color: "Red"},
                            {genotype: "rrooww", color: "Blue"},
                            {genotype: "rrOoww", color: "Blue"},
                            {genotype: "Rrooww", color: "Blue"},
                            {genotype: "RrOoWW", color: "Pink"},
                            {genotype: "RrOoWw", color: "Pink"},
                            {genotype: "RrOoww", color: "Pink"},
                            {genotype: "RROOWW", color: "Pink"},
                            {genotype: "RROOWw", color: "Pink"},
                            {genotype: "RRooww", color: "Purple"},
                            {genotype: "RROoww", color: "Purple"},
                            {genotype: "RROOww", color: "Purple"},
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

    .explanation {
        border-radius: 10px;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.08);
        background: #f5f5f5;
    }

    .explanation-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-transform: uppercase;
        font-weight: bold;
        padding: 10px;
        cursor: pointer;
    }

    .explanation-body {
        max-width: 900px;
        display: inline-block;
        line-height: 20px;
        padding: 0 20px 20px 20px;
        border-top: 1px solid #dedede;
    }

    .explanation-body li {
        margin: 18px 0;
    }

    .forked-line {
        margin: auto;
        border-collapse: collapse;
    }

    .forked-line td {
        border: 2px solid #d2d2d2;
        padding: 5px 10px;
    }

    .grid-view {
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }

    .option-select {
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 20px;
        margin: 0 10px;
    }

</style>