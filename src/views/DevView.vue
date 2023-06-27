<template>
    <div class="my-2">
        <!-- <LinkButton :label="'цвета'" :link="'https://colorscheme.ru/#3i31Tw0qMw0w0'" :icon="'mdi-palette'" /> -->
        <!-- <LinkButton :label="'иконки'" :link="'https://materialdesignicons.com/tag/food-drink'" :color="'secondary'" /> -->
        <!-- <LinkButton :label="'favicon'" :link="'https://icons8.ru/icon/set/watermelon/emoji'" :color="'accent'" /> -->
        <h3 class="secondary--text">Кириллица в транслит для id</h3>
        <CyrillicTransliterator />
        <LinkButton label="gist" link="https://gist.github.com/LadyVamp/" color="#f5f5f5" />
    </div>
</template>

<script>
import LinkButton from '@/components/ui-components/LinkButton';
import CyrillicTransliterator from '@/components/Recipe/CyrillicTransliterator';

export default {
    components: {
        LinkButton,
        CyrillicTransliterator,
    },
};
</script>
