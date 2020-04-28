<template>
    <img v-if="color && flowerType" class="flower-image"
         :src="flowerImage()"
         :alt="color + ' ' + flowerType"/>
    <div v-else class="flower-image"/>
</template>

<script>
    export default {
        name: "FlowerImage",
        data() {
            return {
                imageUrls : {
                    "Mums": {
                        ["Red"]: "https://acnhcdn.com/latest/MenuIcon/PltMum2.png",
                        ["Pink"]: "https://acnhcdn.com/latest/MenuIcon/PltMum3.png",
                        ["White"]: "https://acnhcdn.com/latest/MenuIcon/PltMum0.png",
                        ["Purple"]: "https://acnhcdn.com/latest/MenuIcon/PltMum5.png",
                        ["Green"]: "https://acnhcdn.com/latest/MenuIcon/PltMum4.png",
                        ["Yellow"]: "https://acnhcdn.com/latest/MenuIcon/PltMum1.png"
                    },
                    "Roses":{
                        ["Red"]: "https://acnhcdn.com/latest/MenuIcon/Rose0.png",
                        ["White"]: "https://acnhcdn.com/latest/MenuIcon/Rose1.png",
                        ["Yellow"]: "https://acnhcdn.com/latest/MenuIcon/Rose2.png",
                        ["Pink"]: "https://acnhcdn.com/latest/MenuIcon/Rose3.png",
                        ["Orange"]: "https://acnhcdn.com/latest/MenuIcon/Rose4.png",
                        ["Purple"]: "https://acnhcdn.com/latest/MenuIcon/Rose5.png",
                        ["Black"]: "https://acnhcdn.com/latest/MenuIcon/Rose6.png",
                        ["Blue"]: "https://acnhcdn.com/latest/MenuIcon/Rose7.png",
                        ["Golden"]: "https://acnhcdn.com/latest/MenuIcon/PltGoldenRose.png"
                    },
                    "Cosmos": {
                        ["White"]: "https://acnhcdn.com/latest/MenuIcon/Cosmos0.png",
                        ["Red"]: "https://acnhcdn.com/latest/MenuIcon/Cosmos1.png",
                        ["Yellow"]: "https://acnhcdn.com/latest/MenuIcon/Cosmos2.png",
                        ["Pink"]: "https://acnhcdn.com/latest/MenuIcon/Cosmos3.png",
                        ["Orange"]: "https://acnhcdn.com/latest/MenuIcon/Cosmos4.png",
                        ["Black"]: "https://acnhcdn.com/latest/MenuIcon/Cosmos5.png"
                    },
                    "Lilies": {
                        ["White"]: "https://acnhcdn.com/latest/MenuIcon/Yuri0.png",
                        ["Yellow"]: "https://acnhcdn.com/latest/MenuIcon/Yuri1.png",
                        ["Red"]: "https://acnhcdn.com/latest/MenuIcon/Yuri2.png",
                        ["Orange"]: "https://acnhcdn.com/latest/MenuIcon/Yuri3.png",
                        ["Pink"]: "https://acnhcdn.com/latest/MenuIcon/Yuri4.png",
                        ["Black"]: "https://acnhcdn.com/latest/MenuIcon/Yuri5.png"
                    },
                    "Windflowers": {
                        ["White"]: "https://acnhcdn.com/latest/MenuIcon/Anemone0.png",
                        ["Red"]: "https://acnhcdn.com/latest/MenuIcon/Anemone1.png",
                        ["Orange"]: "https://acnhcdn.com/latest/MenuIcon/Anemone2.png",
                        ["Pink"]: "https://acnhcdn.com/latest/MenuIcon/Anemone3.png",
                        ["Purple"]: "https://acnhcdn.com/latest/MenuIcon/Anemone4.png",
                        ["Blue"]: "https://acnhcdn.com/latest/MenuIcon/Anemone5.png"
                    },
                    "Hyacinths": {
                        ["White"]: "https://acnhcdn.com/latest/MenuIcon/Hyacinth0.png",
                        ["Yellow"]: "https://acnhcdn.com/latest/MenuIcon/Hyacinth1.png",
                        ["Red"]: "https://acnhcdn.com/latest/MenuIcon/Hyacinth2.png",
                        ["Orange"]: "https://acnhcdn.com/latest/MenuIcon/Hyacinth3.png",
                        ["Pink"]: "https://acnhcdn.com/latest/MenuIcon/Hyacinth4.png",
                        ["Purple"]: "https://acnhcdn.com/latest/MenuIcon/Hyacinth5.png",
                        ["Blue"]: "https://acnhcdn.com/latest/MenuIcon/Hyacinth6.png"
                    },
                    "Pansies": {
                        ["White"]: "https://acnhcdn.com/latest/MenuIcon/Pansi0.png",
                        ["Yellow"]: "https://acnhcdn.com/latest/MenuIcon/Pansi1.png",
                        ["Red"]: "https://acnhcdn.com/latest/MenuIcon/Pansi2.png",
                        ["Purple"]: "https://acnhcdn.com/latest/MenuIcon/Pansi3.png",
                        ["Orange"]: "https://acnhcdn.com/latest/MenuIcon/Pansi4.png",
                        ["Blue"]: "https://acnhcdn.com/latest/MenuIcon/Pansi5.png"
                    },
                    "Tulips": {
                        ["Red"]: "https://acnhcdn.com/latest/MenuIcon/PltTurip0.png",
                        ["White"]: "https://acnhcdn.com/latest/MenuIcon/PltTurip1.png",
                        ["Yellow"]: "https://acnhcdn.com/latest/MenuIcon/PltTurip2.png",
                        ["Pink"]: "https://acnhcdn.com/latest/MenuIcon/PltTurip3.png",
                        ["Purple"]: "https://acnhcdn.com/latest/MenuIcon/PltTurip4.png",
                        ["Black"]: "https://acnhcdn.com/latest/MenuIcon/PltTurip5.png",
                        ["Orange"]: "https://acnhcdn.com/latest/MenuIcon/PltTurip6.png"
                    }
                }
            }
        },
        props: {
            color: {
                type: String,
                default: null
            },
            flowerType: {
                type: String,
                default: null
            }
        },
        methods: {
            flowerImage() {
                return this.imageUrls[this.flowerType][this.color];
            }
        }
    }
</script>

<style scoped>
    .flower-image {
        width: 60px;
        height: 60px;
        padding: 5px;
        border-radius: 30px;
        background-color: #edf2f2;
    }
</style>