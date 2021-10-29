<template>
    <div class="my-2">
        <v-btn :href="link" target="_blank" :color="color">
            <v-icon class="pr-1">
                {{ icon }}
            </v-icon>
            {{ label }}
        </v-btn>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        // icons https://materialdesignicons.com/
        icon: {
            type: String,
            default: "mdi-open-in-new",
        },
        color: {
            type: String,
            default: "primary",
        },
    },
};
</script>