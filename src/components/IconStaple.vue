<template>
    <div>
        <v-icon :color="getIconColor(staple)" :title="getIconLabel(staple)">
            {{ getIcon(staple) }}
        </v-icon>
    </div>
</template>

<script>
export default {
    name: "IconStaple",
    props: {
        staple: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            iconStaples: [
                {
                    key: "all",
                    label: "Все",
                    icon: "mdi-star",
                    color: "accent lighten-2",
                },
                {
                    key: "vegetable",
                    label: "Овощи и фрукты",
                    icon: "mdi-food-apple",
                    color: "light-green darken-1",
                },
                {
                    key: "bird",
                    label: "Птица",
                    icon: "mdi-food-drumstick",
                    color: "red lighten-3",
                },
                {
                    key: "meat",
                    label: "Мясо",
                    icon: "mdi-food-steak",
                    color: "red darken-",
                },
                {
                    key: "fish",
                    label: "Рыба и морепродукты",
                    icon: "mdi-fish",
                    color: "blue lighten-2",
                },
                {
                    key: "dairy",
                    label: "Молочные продукты",
                    icon: "mdi-cheese",
                    color: "amber lighten-2",
                },
            ],
        };
    },
    methods: {
        getIcon(staple) {
            return this.iconStaples.find((item) => item.key === staple).icon;
        },
        getIconLabel(staple) {
            return this.iconStaples.find((item) => item.key === staple).label;
        },
        getIconColor(staple) {
            return this.iconStaples.find((item) => item.key === staple).color;
        },
    },
};
</script>