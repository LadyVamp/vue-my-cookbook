<template>
  <v-app>
    <TheHeader :menu-items="menuItems" />
    <v-main>
      <v-container>
        <TheTabs :menu-items="menuItems" />
        <router-view />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from "@/components/Layout/TheHeader.vue";
import TheFooter from "@/components/Layout/TheFooter.vue";
import TheTabs from "@/components/Layout/TheTabs.vue";

export default {
  name: "App",
  components: { TheHeader, TheFooter, TheTabs },
  metaInfo: {
    title: "Мои рецепты",
    titleTemplate: "%s | LadyVamp's recipes",
  },
  data() {
    return {
      menuItems: [
        {
          name: "Рецепты",
          path: "/",
          icon: "mdi-pot-mix",
        },
        {
          name: "Cheatsheets",
          path: "/cheatsheets",
          icon: "mdi-lightbulb-outline",
        },
        {
          name: "About",
          path: "/about",
          icon: "mdi-information-outline",
        },
        {
          name: "Generator",
          path: "/generator",
          icon: "mdi-auto-fix",
        },
      ],
    };
  },
};
</script>


<style lang='scss'>
a {
  text-decoration: none;
}
li {
    list-style-type: none;
}
</style>
