<template>
    <img v-if="color" class="flower-image"
         :src="flowerImage(color)"
         :alt="color"/>
    <div v-else class="flower-image"></div>
</template>

<script>
    export default {
        name: "FlowerImage",
        props: {
            color: {
                type: String,
                default: null
            }
        },
        methods: {
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
    .flower-image {
        width: 60px;
        height: 60px;
        padding: 5px;
        border-radius: 30px;
        background-color: #edf2f2;
    }
</style>