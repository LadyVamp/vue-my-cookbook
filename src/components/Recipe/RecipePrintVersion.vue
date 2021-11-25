<template>
    <div class="text-caption print_version">
        <h3 :class="recipe.staple">
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
};
</script>


<style lang='scss'>
.print_version {
    border: dashed 1px;
    width: 350px;
    p {
        margin: 0 0 0 16px;
    }
    h3 {
        text-align: center;
        padding: 5px;
    }
    .vegetable {
        background-color: LimeGreen;
    }
    .bird {
        background-color: Pink;
    }
    .meat {
        background-color: Crimson;
    }
    .fish {
        background-color: SkyBlue;
    }
    .dairy {
        background-color: Khaki;
    }    
}
</style>