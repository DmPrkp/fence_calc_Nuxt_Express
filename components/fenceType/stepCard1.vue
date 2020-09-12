<template>
  <v-card color="lighten-1" class="d-flex flex-column align-center mb-5" height="450">
    <h3 class="mb-2">Определяем глубину промерзания и залегания фундамента</h3>
    <v-row>
      <v-col cols="12" sm="6">
        <v-img :src="map" height="auto" max-width="600px"></v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="d-flex justify-start" v-for="(val, key) in depth" :key="key">
          <div
            :style="{ backgroundColor: colorDepth[key-1] }"
            style="width: 20px; height: 20px; border-radius: 50%; margin-right: 10px;"
          ></div>
          <p>-Тип {{key}}. Глубина промерзания до {{val}} м</p>
        </div>
      </v-col>
    </v-row>

    <div>
      <h4 class="text-center">Укажите глубину промерзания:</h4>
      <!---->
      <v-radio-group v-model="chosenDepth" :checked="setDepth(chosenDepth)" :mandatory="false" row>
        <v-radio label="до 0.5 м." color="red"  :value="depth[1]"></v-radio>
        <v-radio label="до 1 м." color="yellow" :value="depth[2]"></v-radio>
        <v-radio label="до 1.5 м." color="green" :value="depth[3]"></v-radio>
        <v-radio label="до 2 м." color="blue" :value="depth[4]"></v-radio>
      </v-radio-group>
      <p>
        <em class="text-center">Глубина залегания фундамента с учетом щебеночного основания 15см: {{ +chosenDepth + 0.15}} м</em>
        <v-icon>mdi-help-rhombus-outline</v-icon>
      </p>
    </div>
  </v-card>
</template>

<script>
export default {
  data: function () {
    return {
      depth: {
        1: 0.5,
        2: 1,
        3: 1.5,
        4: 2,
      },
      colorDepth: ["red", "yellow", "green", "blue"],
      map: "/img/depth.png",
      chosenDepth: "1",
    };
  },
  methods: {
    setDepth: function(e) {           
      this.$store.commit('setDepth', e)
    }
  }  
};
</script>


