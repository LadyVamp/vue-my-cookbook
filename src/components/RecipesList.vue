<template>
    <v-container fluid>
        <h2 class="secondary--text">Список рецептов</h2>
        <v-row>
            <v-col class="d-flex justify-end">
                <div class="search-select">
                    <v-select
                        label="Поиск"
                        v-model="selected"
                        :items="options"
                        item-value="id"
                        item-text="name"
                        return-object
                    >
                    </v-select>
                </div>
                <div class="search-input">
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        :label="'Поиск по ' + getRecipesCount() + ' рецептам'"
                        single-line
                    ></v-text-field>
                </div>
            </v-col>
        </v-row>
        <FilterByStaple @filterByStaple="onFilterByStaple" />
        <FilterByFeature @filterByFeature="onFilterByFeature" />
        <v-row v-if="getLoading() === false">
            <v-col
                v-for="item in filteredList"
                :key="item.id"
                cols="12"
                sm="6"
                md="4"
                xl="3"
            >
                <v-card width="360px" height="360px">
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
                            height="200px"
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
        <div v-else>
            <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
            ></v-progress-circular>
        </div>
    </v-container>
</template>

<script>
import IconStaple from "@/components/IconStaple";
import IconFeature from "@/components/IconFeature";
import { mapActions, mapGetters } from "vuex";
import FilterByStaple from "@/components/FilterByStaple";
import FilterByFeature from "@/components/FilterByFeature";

export default {
    name: "RecipesList",
    components: { IconStaple, IconFeature, FilterByStaple, FilterByFeature },
    data() {
        return {
            search: "",
            options: [
                { id: "title", name: "По названию" },
                { id: "ingredients", name: "По ингредиентам" },
            ],
            selected: { id: "title", name: "По названию" },
            filteredList: [],
        };
    },
    /* computed: {
        filteredList() {
            const searchInput = this.search.toLowerCase();
            if (this.search !== "" && this.selected.id === "title") {
                // поиск по названию
                return this.getAllRecipes().filter((recipe) =>
                    recipe.title.toLowerCase().includes(searchInput)
                );
            }
            if (this.search !== "" && this.selected.id === "ingredients") {
                // поиск по ингредиентам
                const set = new Set();
                this.getAllRecipes().forEach((recipe) => {
                    if (recipe.ingredients) {
                        Object.keys(recipe.ingredients).forEach((item) => {
                            if (item.toLowerCase().includes(searchInput)) {
                                set.add(recipe);
                            }
                        });
                    }
                });
                return set;
            }
            // if (this.selectedStaple !== "all") {
            //     return this.getAllRecipes().filter(
            //         (recipe) => recipe.staple === this.selectedStaple
            //     );
            // }
            if (this.selectedFeature !== "all") {
                return this.getAllRecipes().filter(
                    (recipe) => recipe.feature === this.selectedFeature
                );
            }

            return this.getAllRecipes();
        },
    },
	*/

    mounted() {
        if (this.filteredList.length === 0) {
            this.fetchRecipes();
        }
    },
    updated() {
        if (this.filteredList.length === 0) {
            this.showAllRecipes();
        }
    },
    methods: {
        ...mapActions(["fetchRecipes"]),
        ...mapGetters(["getAllRecipes", "getRecipesCount", "getLoading"]),

        showAllRecipes() {
            this.filteredList = this.getAllRecipes();
        },
        onFilterByStaple(selectedStaple) {
            console.log("onFilterByStaple", selectedStaple);
            if (selectedStaple === "all") {
                this.showAllRecipes();
            } else {
                this.filteredList = this.getAllRecipes().filter(
                    (recipe) => recipe.staple === selectedStaple
                );
            }
        },
        onFilterByFeature(selectedFeature) {
            console.log("onFilterByFeature", selectedFeature);
            if (selectedFeature === "all") {
                this.showAllRecipes();
            } else {
                this.filteredList = this.getAllRecipes().filter(
                    (recipe) => recipe.feature === selectedFeature
                );
            }
        },
    },
};
</script>

<style lang='scss' scoped>
.v-card__title {
    line-height: 1.25rem;
    word-break: normal;
}
.search-select {
    display: block;
    margin-right: 5px;
    width: 200px;
}
.search-input {
    width: 250px;
}
</style>