<template>
  <div>
    <div>
      <h2 class="text-center mb-10">РЕЗУЛЬТАТ РАСЧЕТА</h2>
      <v-row>
        <v-col col="12" lg="3">
          <v-row>
            <div class="mx-auto">
              <yourFence />
            </div>
          </v-row>
          <v-row>
            <div class="mx-auto">
              <v-btn class="my-5" elevation="3" @click="sendArr()">
                <v-icon dark>mdi-file-download-outline</v-icon>
                <span class="ml-2">Скачать список</span>
              </v-btn>
            </div>
          </v-row>
        </v-col>
        <v-col col="12" lg="9" class="mt-n3" >
          <v-row>
            <v-col col="10">
              <resultList title="Фундамент" type="0" />
            </v-col>
          </v-row>
          <v-row>
            <v-col col="10">
              <resultList title="Колонны" type="1" />
            </v-col>
          </v-row>
          <v-row>
            <v-col col="10">
              <resultList title="Покрытие" type="2" />
            </v-col>
          </v-row>
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
      answerArr: [],
    };
  },
  fetch(context) {
    return context.$axios
      .post("/base", context.store.state.currentType)
      .catch((err) => console.log("errPost"))
      .then((res) => {
        //console.log(res.data)
        context.store.commit("setMaterialList", res.data);
      })
      .catch((err) => console.log("err Response"));
  },
  computed: {
    currentType() {
      return this.$store.state.currentType;
    },
  },
  components: {
    yourFence: yourFence,
    resultList: resultList,
  },
  methods: {
    async sendArr() {
      const _list = await this.$axios
        .post("/getItemsFileList", this.$store.state.matList)
        .catch((err) => console.log("errPost"))
        .then((res) => {
          //console.log(res, "response from server")
          //console.log(res.data)
          const url = window.URL.createObjectURL(new Blob([res.data]));
          //console.log(url)
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "file.txt");
          document.body.appendChild(link);
          link.click();
        })
        .catch((err) => console.log("Response is errored", err));
    },
  },
};
</script>