<template>
  <div>
    <v-icon v-if="feature.includes('fast')" color="accent" :title="feature">
      mdi-clock-fast
    </v-icon>
    <v-icon v-if="feature.includes('oven')" color="accent" :title="feature">
      mdi-stove
    </v-icon>
    <v-icon
      v-if="feature.includes('6servings')"
      color="accent"
      :title="feature"
    >
      mdi-numeric-6-box-multiple-outline
    </v-icon>
    <v-icon v-if="feature.includes('combo')" color="accent" :title="feature">
      mdi-puzzle
    </v-icon>
    <v-icon v-if="feature.includes('cauldron')" color="accent" :title="feature">
      mdi-pot-steam-outline
    </v-icon>
  </div>
</template>

<script>
export default {
  name: "IconFeature",
  props: {
    feature: {
      type: Array,
      required: true,
    },
  },
};
</script>