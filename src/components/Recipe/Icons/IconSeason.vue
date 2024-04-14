<template>
    <v-icon :color="getIconColor(season)" :title="getIconLabel(season)">
        {{ getIcon(season) }}
    </v-icon>
</template>

<script>
export default {
    name: 'IconSeason',
    props: {
        season: {
            type: String,
            required: true,
            default: 'all',
        },
    },
    data() {
        return {
            // all | summer
            // https://www.eco-lakomka.ru/articles/sezonnost_ovoshei_i_fruktov
            // Иконки https://materialdesignicons.com/
            // Цвета https://vuetifyjs.com/en/styles/colors/#material-colors
            iconSeasons: [
                {
                    key: 'all',
                    label: 'Все сезоны',
                    icon: 'mdi-sun-snowflake',
                    color: 'light-green darken-1',
                },
                {
                    key: 'summer',
                    label: 'Лето',
                    icon: 'mdi-white-balance-sunny',
                    color: 'yellow darken-1',
                },
            ],
        };
    },

    methods: {
        getIcon(season) {
            return this.iconSeasons.find((item) => item.key === season).icon;
        },
        getIconLabel(season) {
            return this.iconSeasons.find((item) => item.key === season).label;
        },
        getIconColor(season) {
            return this.iconSeasons.find((item) => item.key === season).color;
        },
    },
};
</script>
