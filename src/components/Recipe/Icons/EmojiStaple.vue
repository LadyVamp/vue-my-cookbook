<template>
    <span :title="getIconLabel(staple)">
        {{ getIcon(staple) }}
    </span>
</template>

<script>
export default {
    name: 'EmojiStaple',
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
                    icon: '🎲',
                },
                {
                    key: 'vegetable',
                    label: 'Овощи и фрукты',
                    icon: '🍏',
                },
                {
                    key: 'bird',
                    label: 'Птица',
                    icon: '🍗',
                },
                {
                    key: 'meat',
                    label: 'Мясо',
                    icon: '🥩',
                },
                {
                    key: 'fish',
                    label: 'Рыба и морепродукты',
                    icon: '🦐',
                },
                {
                    key: 'dairy',
                    label: 'Молочные продукты',
                    icon: '🧀',
                },
                {
                    key: 'dessert',
                    label: 'Десерт',
                    icon: '🍰',
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
    },
};
</script>
