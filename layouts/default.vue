<template>
  <v-app id="inspire">
    <v-app-bar
      color="#fcb69f"
      fixed
      dark
      shrink-on-scroll
      src="/img/fence-road.jpg"
      scroll-target="#scrolling-techniques-2"
      class="overflow-hidden"
      app
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
      </template>

      <v-toolbar-title class="d-flex align-center mb-n1">
        <v-img src="/img/fence-icon.png" width="40px"></v-img>
        <strong class="ml-2 d-none d-lg-flex">fence calc</strong>
      </v-toolbar-title>

      <v-btn class="ma-2" tile text link :to="{name:'index'}" exact>
        <v-icon dark>mdi-home</v-icon>
        <span class="ml-2 d-none d-md-flex">Главная</span>
      </v-btn>

      <v-btn class="ma-2" tile text link :to="{name:'calculation'}">
        <v-icon dark class="mr-2">mdi-calculator-variant</v-icon>
        <span class="ml-2 d-none d-md-flex">Расчитать</span>
      </v-btn>

      <v-btn class="ma-2" tile text link :to="{name:'how'}">
        <v-icon class="mr-2">mdi-head-question-outline</v-icon>
        <span class="ml-2 d-none d-md-flex">Как это работает?</span>
      </v-btn>

      <!--<v-btn class="ma-2" tile text link :to="{name:'gallery'}">
        <v-icon class="mr-2">mdi-image-multiple-outline</v-icon>
        <span class="ml-2 d-none d-md-flex">Галерея пользователей</span>
      </v-btn>-->

      <v-spacer></v-spacer>

      <v-btn icon class="ml-2 d-none d-md-flex">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon class="ml-2 d-none d-md-flex">
        <v-icon dark>mdi-information-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="900">
      <v-main id="content-test">
        <transition mode="out-in" appear>
          <nuxt />
        </transition>
      </v-main>

      <v-footer style="display: flex; justify-content: center; flex-direction: column;" class="font-weight-medium" dark app>      
        <div>fence calc</div>
        <div>{{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-sheet>
  </v-app>
</template>

<script>
</script>>
