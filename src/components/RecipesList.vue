<template>
  <v-container fluid>
    <h2 class="secondary--text">Список рецептов</h2>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Поиск по названию"
      single-line
    ></v-text-field>
    <v-chip-group mandatory active-class="primary--text">
      <v-chip
        v-for="(label, key) in mainIngredients"
        :key="key"
        @click="mainIngredient = key"
        outlined
      >
        <IconStaple :staple="key" />{{ label }}
      </v-chip>
    </v-chip-group>
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
      mainIngredient: "all",
      mainIngredients: {
        all: "Все",
        vegetable: "Овощи и фрукты",
        bird: "Птица",
        meat: "Мясо",
        fish: "Рыба и морепродукты",
      },
    };
  },
  computed: {
    filteredList() {
      return this.getAllRecipes().filter((recipe) => {
        if (this.mainIngredient === "all") {
          return recipe.title.toLowerCase().includes(this.search.toLowerCase());
        } else if (
          Object.keys(this.mainIngredients).includes(this.mainIngredient)
        ) {
          return recipe.staple === this.mainIngredient;
        }
      });
    },
  },
  mounted() {
    if (this.filteredList.length === 0) {
      this.fetchRecipes();
    }
  },
  methods: {
    ...mapActions(["fetchRecipes"]),
    ...mapGetters(["getAllRecipes"]),
  },
};
</script>

<style lang='scss' scoped>
.v-card__title {
  line-height: 1.25rem;
  word-break: normal;
}
</style>