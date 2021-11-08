<template>
    <v-footer padless class="mt-4">
        <v-col class="text-center text-body-2 py-1" cols="12">
            © {{ new Date().getFullYear() }}
            <a
                href="https://ladyvamp.github.io/ng-portfolio/"
                target="_blank"
                title="Перейти к портфолио"
                >Nadezhda Dyakova aka LadyVamp</a
            >
        </v-col>
        <v-col class="text-right pt-0 pb-1 caption" cols="12">
            <a href="https://ladyvamp.github.io/vue-my-cookbook/" class="grey--text text--darken-3" target="_blank">
                {{ version }}
            </a>
        </v-col>
    </v-footer>
</template>

<script>
import { version } from "../../../package.json";

export default {
    name: "TheFooter",
    data() {
        return {
            version: "v" + version,
        };
    },
};
</script>

<style lang='scss'>
a {
    text-decoration: none;
}
</style>
