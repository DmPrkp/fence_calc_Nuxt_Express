<template>
  <div>    
    <v-data-table
      :headers="headers"
      :items="arrObj"
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
          <v-toolbar-title>{{title}}</v-toolbar-title>
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

export default {
  props: ["title", "type"],
  data() {
    return {
      compType: this.type,
      cloneObj: [],    
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
  computed: {
    ...mapState(["matList",]),
    arrObj() {     
      return this.$store.state.matList[this.compType];      
    }
  },
  methods: {
    //clonedObj(obj) {},
    /*editItem(item) {
      this.editedIndex = cloneObj.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = cloneObj.indexOf(item);
      cloneObj.splice(index, 1);
      //for (let i = 0; i < $store.matList.length; i++) {$store.matList[i].number = i + 1;}
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
        Object.assign(cloneObj[this.editedIndex], this.editedItem);
      } else {
        cloneObj.push(this.editedItem);
      }
      this.close();
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },*/
  },  
};
</script>