<template>
  <div v-if="recipe" class="d-flex flex-column">
    <BackButton />
    <h2 class="primary--text">{{ recipe.title }}</h2>
    <div>
      <v-img
        :src="
          recipe.imageLink
            ? recipe.imageLink
            : 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
        "
        class="white--text align-end"
        height="300px"
      >
      </v-img>
    </div>
    <div>
      <IconStaple :staple="recipe.staple" />
      <IconFeature :feature="recipe.feature" />
      <v-btn
        v-if="recipe.feature.includes('combo')"
        :to="{ name: 'RecipeDetails', params: { id: recipe.comboId } }"
        color="primary"
      >
        Открыть комбо-рецепт
      </v-btn>
    </div>
    <div class="my-4">
      <h3 class="secondary--text">Ингредиенты</h3>
      <p>{{ declinationNumberOfServings }}</p>
      <p v-if="recipe.note" class="secondary--text">{{ recipe.note }}</p>
      <div v-for="(value, name) in recipe.ingredients" :key="name">
        {{ name }} – {{ value }}
      </div>
    </div>
    <div class="my-4">
      <h3 class="secondary--text">Шаги</h3>
      <ol>
        <li v-for="item in recipe.steps" :key="item.key">
          {{ item }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import IconStaple from "@/components/IconStaple";
import IconFeature from "@/components/IconFeature";
import BackButton from "@/components/Buttons/BackButton";
import { mapActions } from "vuex";

export default {
  name: "RecipeDetails",
  components: { IconStaple, IconFeature, BackButton },
  metaInfo() {
    return {
      title: this.recipe.title,
    };
  },
  computed: {
    recipe() {
      return this.$store.getters.getCurrentRecipe;
    },
    declinationNumberOfServings() {
      const servings = this.recipe.servings;
      if (servings <= 6) {
        return servings <= 4 ? servings + " порции" : servings + " порций";
      } else {
        return "Неожиданное количество порций!";
      }
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["fetchRecipes"]),
    fetchData() {
      this.fetchRecipes(this.$route.params.id);
    },
  },
  watch: {
    $route() {
      this.fetchData();
    },
  },
};
</script>


<style lang='scss'>
</style>