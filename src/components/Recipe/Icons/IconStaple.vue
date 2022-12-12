<template>
    <v-icon :color="getIconColor(staple)" :title="getIconLabel(staple)">
        {{ getIcon(staple) }}
    </v-icon>
</template>

<script>
export default {
    name: 'IconStaple',
    props: {
        staple: {
            type: String,
            required: true,
            default: 'all',
        },
    },
    data() {
        return {
            iconStaples: [
                {
                    key: 'all',
                    label: 'Все категории продуктов',
                    icon: 'mdi-layers-outline',
                    color: 'accent lighten-2',
                },
                {
                    key: 'vegetable',
                    label: 'Овощи и фрукты',
                    icon: 'mdi-food-apple',
                    color: 'light-green darken-1',
                },
                {
                    key: 'bird',
                    label: 'Птица',
                    icon: 'mdi-food-drumstick',
                    color: 'red lighten-3',
                },
                {
                    key: 'meat',
                    label: 'Мясо',
                    icon: 'mdi-food-steak',
                    color: 'red darken-2',
                },
                {
                    key: 'fish',
                    label: 'Рыба и морепродукты',
                    icon: 'mdi-fish',
                    color: 'blue lighten-2',
                },
                {
                    key: 'dairy',
                    label: 'Молочные продукты',
                    icon: 'mdi-cheese',
                    color: 'amber lighten-2',
                },
                {
                    key: 'dessert',
                    label: 'Десерт',
                    icon: 'mdi-candy',
                    color: 'lime darken-1',
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
