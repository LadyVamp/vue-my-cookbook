<template>
    <v-app-bar app color="primary" dark>
        <router-link :to="{ path: '/' }">
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="../../assets/logo.png"
                transition="scale-transition"
                width="40"
            />
        </router-link>
        <v-toolbar-title class="shrink ml-2 hidden-sm-and-down">
            My cookbook
        </v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>