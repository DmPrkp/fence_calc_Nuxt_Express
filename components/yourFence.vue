<template>
  <div>
    <v-card max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="../img/headcards/headcard4.jpg"
        gradient="to top right, rgba(19,84,122,.3), rgba(23,80,50,.6)"
      >
        <v-card-title>Характеристики ограждения:</v-card-title>
      </v-img>

      <v-card-text class="text--primary">
        <div>
          Глубина фундамента:
          <strong>{{currentType.baseDepth}}</strong>
          <em>м</em>
        </div>

        <div>
          Тип фундамента:
          <strong>{{currentType.baseTypeString}}</strong>
        </div>

        <div>
          Тип солбов:
          <strong>{{currentType.pillarTypeString}}</strong>
        </div>

        <div>
          Тип покрытия:
          <strong>{{currentType.coverTypeString}}</strong>
        </div>

        <div>
          Высота ограждения:
          <strong>{{currentType.fenceHeight}}</strong>
          <em>м</em>
        </div>

        <div>
          Общая длинна:
          <strong>{{currentType.overallLength}}</strong>
          <em>м</em>
        </div>

        <div>
          Количество солбов:
          <strong>{{currentType.pillarsNum}}</strong>
          <em>шт</em>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(['currentType']),
  },
};
</script>
