<template>
  <div>
    <v-icon color="accent" :title="feature">
      {{ getIcon(feature) }}
    </v-icon>
  </div>
</template>

<script>
export default {
  name: "Iconfeature",
  props: {
    feature: {
      type: String,
      required: true,
    },
  },

  methods: {
    /**
     * fast - быстрый
     * oven - в духовке
     * cauldron - в утятнице
     * combo - комбо
     */
    getIcon(feature) {
      switch (feature) {
        case "fast":
          return "mdi-clock-fast";
        case "oven":
          return "mdi-stove";
        case "cauldron":
          return "mdi-pot-steam-outline";
        case "combo":
          return "mdi-puzzle";
      }
    },
  },
};
</script>