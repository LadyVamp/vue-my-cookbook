<template>
    <div>
        <div class="my-2">
            <h3 class="secondary--text">Шпаргалка по приготовлению круп</h3>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Крупа</th>
                            <th class="text-left">Соотношение крупы и воды</th>
                            <th class="text-left">Время варки (минут)</th>
                            <th class="text-left">Срок хранения</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cereals" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.water }}</td>
                            <td>{{ item.time }}</td>
                            <td>{{ item.shelf_life }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
        <div class="my-6">
            <h3 class="secondary--text">Что нельзя хранить в холодильнике</h3>
            <v-simple-table>
                <template v-slot:default>
                    <tbody>
                        <tr v-for="item in products" :key="item.name">
                            <td v-if="item.icon">
                                <img :src="item.icon" alt="" />
                            </td>
                            <td v-if="item.icons">
                                <span v-for="(image, index) in item.icons" :key="index">
                                    <img :src="image" />
                                </span>
                            </td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.description }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cereals: [
                {
                    name: 'Гречка',
                    water: '1 : 2',
                    time: 7,
                    shelf_life: '2 года',
                },
                {
                    name: 'Рис коричневый',
                    water: '1 : 2',
                    time: 30,
                    shelf_life: '6 месяцев',
                },
                {
                    name: 'Булгур',
                    water: '1 : 2',
                    time: 15,
                    shelf_life: '14 месяцев',
                },
                {
                    name: 'Чечевица красная',
                    water: '1 : 2',
                    time: 10,
                    shelf_life: '1 год',
                },
                {
                    name: 'Чечевица зеленая',
                    water: '1 : 2',
                    time: 15,
                    shelf_life: '1 год',
                },
                {
                    name: 'Макароны',
                    water: '1 : 2',
                    time: 10,
                    shelf_life: '2,5 года',
                },
                {
                    name: 'Горох колотый',
                    water: '1 : 2',
                    time: 30,
                    shelf_life: '1 год',
                },
            ],

            products: [
                {
                    icon: 'https://img.icons8.com/color/48/000000/tomato.png',
                    name: 'Помидоры',
                    description: 'В холоде становятся безвкусными и мучнистыми',
                },
                {
                    icons: [
                        'https://img.icons8.com/color/48/000000/onion.png',
                        'https://img.icons8.com/color/48/000000/garlic.png',
                    ],
                    name: 'Лук, чеснок',
                    description: 'Становится вялым, быстрее начинает прорастать и гнить',
                },
                {
                    icon: 'https://img.icons8.com/color/48/000000/potato.png',
                    name: 'Картофель',
                    description: 'Меняются вкусовые качества, картофельный крахмал превращается в сахар',
                },
                {
                    icon: 'https://img.icons8.com/color/48/000000/banana.png',
                    name: 'Бананы',
                    description: 'Выделяют этилен, что портит соседние продукты, в холоде быстрее чернеют и портятся',
                },
                {
                    icons: [
                        'https://img.icons8.com/color/48/000000/pineapple.png',
                        'https://img.icons8.com/color/48/000000/kiwi.png',
                        'https://img.icons8.com/color/48/000000/mango.png',
                    ],
                    name: 'Ананасы, киви, манго',
                    description: 'И другие тропические фрукты, теряют товарный вид, ухудшаются вкусовые качества',
                },
                {
                    icon: 'https://img.icons8.com/color/48/000000/bread.png',
                    name: 'Хлеб',
                    description:
                        'Быстро впитывает посторонние запахи и от влажности может появиться плесень, теряет изначальный вкус',
                },
                {
                    icon: 'https://img.icons8.com/color/48/000000/chocolate-bar.png',
                    name: 'Шоколад',
                    description: 'Покрывается белым налетом, теряет эстетичный вид и вкусовые качества',
                },
                {
                    icon: 'https://img.icons8.com/color/48/000000/olive-oil.png',
                    name: 'Оливковое масло',
                    description: 'Появляется горечь, белый осадок, ухудшается вкус и полезные свойства',
                },
                {
                    icon: 'https://img.icons8.com/color/48/000000/eggplant.png',
                    name: 'Баклажаны',
                    description: 'В холоде быстрее портятся, на кожуре начинают появляться тёмные пятна',
                },
                {
                    icon: 'https://img.icons8.com/color/48/000000/java-coffee-bean-logo.png',
                    name: 'Кофе',
                    description:
                        'От холода и влаги зерна теряют свой аромат и вкус, а также впитывают посторонние запахи',
                },
                {
                    icon: 'https://img.icons8.com/color/48/000000/honey.png',
                    name: 'Мед',
                    description: 'Теряет полезные свойства, вкус и текстуру, быстро кристаллизуется',
                },
                {
                    icon: 'https://img.icons8.com/color/48/000000/avocado.png',
                    name: 'Авокадо',
                    description: 'В холодильнике не дозреет, может почернеть и испортиться',
                },
                {
                    icon: 'https://img.icons8.com/color/48/000000/smoked-paprika.png',
                    name: 'Специи',
                    description: 'Теряют свой аромат',
                },
            ],
        };
    },
};
</script>
