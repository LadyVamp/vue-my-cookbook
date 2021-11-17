<template>
    <div>
        <v-icon color="accent" :title="feature">
            {{ getIcon(feature) }}
        </v-icon>
    </div>
</template>

<script>
export default {
    name: "Iconfeature",
    props: {
        feature: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            iconFeatures: [
                {
                    key: "all",
                    label: "Все",
                    icon: "mdi-star",
                },
                {
                    key: "fast",
                    label: "Быстрый",
                    icon: "mdi-clock-fast",
                },
                {
                    key: "oven",
                    label: "Духовка",
                    icon: "mdi-stove",
                },
                {
                    key: "cauldron",
                    label: "Утятница",
                    icon: "mdi-pot-steam-outline",
                },
                {
                    key: "pot",
                    label: "Кастрюля",
                    icon: "mdi-pot-mix-outline",
                },
                {
                    key: "combo",
                    label: "Комбо",
                    icon: "mdi-puzzle",
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