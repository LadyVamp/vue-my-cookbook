<template>
    <v-chip-group active-class="primary--text">
        <v-chip v-for="item in natures" :key="item" outlined class="text-caption" @click="filterByNature(item)">
            <IconNature :nature="item" />
        </v-chip>
    </v-chip-group>
</template>

<script>
import IconNature from '@/components/Recipe/Icons/IconNature.vue';

export default {
    name: 'FilterByNature',
    components: { IconNature },
    data() {
        return {
            natures: ['all', 'vegetable', 'bird', 'meat', 'fish', 'dairy', 'dessert'],
        };
    },
    methods: {
        filterByNature(selectedNature) {
            this.$emit('filterByNature', selectedNature);
        },
    },
};
</script>
