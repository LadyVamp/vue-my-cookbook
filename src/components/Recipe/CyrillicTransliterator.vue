<template>
    <div>
        <v-row>
            <v-col xs="12" md="4"> <v-text-field v-model="textInput" label="Название рецепта"></v-text-field></v-col>
            <v-col xs="12" md="4" class="d-flex">
                <v-text-field v-model="translitted" label="Nazvanie-retsepta" disabled></v-text-field>
                <v-btn
                    icon
                    color="secondary"
                    class="mt-3 ml-4"
                    title="Скопировать"
                    :disabled="!textInput"
                    @click="copyToClipBoard"
                >
                    <v-icon>mdi-content-copy</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import CyrillicToTranslit from 'cyrillic-to-translit-js';

export default {
    name: 'CyrillicTransliterator',
    data() {
        return {
            textInput: '',
        };
    },
    computed: {
        translitted() {
            return CyrillicToTranslit().transform(this.textInput, '-');
        },
    },
    methods: {
        copyToClipBoard() {
            navigator.clipboard.writeText(this.translitted);
        },
    },
};
</script>
