<template>
    <span :title="getIconLabel(feature)">
        {{ getIcon(feature) }}
    </span>
</template>

<script>
/**
 * https://emojipedia.org/search/
 */
export default {
    name: 'EmojiFeature',
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
                    icon: '🎲',
                },
                {
                    key: 'fast',
                    label: 'Быстрый',
                    icon: '⏱',
                },
                {
                    key: 'oven',
                    label: 'Духовка',
                    icon: '🎛️',
                },
                {
                    key: 'cauldron',
                    label: 'Утятница',
                    icon: '🦆',
                },
                {
                    key: 'pot',
                    label: 'Кастрюля',
                    icon: '🍲',
                },
                {
                    key: 'combo',
                    label: 'Комбо',
                    icon: '🧩',
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
