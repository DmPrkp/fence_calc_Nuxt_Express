<template>
  <div class="mx-auto">
    <v-data-table
      :headers="headers"
      :items="cloneObj"
      :items-per-page="100"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="char"
      show-expand
      class="elevation-3"
      hide-default-footer
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="800px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="success" big tile dark class="mb-2" v-bind="attrs" v-on="on">
                <v-icon class="mr-2">mdi-plus-circle</v-icon>добавить
              </v-btn>
            </template>
            <v-card>              
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="6" md="2">
                      <v-text-field
                        type="text"
                        v-model="editedItem.name"
                        :label="headers[0].text"
                        :rules="rules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" md="7">
                      <v-text-field
                        type="text"
                        v-model="editedItem.char"
                        :label="headers[1].text"
                        :rules="rules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" md="1">
                      <v-text-field
                        type="number"                       
                        v-model="editedItem.quantity"
                        :label="headers[2].text"
                        :rules="rules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" md="1">
                      <v-text-field
                        type="text"
                        v-model="editedItem.unitOfMeasurement"
                        :label="headers[3].text"
                        :rules="rules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" md="1">
                      <v-text-field
                        type="text"
                        v-model="editedItem.type"
                        :label="headers[4].text"
                        :rules="rules"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        type="text"
                        v-model="editedItem.expandRow"
                        label="Пояснение"
                        :rules="rulesLong"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
                <v-btn color="blue darken-1" text @click="save">Сохранить</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
      cloneObj: JSON.parse(
        JSON.stringify(this.$store.state.matList[this.type])
      ),
      expanded: [],
      dialog: false,
      rules: [(value) => (value.length < 50) || "Слишком длинная строка"],
      rulesLong: [(value) => (value.length < 500) || "Слишком длинная строка"],
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
      editedIndex: -1,
      editedItem: {
        name: "",
        char: "",
        quantity: "",
        unitOfMeasurement: "",
        type: "",
        expandRow : "",      
      },
      defaultItem: {
        name: "",
        char: "",
        quantity: "",
        unitOfMeasurement: "",
        type: "",
        expandRow: "",  
      },
    };
  },
  computed: {
    ...mapState(["matList"]),
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.cloneObj.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.cloneObj.indexOf(item);
      this.cloneObj.splice(index, 1);
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
        Object.assign(this.cloneObj[this.editedIndex], this.editedItem);
      } else {
        this.cloneObj.push(this.editedItem);
      }
      this.close();
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
};
</script>