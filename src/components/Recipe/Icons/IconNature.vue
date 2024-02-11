<template>
    <v-icon :color="getIconColor(nature)" :title="getIconLabel(nature)">
        {{ getIcon(nature) }}
    </v-icon>
</template>

<script>
export default {
    name: 'IconNature',
    props: {
        nature: {
            type: String,
            required: true,
            default: 'all',
        },
    },
    data() {
        return {
            iconNatures: [
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
        getIcon(nature) {
            return this.iconNatures.find((item) => item.key === nature).icon;
        },
        getIconLabel(nature) {
            return this.iconNatures.find((item) => item.key === nature).label;
        },
        getIconColor(nature) {
            return this.iconNatures.find((item) => item.key === nature).color;
        },
    },
};
</script>
