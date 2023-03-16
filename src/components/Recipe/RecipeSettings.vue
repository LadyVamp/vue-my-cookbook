<template>
    <div>
        <v-row>
            <v-col cols="3">
                <v-switch v-model="isShowLinks" label="Показать ссылки на продукты в Сбермаркете"></v-switch>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2">
                <v-select
                    v-model="selectedShop"
                    label="Магазин"
                    :items="shopOptions"
                    item-value="value"
                    item-text="text"
                    return-object
                >
                </v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <BaseButton
                    :label="'Сохранить'"
                    :icon="'mdi-content-save-cog'"
                    :color="'secondary'"
                    @click.native="save"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import BaseButton from '@/components/Buttons/BaseButton';
export default {
    name: 'RecipeSettings',
    components: {
        BaseButton,
    },
    data() {
        return {
            isShowLinks: false,
            selectedShop: { value: 'auchan', text: 'Ашан' },
            shopOptions: [
                { value: 'auchan', text: 'Ашан' },
                { value: 'metro', text: 'Метро' },
                { value: 'globus', text: 'Глобус' },
                { value: 'lenta', text: 'Лента' },
                { value: 'okey', text: 'Окей' },
                { value: 'vkusvill', text: 'Вкусвилл' },
            ],
        };
    },
    created() {
        this.isShowLinks = this.$store.state.recipeModule.isShowLinks;
        this.selectedShop = this.$store.state.recipeModule.selectedShop;
    },
    methods: {
        save() {
            this.$store.commit('setIsShowLinks', this.isShowLinks);
            this.$store.commit('setSelectedShop', this.selectedShop);
        },
    },
};
</script>
