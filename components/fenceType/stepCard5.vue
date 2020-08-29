<template>
  <v-card color="lighten-1" class="d-flex flex-column align-center mb-5" min-height="450">
    <h4 class="mb-15">Определяем высоту</h4>

    <div class="d-flex flex-row align-end mb-10">
      <v-img :src="raptor" contain max-width="600px" class="m-0"></v-img>

      <div
        :style="{ height: (currentType.fenceHeight*50)+'px' }"        
        class="mx-10 line"
      ></div>

      <v-img :src="human" contain max-width="150px"></v-img>
    </div>

    <div>
      <h3>Укажите высоту забора от земли(м):</h3>
      <v-text-field type="number" placeholder="1.8 м" @input="uploadHeight($event)" :rules="rules"></v-text-field>
	  <p>{{currentType.fenceHeight}}</p>
    </div>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      height: 1.8,
      raptor: "/img/raptor.png",
      human: "/img/human.png",
      rules: [
        (value) => !!value || "необходимо заполнить!",
        (value) =>
          !isNaN(value) || "введите значение в метрах! (Примеры: 2.3; 2; 1.79)",
        (value) =>
          !(value > 3.5) || "для такого высокого забора лучше сделать проект!",
      ],
    };
  },  
  computed: {
    ...mapState(['currentType'])
  },
  methods: {
    uploadHeight: function (e) {		
      this.$store.commit("setHeight", e);
    },
  },
};
</script>

<style scoped>
	.line {
		width: 10px; 
		background-color: black;
	}
</style>
