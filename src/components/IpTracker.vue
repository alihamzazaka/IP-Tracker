<template>
  <div class="d-flex flex-column back">
    <v-icon size="50" class="mt-10" color="white darken-3"
      >mdi-map-marker</v-icon
    >
    <h1 class="text-center white--text">IP LOCATOR WEB APP</h1>
    <div>
      <v-text-field
        class="ml-15 mr-15"
        dark
        placeholder="Enter IP Here"
        @keypress.enter="searchData"
        v-model="ip"
      ></v-text-field>
      <div class="text-center mb-5">
        <v-btn
          class="white--text"
          color="success"
          @click="searchData"
          :loading="loading"
        >
          Enter to Search IP
        </v-btn>
      </div>
      <div class="d-flex justify-center">
<!-- <iframe 
  width="300" 
  height="170" 
  frameborder="0" 
  scrolling="no" 
  marginheight="0" 
  marginwidth="0" 
  src="https://maps.google.com/maps?q='+track.LAT+','+track.LON+'&hl=es&z=14&amp;output=embed"
 >
 </iframe>    -->
 </div>
    </div>

    <div class="input-area back tabel" v-show="ipInfo">
      <v-simple-table class="table-box back">
        <template v-slot:default>
          <tr>
            <th colspan="2" class="text-center text-h5">Tracked IP's Info</th>
          </tr>

          <tbody>
            <tr v-for="(track, key, index) in detailedInfo[0]" :key="index">
              <td class="text-center white--text">{{ key.toUpperCase() }}</td>
              <td colspan="2" class="text-center green--text">
                {{ track }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import { store } from "@/store";

export default {
  name: "IpTracker",
  components: {},
  computed: {
    detailedInfo() {
      return store.getters.getdetailedInfo;
    },
  },
  watch: {
    detailedInfo() {
      if (this.detailedInfo) {
        this.loading = false;
        this.ipInfo = true;
      }
    },
  },
  data() {
    return {
      loading: false,
      ip: "",
      ipInfo: false,
    };
  },
  methods: {
    searchData() {
      this.loading = true;
      store.dispatch("getdetailedInfo", [this.ip]);
      this.ip = "";
    },
  },
};
</script>

<style scoped>
.tabel {
  margin-top: -40px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.back {
  background-color: black;
}
</style>
