<template>
  <v-card class="mb-5" color="lighten-1" height="450">
    <v-item-group mandatory @change="setPillarsType($event)">
      <v-container>
        <v-row>
          <v-col v-for="n in pillarsObj" :key="n.id" cols="4" md="3" lg="2">
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
                  <v-icon>{{ active ? 'mdi-check-bold' : '' }}</v-icon>
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
  data: function () {
    return {
      pillarsObj: [
        {
          id: 2.1,
          img: "/img/pillars/BP.png",
          name: "Армированная кладка",
          plus: ["Несущая способность", "долговечность"],
          minus: ["Стоймость"],
          type: "pillars",
        },
        {
          id: 2.2,
          img: "/img/pillars/MP.png",
          name: "Металлопрокат",
          plus: ["Долговечность"],
          minus: ["Cущественных нет"],
          type: "pillars",
        },
        {
          id: 2.3,
          img: "/img/pillars/WP.png",
          name: "Пиломатериалы",
          plus: ["Стоимость"],
          minus: ["Недолговечность (10-20 лет)"],
          type: "pillars",
        },
      ],
    };
  },

  methods: {
    setPillarsType: function (e) {
      let e2 = "";
      let arr = [];
      for (let i = 0; i < this.pillarsObj.length; i++) {
        if (this.pillarsObj[i].id === e) {
          e2 = this.pillarsObj[i].name;
          arr.push(e, e2);
        }
      }
      this.$store.commit("setPillarType", arr);
    },
  },
};
</script>

