<template>
    <div>
        <h3>Список рецептов</h3>
        <v-container fluid>
            <v-row>
                <v-col v-for="item in recipeList" :key="item.id">
                    <v-card max-width="360px" height="360px">
                        <v-img
                            v-if="item.imageLink"
                            :src="item.imageLink"
                            class="white--text align-end"
                            max-height="200px"
                        >
                        </v-img>
                        <v-img
                            v-else
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                            class="white--text align-end"
                        >
                        </v-img>
                        <v-card-title>
                            <router-link
                                :to="{
                                    name: 'RecipeDetails',
                                    params: { id: item.id },
                                }"
                                >{{ item.title }}
                            </router-link>
                        </v-card-title>
                        <v-card-text>
                            <IconLabel :label="item.label" />
                            <IconFeature :feature="item.feature" />
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import IconLabel from "@/components/IconLabel";
import IconFeature from "@/components/IconFeature";

export default {
    name: "RecipesList",
    mounted() {
        this.$store.dispatch("GET_RECIPE");
    },
    computed: {
        recipeList() {
            return this.$store.getters.RECIPES;
        },
    },
    components: {
        IconLabel,
        IconFeature,
    },
};
</script>


<style lang='scss'>
</style>