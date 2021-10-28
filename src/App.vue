<template>
    <v-app>
        <TheHeader :menuItems="menuItems" />
        <v-main>
            <v-container>
                <TheTabs :menuItems="menuItems" />
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
    components: {
        TheHeader,
        TheFooter,
        TheTabs,
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
            ],
        };
    },
};
</script>


<style lang='scss'>
a {
    text-decoration: none;
}
</style>
