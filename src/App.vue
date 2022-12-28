<template>
  <v-app>
    <v-main>
      <IpTracker />
    </v-main>
  </v-app>
</template>

<script>
import IpTracker from "./components/IpTracker.vue";
export default {
  name: "App",

  components: {
    IpTracker,
  },

  data: () => ({
    //
  }),
};
</script>
