<template>
    <v-row>
        <v-col>
            <v-chip-group active-class="primary--text">
                <v-chip
                    v-for="item in staples"
                    :key="item"
                    outlined
                    class="text-caption"
                    @click="filterByStaple(item)"
                >
                    <IconStaple :staple="item" />
                </v-chip>
            </v-chip-group>
        </v-col>
    </v-row>
</template>

<script>
import IconStaple from "@/components/IconStaple";

export default {
    name: "FilterByStaple",
    components: { IconStaple },
    data() {
        return {
            staples: ["all", "vegetable", "bird", "meat", "fish", "dairy"],
        };
    },
    methods: {
        filterByStaple(selectedStaple) {
            this.$emit("filterByStaple", selectedStaple);
        },
    },
};
</script>