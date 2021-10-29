<template>
    <div>
        <v-icon :color="getIconColor(staple)" :title="staple">
            {{ getIcon(staple) }}
        </v-icon>
    </div>
</template>

<script>
export default {
    name: "IconStaple",
    props: {
        staple: {
            type: String,
            required: true,
        },
    },

    methods: {
        getIcon(staple) {
            switch (staple) {
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
        getIconColor(staple) {
            switch (staple) {
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