<template>
    <v-icon color="accent" :title="getIconLabel(feature)">
        {{ getIcon(feature) }}
    </v-icon>
</template>

<script>
export default {
    name: 'IconFeature',
    props: {
        feature: {
            type: String,
            required: true,
            default: 'all',
        },
    },
    data() {
        return {
            iconFeatures: [
                {
                    key: 'all',
                    label: 'Все особенности',
                    icon: 'mdi-layers-outline',
                },
                {
                    key: 'fast',
                    label: 'Быстрый',
                    icon: 'mdi-clock-fast',
                },
                {
                    key: 'oven',
                    label: 'Духовка',
                    icon: 'mdi-stove',
                },
                {
                    key: 'stewingdish',
                    label: 'Утятница',
                    icon: 'mdi-dome-light',
                },
                {
                    key: 'pot',
                    label: 'Кастрюля',
                    icon: 'mdi-pot-steam-outline',
                },
                {
                    key: 'grill',
                    label: 'Гриль',
                    icon: 'mdi-grill',
                },
                {
                    key: 'toaster',
                    label: 'Мультипекарь',
                    icon: 'mdi-toaster',
                },
                {
                    key: 'afghan_cauldron',
                    label: 'Афганский казан',
                    icon: 'mdi-kettlebell',
                },
            ],
        };
    },

    methods: {
        getIcon(feature) {
            return this.iconFeatures.find((item) => item.key === feature).icon;
        },
        getIconLabel(feature) {
            return this.iconFeatures.find((item) => item.key === feature).label;
        },
    },
};
</script>
