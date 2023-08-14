<template>
    <div>
        <v-row>
            <v-col xs="12" md="3">
                <v-switch v-model="isShowLinksSber" label="Показать ссылки на продукты в Сбермаркете"></v-switch>
            </v-col>
        </v-row>
        <v-row>
            <v-col xs="12" md="3">
                <v-select v-model="selectedShop" label="Магазин" :items="shops" return-object></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col xs="12" md="3">
                <BaseButton label="Сохранить" icon="mdi-content-save-cog" color="secondary" @click.native="save" />
            </v-col>
        </v-row>
        <v-row>
            <v-col xs="12" md="3">
                <div v-for="item in constProducts" :key="item">
                    <a v-if="selectedShop.value === 'auchan'" :href="item.auchan" target="_blank">{{ item.name }}</a>
                    <a v-if="selectedShop.value === 'globus'" :href="item.globus" target="_blank">{{ item.name }}</a>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import BaseButton from '@/components/ui-components/BaseButton';
import shopList from '/src/assets/shops.js';

export default {
    name: 'RecipeSettings',
    components: {
        BaseButton,
    },
    data() {
        return {
            isShowLinksSber: false,
            selectedShop: { value: 'auchan', text: 'Ашан' },
            shops: [],
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
        this.loadShops();
        this.isShowLinksSber = this.$store.state.recipeModule.isShowLinksSber;
        this.selectedShop = this.$store.state.recipeModule.selectedShop;
    },
    methods: {
        loadShops() {
            this.shops = shopList;
        },
        save() {
            this.$store.commit('setIsShowLinksSber', this.isShowLinksSber);
            this.$store.commit('setSelectedShop', this.selectedShop);
        },
    },
};
</script>
