<template>
    <v-btn target="_blank" :color="color">
        <v-icon class="pr-1">
            {{ icon }}
        </v-icon>
        {{ label }}
    </v-btn>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        // icons https://materialdesignicons.com/
        icon: {
            type: String,
            default: 'mdi-open-in-new',
        },
        color: {
            type: String,
            default: 'primary',
        },
    },
};
</script>
