<template>
  <v-card class="mb-5" color="lighten-1" min-height="450">
    <v-item-group mandatory @change="setCoverType($event)">
      <v-container>
        <v-row>
          <v-col v-for="n in coverObj" :key="n.id" cols="4" md="3" lg="2">
            <h4 style="height: 45px;" class="text-center">{{n.name}}</h4>
            <v-item v-slot:default="{ active, toggle }" :value="n.id">
              <v-img
                class="text-right pa-2"
                :src="n.img"
                @click="toggle"
                height="150"
                contain
                style="cursor: pointer;"
              >
                <v-btn x-small fab color="success">
                  <v-icon outlined>{{ active ? 'mdi-check-bold' : '' }}</v-icon>
                </v-btn>
              </v-img>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      coverObj: [
        {
          id: 3.1,
          img: "/img/cover/Brick.jpg",
          name: "Кирпич",
          plus: ["Несущая способность", "долговечность"],
          minus: ["Стоймость"],
          type: "cover",
        },
        {
          id: 3.2,
          img: "/img/cover/wood.jpg",
          name: "Доска",
          plus: ["Стоимость"],
          minus: [`Недолговечность (10-20 лет)`],
          type: "cover",
        },
        {
          id: 3.3,
          img: "/img/cover/Proflist.jpg",
          name: "Профлист",
          plus: ["Долговечность"],
          minus: ["Cущественных нет"],
          type: "cover",
        },        
        {
          id: 3.4,
          img: "/img/cover/SetkaR.jpg",
          name: "Сетка рабица",
          plus: ["Стоимость"],
          minus: ["Недолговечность(10-20 лет)"],
          type: "cover",
        },
        {
          id: 3.5,
          img: "/img/cover/Shtaket.jpg",
          name: "Штакет",
          plus: ["Стоимость"],
          minus: ["Недолговечность(10-20 лет)"],
          type: "cover",
        },
        {
          id: 3.6,
          img: "/img/cover/Gitter.jpg",
          name: "ЗD сетка",
          plus: ["Стоимость"],
          minus: ["Недолговечность(10-20 лет)"],
          type: "cover",
        },
      ],
    };
  },
  methods: {
    setCoverType: function (e) {
      let e2 = "";
      let arr = [];
      for (let i = 0; i < this.coverObj.length; i++) {
        if (this.coverObj[i].id === e) {
          e2 = this.coverObj[i].name;
          arr.push(e, e2);
        }
      }
      this.$store.commit("setCoverType", arr);
    },
  },
};
</script>