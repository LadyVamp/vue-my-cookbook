<template>
    <div>
        <!-- <LinkButton :label="'цвета'" :link="'https://colorscheme.ru/#3i31Tw0qMw0w0'" :icon="'mdi-palette'" /> -->
        <!-- <LinkButton :label="'иконки'" :link="'https://materialdesignicons.com/tag/food-drink'" :color="'secondary'" /> -->
        <!-- <LinkButton :label="'favicon'" :link="'https://icons8.ru/icon/set/watermelon/emoji'" :color="'accent'" /> -->
        <LinkButton
            :label="'кириллица в транслит для id'"
            :link="'https://alfilatov.com/cyrillic-to-translit-js/'"
            :color="'secondary'"
            :icon="'mdi-arrow-left-right'"
        />
        <LinkButton :label="'gist'" :link="'https://gist.github.com/LadyVamp/'" :color="'#f5f5f5'" />
    </div>
</template>

<script>
import LinkButton from '@/components/Buttons/LinkButton';

export default {
    components: {
        LinkButton,
    },
};
</script>
