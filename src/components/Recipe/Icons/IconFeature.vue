<template>
    <div>
        <v-icon color="accent" :title="getIconLabel(feature)">
            {{ getIcon(feature) }}
        </v-icon>
    </div>
</template>

<script>
export default {
    name: 'Iconfeature',
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
                    key: 'cauldron',
                    label: 'Утятница',
                    icon: 'mdi-dome-light',
                },
                {
                    key: 'pot',
                    label: 'Кастрюля',
                    icon: 'mdi-pot-steam-outline',
                },
                {
                    key: 'combo',
                    label: 'Комбо',
                    icon: 'mdi-hexagon-multiple-outline',
                },
                {
                    key: 'grill',
                    label: 'Гриль',
                    icon: 'mdi-grill',
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
