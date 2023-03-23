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
        <v-row>
            <v-col>
                <div v-for="item in constProducts" :key="item">
                    <a v-if="selectedShop.value === 'auchan'" :href="item.auchan" target="_blank">{{ item.name }}</a>
                    <a v-if="selectedShop.value === 'globus'" :href="item.globus" target="_blank">{{ item.name }}</a>
                </div>
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
                { value: 'globus', text: 'Глобус' },
                { value: 'metro', text: 'Метро' },
                { value: 'lenta', text: 'Лента' },
                { value: 'okey', text: 'Окей' },
                { value: 'vkusvill', text: 'Вкусвилл' },
            ],
            constProducts: [
                {
                    name: 'Яйцо куриное',
                    auchan: 'https://sbermarket.ru/auchan/c/moloko-sir-yajtsa-rastitelnie-produkti-8f15252/yajtsa?sort=unit_price_asc',
                    globus: 'https://sbermarket.ru/globus/c/katalog-globus/moloko-yajtsa/yajtsa?sid=32731&sort=unit_price_asc',
                },
                {
                    name: 'Хлеб',
                    auchan: 'https://sbermarket.ru/auchan/c/khleb-khlebtsi-vipechka/khleb-lavash-lepeshki?sid=177&source=category',
                    globus: 'https://sbermarket.ru/globus/c/katalog-globus/khleb-vipechka/khleb-lavash-lepeshki?sid=32731',
                },
                {
                    name: 'Сыр',
                    auchan: 'https://sbermarket.ru/auchan/c/moloko-sir-yajtsa-rastitelnie-produkti-8f15252/siyri/f/tverdyy-217249/polutverdyy-217250?sid=177&source=category&sort=unit_price_asc&discounted=true',
                    globus: 'https://sbermarket.ru/globus/c/katalog-globus/moloko-yajtsa/siri-new/f/tverdyy-217125/polutverdyy-217126?sid=32731&discounted=true&sort=popularity',
                },
                {
                    name: 'Ветчина',
                    auchan: 'https://sbermarket.ru/auchan/c/kolbasi-sosiski-delikatesy/vetchina-delikatesi?sid=177&source=category&sort=unit_price_asc&discounted=true',
                    globus: 'https://sbermarket.ru/globus/c/katalog-globus/kolbasi-sosiski-delikatesi/kolbasi-vetchiny?sid=32731&sort=unit_price_asc&discounted=true',
                },
                {
                    name: 'Фрукты',
                    auchan: 'https://sbermarket.ru/auchan/c/ovoshchi-frukti-orekhi/frukti?sid=177&source=category&sort=unit_price_asc',
                    globus: 'https://sbermarket.ru/globus/c/katalog-globus/ovoshchi-frukti-orekhi/frukti?sid=32731&sort=unit_price_asc',
                },
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
