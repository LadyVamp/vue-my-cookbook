<template>
    <div class="about">
        <h2 class="secondary--text">About</h2>
        <LinkButton
            :label="'цвета'"
            :link="'https://colorscheme.ru/#3i31Tw0qMw0w0'"
            :icon="'mdi-palette'"
        />
        <LinkButton
            :label="'иконки'"
            :link="'https://materialdesignicons.com/'"
            :color="'secondary'"
        />
        <LinkButton
            :label="'favicon'"
            :link="'https://icons8.ru/icon/set/watermelon/emoji'"
            :color="'accent'"
        />
        <LinkButton
            :label="'кириллица в транслит для id'"
            :link="'https://alfilatov.com/cyrillic-to-translit-js/'"
            :color="'error'"
			:icon="'mdi-arrow-left-right'"
        />
        <LinkButton
            :label="'gist'"
            :link="'https://gist.github.com/LadyVamp/'"
            :color="'#f5f5f5'"
        />
    </div>
</template>

<script>
import LinkButton from "@/components/Buttons/LinkButton";

export default {
    components: {
        LinkButton,
    },
};
</script>
