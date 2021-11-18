<template>
    <v-row>
        <v-col>
            <v-chip-group active-class="primary--text">
                <v-chip
                    v-for="item in features"
                    :key="item"
                    outlined
                    class="text-caption"
                    @click="filterByFeature(item)"
                >
                    <IconFeature :feature="item" />
                </v-chip>
            </v-chip-group>
        </v-col>
    </v-row>
</template>

<script>
import IconFeature from "@/components/IconFeature";

export default {
    name: "FilterByFeature",
    components: { IconFeature },
    data() {
        return {
            features: ["all", "fast", "oven", "cauldron", "pot", "combo"],
        };
    },

    methods: {
        filterByFeature(selectedFeature) {
            this.$emit("filterByFeature", selectedFeature);
        },
    },
};
</script>