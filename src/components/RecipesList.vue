<template>
    <v-container fluid>
        <h2 class="secondary--text">Список рецептов</h2>
        <v-row>
            <v-col v-for="item in recipes" :key="item.id">
                <v-card max-width="360px" height="360px">
                    <router-link
                        :to="{
                            name: 'RecipeDetails',
                            params: { id: item.id },
                        }"
                    >
                        <v-img
                            :src="
                                item.imageLink
                                    ? item.imageLink
                                    : 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                            "
                            class="white--text align-end"
                            max-height="200px"
                        >
                        </v-img>
                        <v-card-title>{{ item.title }}</v-card-title>
                    </router-link>
                    <v-card-text>
                        <IconStaple :staple="item.staple" />
                        <IconFeature :feature="item.feature" />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import IconStaple from "@/components/IconStaple";
import IconFeature from "@/components/IconFeature";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "RecipesList",
    computed: {
        recipes() {
            return this.getAllRecipes();
        },
    },
    mounted() {
        if (this.recipes.length === 0) {
            this.fetchRecipes();
        }
    },
    methods: {
        ...mapActions(["fetchRecipes"]),
        ...mapGetters(["getAllRecipes"]),
    },
    components: {
        IconStaple,
        IconFeature,
    },
};
</script>


<style lang='scss' scoped>
.v-card__title {
    line-height: 1.5rem;
}
</style>