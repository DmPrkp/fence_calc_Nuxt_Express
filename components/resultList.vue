<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="matList"
      :items-per-page="100"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="char"
      show-expand
      class="elevation-1 mx-auto"
      hide-default-footer
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Необходимые материалы и инструменты</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">{{ item.expandRow }}</td>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              class="mr-2"
              @click="editItem(item)"
              color="primary"
              v-bind="attrs"
              v-on="on"
            >mdi-pencil</v-icon>
          </template>
          <span>Редактировать</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="error" @click="deleteItem(item)" v-bind="attrs" v-on="on">mdi-delete</v-icon>
          </template>
          <span>Удалить</span>
        </v-tooltip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import yourFence from "../components/yourFence.vue";

export default {
  data() {
    return {
      expanded: [],
      singleExpand: true,
      headers: [
        {
          text: "Материалы и инструмент",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Характеристики", value: "char" },
        { text: "Кол-во", value: "quantity" },
        { text: "Ед.изм", value: "unitOfMeasurement" },
        { text: "Тип", value: "type" },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  fetch(context) {
    return context.$axios
      .post("/result/requestBase", context.store.state.currentType)
      .catch((err) => console.log("errPost"))
      .then((res) => {
        context.store.commit("setMaterialList", res.data);
      })
      .catch((err) => console.log("errResponse"));
  },
  computed: {
    ...mapState(["matList", "currentType"]),
  },
  methods: {
    editItem(item) {
      this.editedIndex = $store.matList.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = $store.matList.indexOf(item);
      $store.matList.splice(index, 1);
      /*for (let i = 0; i < $store.matList.length; i++) {
        $store.matList[i].number = i + 1;
      }*/
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign($store.matList[this.editedIndex], this.editedItem);
      } else {
        $store.matList.push(this.editedItem);
      }
      this.close();
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  components: {
    yourFence: yourFence,
  },
};
</script>