<template>
    <v-app>
        <TheHeader />
        <v-main>
            <v-container>
                <v-tabs>
                    <v-tab to="/">
                        <v-icon class="pr-1"> mdi-pot-mix </v-icon>
                        Рецепты
                    </v-tab>
                    <v-tab to="/cheatsheets">
                        <v-icon class="pr-1"> mdi-lightbulb-outline </v-icon>
                        Cheatsheets
                    </v-tab>
                    <v-tab to="/about">
                        <v-icon class="pr-1"> mdi-information-outline </v-icon>
                        About
                    </v-tab>
                </v-tabs>
                <router-view />
            </v-container>
        </v-main>
        <TheFooter />
    </v-app>
</template>

<script>
import TheHeader from "@/components/Layout/TheHeader.vue";
import TheFooter from "@/components/Layout/TheFooter.vue";

export default {
    name: "App",
    components: {
        TheHeader,
        TheFooter,
    },
};
</script>


<style lang='scss'>
a {
    text-decoration: none;
}
</style>
