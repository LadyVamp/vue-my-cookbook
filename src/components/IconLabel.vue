<template>
    <div>
        <v-icon :color="getIconColor(label)" :title="label">{{
            getIcon(label)
        }}</v-icon>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
    },

    methods: {
        getIcon(label) {
            switch (label) {
                case "vegetable":
                    return "mdi-leaf";
                case "bird":
                    return "mdi-food-drumstick";
                case "meat":
                    return "mdi-food-steak";
                case "fish":
                    return "mdi-fish";
            }
        },
        getIconColor(label) {
            switch (label) {
                case "vegetable":
                    return "light-green darken-1";
                case "bird":
                    return "red lighten-3";
                case "meat":
                    return "red darken-2";
                case "fish":
                    return "blue lighten-2";
            }
        },
    },
};
</script>