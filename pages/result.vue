<template>
  <div>
    <div>
      <h2 class="text-center mb-10">РЕЗУЛЬТАТ РАСЧЕТА</h2>
      <v-row>
        <v-col col="12" lg="3">
          <yourFence />
        </v-col>
        <v-col col="12" lg="9">
          <resultList title="Фундамент" type="0" />
          <resultList title="Колонны" type="1" />
          <resultList title="Покрытие" type="2" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import yourFence from "../components/yourFence.vue";
import resultList from "../components/resultList.vue";

export default {
  data() {
    return {   
    }
  },
   fetch(context) {
    return context.$axios
      .post("/base", context.store.state.currentType)
      .catch((err) => console.log("errPost"))
      .then((res) => {        
        context.store.commit("setMaterialList", res.data);
      })
      .catch((err) => console.log("errResponse"));
  },
  computed: {
    currentType() {
      return this.$store.state.currentType;
    }
  },
  components: {
    yourFence: yourFence,
    resultList: resultList
  },
};
</script>