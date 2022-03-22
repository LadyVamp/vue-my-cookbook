<template>
    <div>
        <v-navigation-drawer v-model="isShowDrawer" app left temporary>
            <v-list-item-group>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            {{ title }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ subtitle }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-for="item in menuItems" :key="item.name">
                    <v-list-item-title>
                        <router-link :to="item.path">
                            <v-icon class="pr-1"> {{ item.icon }} </v-icon>
                            {{ item.name }}
                        </router-link>
                    </v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-navigation-drawer>

        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon
                class="hidden-sm-and-up"
                @click="isShowDrawer = !isShowDrawer"
            ></v-app-bar-nav-icon>
            <router-link :to="{ path: '/' }">
                <v-img
                    alt="Logo"
                    class="shrink mr-2"
                    contain
                    src="../../assets/logo.png"
                    transition="scale-transition"
                    width="40"
                    title="На главную"
                />
            </router-link>
            <v-app-bar-title class="hidden-xs-only">
                {{ title }}
            </v-app-bar-title>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: "TheHeader",
    props: {
        menuItems: {
            type: Array,
            required: true,
        },
    },
    data: () => ({
        title: "My recipes",
        subtitle: "Проверенные рецепты",
        isShowDrawer: false,
    }),
};
</script>

<style lang="scss" scoped>
</style>