<template>
    <div class="text-caption print_version">
        <h3 class="mt-4" :class="getColorByStaple(recipe.staple)">
            {{ recipe.title }}
        </h3>
        <div v-for="(value, name) in recipe.ingredients" :key="name">
            <p>{{ name }} – {{ value }}</p>
        </div>
        <h4 class="mt-2 ml-4">Приготовление</h4>
        <div v-for="(item, index) in recipe.steps" :key="item.key">
            <p>{{ index }}. {{ item }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecipePrintVersion",
    props: {
        recipe: {
            type: Object,
            required: true,
        },
    },
    methods: {
        getColorByStaple(staple) {
            switch (staple) {
                case "vegetable":
                    return "green lighten-4";
                case "bird":
                    return "pink lighten-4";
                case "meat":
                    return "red lighten-4";
                case "fish":
                    return "blue lighten-4";
                case "dairy":
                    return "yellow lighten-4";
            }
        },
    },
};
</script>


<style lang='scss'>
.print_version {
    border: dashed 1px;
    padding: 16px 5px;
    width: 350px;
    p {
        margin: 0 0 0 16px;
    }
    h3 {
        text-align: center;
    }
}
</style>