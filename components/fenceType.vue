<template>
  <div>
    <div class="">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <template v-for="n in steps">
            <v-stepper-step :key="n" :complete="e1 > n" :step="n" editable>{{ stepType[n-1] }}</v-stepper-step>

            <v-divider v-if="n !== steps" :key="n+10"></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content :step="1">
            <stepCard1 />
            <div class="d-flex justify-end">
              <v-icon x-large color="primary" @click="nextStep(1)">mdi-arrow-right-circle</v-icon>
            </div>
          </v-stepper-content>

          <v-stepper-content :step="2">
            <stepCard2 />
            <div class="d-flex justify-end">
              <v-icon x-large color="primary" @click="nextStep(2)">mdi-arrow-right-circle</v-icon>
            </div>
          </v-stepper-content>

          <v-stepper-content :step="3">
            <stepCard3 />
            <div class="d-flex justify-end">
              <v-icon x-large color="primary" @click="nextStep(3)">mdi-arrow-right-circle</v-icon>
            </div>
          </v-stepper-content>

          <v-stepper-content :step="4">
            <stepCard4 />
            <div class="d-flex justify-end">
              <v-icon x-large color="primary" @click="nextStep(4)">mdi-arrow-right-circle</v-icon>
            </div>
          </v-stepper-content>

          <v-stepper-content :step="5">
            <stepCard5 />
            <div class="d-flex justify-end">
              <v-btn tile color="primary" @click="$emit('active')">
                К определению длинны
                <v-icon dark class="ml-3">mdi-redo</v-icon>
              </v-btn>
            </div>
          </v-stepper-content>
          <!---->
        </v-stepper-items>
      </v-stepper>
    </div>
  </div>
</template>

<script>
import stepCard1 from "../components/fenceType/stepCard1.vue";
import stepCard2 from "../components/fenceType/stepCard2.vue";
import stepCard3 from "../components/fenceType/stepCard3.vue";
import stepCard4 from "../components/fenceType/stepCard4.vue";
import stepCard5 from "../components/fenceType/stepCard5.vue";

export default {
  data: function () {
    return {
      e1: 1,
      steps: 5,
      editable: true,
      stepType: [
        "глубина промерзания",
        "тип фундамента",
        "тип колонн",
        "тип покрытия",
        "высота",
      ],
    };
  },
  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },
  },
  components: {
    stepCard1: stepCard1,
    stepCard2: stepCard2,
    stepCard3: stepCard3,
    stepCard4: stepCard4,
    stepCard5: stepCard5,
  },
};
</script>>