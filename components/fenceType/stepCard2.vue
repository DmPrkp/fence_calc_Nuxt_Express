<template>
  <v-card class="mb-5" color="lighten-1" height="450">
    <v-item-group mandatory @change="setBaseType($event)">
      <v-container>
        <v-row>
          <v-col v-for="n in basementObj" :key="n.id" cols="4" md="3" lg="2">
            <h4 style="height: 50px;" class="text-center">{{n.name}}</h4>
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
</template>>

<script>
export default {
  data: () => {
    return {
      basementObj: [
        {
          id: 1.1,
          img: "/img/basement/RFL.png",
          name: "Железобетонный ленточный фундамент",
          plus: ["Несущая способность", "долговечность"],
          minus: ["Стоймость"],
          type: "basement",
        },
        {
          id: 1.2,
          img: "/img/basement/RF.png",
          name: "Железобетонный фундамент",
          plus: ["Долговечность"],
          minus: ["Cущественных нет"],
          type: "basement",
        },
        {
          id: 1.3,
          img: "/img/basement/Pillar.png",
          name: `Колонны в грунте
				(по типу свай)`,
          plus: ["Стоимость"],
          minus: ["Недолговечность(10-20 лет)"],
          type: "basement",
        },
      ],
    };
  },
  methods: {
    setBaseType: function (e) {
      let e2 = "";
      let arr = [];
      for (let i = 0; i < this.basementObj.length; i++) {
        if (this.basementObj[i].id === e) {
          e2 = this.basementObj[i].name;
          arr.push(e, e2);
        }
      }
      this.$store.commit("setBaseType", arr);
    },
  },
};
</script>

