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
        <v-row>
            <v-col>
                <v-chip-group mandatory active-class="primary--text">
                    <v-chip
                        v-for="(label, key) in staples"
                        :key="key"
                        @click="selectedStaple = key"
                        outlined
                    >
                        <IconStaple :staple="key" />{{ label }}
                    </v-chip>
                </v-chip-group>
            </v-col>
        </v-row>

        <v-row>
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
    </v-container>
</template>

<script>
import IconStaple from "@/components/IconStaple";
import IconFeature from "@/components/IconFeature";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "RecipesList",
    components: { IconStaple, IconFeature },
    data() {
        return {
            search: "",
            selectedStaple: "all",
            staples: {
                all: "Все",
                vegetable: "Овощи и фрукты",
                bird: "Птица",
                meat: "Мясо",
                fish: "Рыба и морепродукты",
            },
            options: [
                { id: "title", name: "По названию" },
                { id: "ingredients", name: "По ингредиентам" },
            ],
            selected: { id: "title", name: "По названию" },
        };
    },
    computed: {
        filteredList() {
            if (this.search === "" && this.selectedStaple === "all") {
                return this.getAllRecipes();
            } else if (this.search !== "" && this.selected.id === "title") {
                // поиск по названию
                return this.getAllRecipes().filter((recipe) =>
                    recipe.title
                        .toLowerCase()
                        .includes(this.search.toLowerCase())
                );
            } else if (
                this.search !== "" &&
                this.selected.id === "ingredients"
            ) {
                // поиск по ингредиентам
                console.log("TODO", this.search, this.selected.id);
                return this.getAllRecipes();
            } else if (this.staples !== "all") {
                return this.getAllRecipes().filter(
                    (recipe) => recipe.staple === this.selectedStaple
                );
            }

            return this.getAllRecipes();
        },
    },
    mounted() {
        if (this.filteredList.length === 0) {
            this.fetchRecipes();
        }
    },
    methods: {
        ...mapActions(["fetchRecipes"]),
        ...mapGetters(["getAllRecipes", "getRecipesCount"]),
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