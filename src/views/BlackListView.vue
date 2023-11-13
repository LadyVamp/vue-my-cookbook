<template>
    <div class="my-3">
        <h3 class="secondary--text">Черный список продуктов</h3>
        <v-simple-table>
            <template v-slot:default>
                <tbody>
                    <tr v-for="item in products" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.description }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    name: 'Куркума',
                    description: 'Трудносмываемые желтые пятна',
                },
                {
                    name: 'Иван-поле Закваска бактериальная сухая для Йогурта',
                    description: 'Не получается йогурт',
                },
                {
                    name: 'Рис Агро-Альянс Slim&Fit бурый 800 г',
                    description: 'Разваривается в сопли',
                },
                {
                    name: 'Шампунь synergetic черный тмин, лайм, нероли',
                    description: 'Холодок неприятный',
                },
                {
                    name: 'Бекон свиной для жарки (сырой)',
                    description: 'Воняет',
                },
                {
                    name: 'Чай черный Greenfield Revival Blend',
                    description: 'Невкусный',
                },
                {
                    name: 'Чай черный Greenfield Wildberries Rooibos',
                    description: 'Невкусный',
                },
                {
                    name: 'Чай ройбуш без ароматизаторов',
                    description: 'Невкусный',
                },
                {
                    name: 'Швейцарский сыр с рынка',
                    description: 'Невкусный',
                },
            ],
        };
    },
};
</script>
