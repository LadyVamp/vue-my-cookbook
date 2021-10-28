<template>
    <div>
        <h2 class="secondary--text">CheatSheets</h2>
        <h3 class="secondary--text">Шпаргалка по приготовлению круп</h3>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Крупа</th>
                        <th class="text-left">Соотношение крупы и воды</th>
                        <th class="text-left">Время варки (минут)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.water }}</td>
                        <td>{{ item.time }}</td>
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
            items: [
                {
                    name: "Гречка",
                    water: "1 : 2",
                    time: 7,
                },
                {
                    name: "Рис коричневый",
                    water: "1 : 2",
                    time: 30,
                },
                {
                    name: "Булгур",
                    water: "1 : 2",
                    time: 15,
                },
                {
                    name: "Чечевица красная",
                    water: "1 : 2",
                    time: 10,
                },
                {
                    name: "Макароны",
                    water: "1 : 2",
                    time: 10,
                },
            ],
        };
    },
};
</script>