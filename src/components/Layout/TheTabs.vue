<template>
    <v-tabs class="hidden-xs-only">
        <v-tab v-for="item in menuItems" :key="item.name" :to="item.path">
            <v-icon class="pr-1"> {{ item.icon }} </v-icon>
            {{ item.name }}
        </v-tab>
    </v-tabs>
</template>

<script>
export default {
    name: "TheTabs",
    props: {
        menuItems: {
            type: Array,
            required: true,
        },
    },
};
</script>