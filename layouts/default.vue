<template>
  <div>
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

        <!--
        <v-btn class="ma-2" tile text link :to="{name:'how'}">
          <v-icon class="mr-2">mdi-head-question-outline</v-icon>
          <span class="ml-2 d-none d-md-flex">Как это работает?</span>
        </v-btn>

        <v-btn class="ma-2" tile text link :to="{name:'gallery'}">
        <v-icon class="mr-2">mdi-image-multiple-outline</v-icon>
        <span class="ml-2 d-none d-md-flex">Галерея пользователей</span>
        </v-btn>
        -->

        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              class="ml-2 mt-3"
              dark
              v-bind="attrs"
              v-on="on"
              @click="dialog = true"
            >mdi-login-variant</v-icon>
          </template>
          <span>войти</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon class="ml-5 mt-3" dark v-bind="attrs" v-on="on">mdi-information-outline</v-icon>
          </template>
          <span>о проекте</span>
        </v-tooltip>
      </v-app-bar>

      
        <v-main id="content-test" app class="mb-15">
          <transition mode="out-in" appear>
            <nuxt />
          </transition>
        </v-main>
      
        
        <v-footer style="display: flex; justify-content: center; flex-direction: column;" class="font-weight-medium mt-10" dark absolute>      
        <div>fence calc</div>
        <div>{{ new Date().getFullYear() }}</div>
        </v-footer>
        <!---->
      
    </v-app>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Профиль пользователя</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  :rules="nameRules"
                  v-model="firstname"
                  label="Имя*"
                  :counter="10"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field :rules="emailRules" label="E-mail" v-model="email" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[passwordRules.required, passwordRules.min]"
                  :type="show ? 'text' : 'password'"
                  name="input-10-2"
                  v-model="pwd"
                  hint="НЕ ИСПОЛЬЗУЙТЕ СВОЙ СТАНДАРТНЫЙ ПАРОЛЬ"
                  label="Пароль"
                  value
                  @click:append="show = !show"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[passwordRules.required, passwordRules.min, passwordRules.match]"
                  :type="show ? 'text' : 'password'"
                  name="input-10-2"
                  label="Повторите пароль"
                  value
                  @click:append="show = !show"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*поля обязательные для заполнения</small>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="vkOAuth">Войти через ВК</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Закрыть</v-btn>
          <v-btn color="blue darken-1" text @click="submit">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :timeout="4000" top >
      {{ errorSend }}
      <template v-slot:action="{ attrs }" >
        <v-btn v-bind="attrs" @click="snackbar = false" color="#B00020">
          Понятно
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAuth: '',
      //*********************** modal off/on
      dialog: false,
      valid: false,
      photo: "",
      //*********************** name
      firstname: "1234",
      nameRules: [
        (v) => !!v || "Необходимо заполнить",
        (v) => v.length <= 10 || "Не более 10 символов",
      ],
      //*********************** email
      email: "1234@mail.com",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail указан не корректно",
      ],
      //*********************** password
      show: false,
      pwd: "1234",
      passwordRules: {
        required: (value) => !!value || "Необходимо заполнить",
        min: (v) => v.length >= 4 || "Не менее четырех символов",
        match: (v) => v === this.pwd || "пароли не совпадают",
      },
      //*********************** snakbar(всплывающее окошко)
      errorSend: "Извиние регистация не удалась, попробуйте позже!",
      snackbar: false,
    };
  },
  fetch(context) {
    return context.$axios
      .get("/user")
      .catch((err) => console.log("err Get", err))
      .then((res) => {
        console.log(res.data)
        this.data.userAuth = res.data
      })
      .catch((err) => console.log("err response", err));
  },
  methods: {
    async submit() {
      this.dialog = false;
      let objUser = {
        firstname: this.firstname,
        email: this.email,
        pwd: this.pwd,
      };
      let _userhello = await this.$axios
        .post("/auth/local", objUser)
        .catch((err) => (this.snackbar = true))
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err) => (this.snackbar = true))
    },
    async vkOAuth() {
      this.dialog = false;
      let _userhello = await this.$axios
        .get("/auth/vkontakte")
        .catch((err) => (this.snackbar = true))
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err) => (this.snackbar = true))
    }
  },
};
</script>

<style>
v-footer {
  background-color: #388e3c;
}
</style>
