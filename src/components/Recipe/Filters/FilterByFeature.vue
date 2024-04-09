<template>
    <v-chip-group active-class="primary--text">
        <v-chip v-for="item in features" :key="item" outlined class="text-caption" @click="filterByFeature(item)">
            <IconFeature :feature="item" />
        </v-chip>
    </v-chip-group>
</template>

<script>
import IconFeature from '@/components/Recipe/Icons/IconFeature.vue';

export default {
    name: 'FilterByFeature',
    components: { IconFeature },
    data() {
        return {
            features: ['all', 'fast', 'oven', 'pot', 'stewingdish', 'grill', 'toaster', 'afghan_cauldron'],
        };
    },

    methods: {
        filterByFeature(selectedFeature) {
            this.$emit('filterByFeature', selectedFeature);
        },
    },
};
</script>
