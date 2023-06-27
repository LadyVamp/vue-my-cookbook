<template>
    <v-chip-group active-class="primary--text">
        <v-chip v-for="item in seasons" :key="item" outlined class="text-caption" @click="filterBySeason(item)">
            <IconSeason :season="item" />
        </v-chip>
    </v-chip-group>
</template>

<script>
import IconSeason from '@/components/Recipe/Icons/IconSeason';

export default {
    name: 'FilterBySeason',
    components: { IconSeason },
    data() {
        return {
            seasons: ['all', 'winter', 'spring', 'summer', 'autumn'],
        };
    },

    methods: {
        filterBySeason(selectedSeason) {
            this.$emit('filterBySeason', selectedSeason);
        },
    },
};
</script>
