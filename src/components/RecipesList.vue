<template>
    <v-container fluid>
        <h2 class="secondary--text">Список рецептов</h2>
        <v-row>
            <v-col
                v-for="item in this.$store.getters.getAllRecipes"
                :key="item.id"
            >
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
                        max-height="200px"
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
import { mapActions } from "vuex";

export default {
    name: "RecipesList",
    mounted() {
        this.fetchRecipes();
    },
    methods: {
        ...mapActions(["fetchRecipes"]),
    },
    components: {
        IconStaple,
        IconFeature,
    },
};
</script>


<style lang='scss'>
</style>