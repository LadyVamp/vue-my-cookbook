<template>
    <v-chip-group active-class="primary--text">
        <v-chip v-for="item in features" :key="item" outlined class="text-caption" @click="filterByFeature(item)">
            <IconFeature :feature="item" />
        </v-chip>
    </v-chip-group>
</template>

<script>
import IconFeature from '@/components/Recipe/Icons/IconFeature';

export default {
    name: 'FilterByFeature',
    components: { IconFeature },
    data() {
        return {
            features: ['all', 'fast', 'oven', 'cauldron', 'pot', 'combo'],
        };
    },

    methods: {
        filterByFeature(selectedFeature) {
            this.$emit('filterByFeature', selectedFeature);
        },
    },
};
</script>
