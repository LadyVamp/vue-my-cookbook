<template>
    <a :href="link" target="_blank">
        {{ label }}
    </a>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            required: true,
        },
    },
};
</script>
