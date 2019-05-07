<template>
  <div class="">
    <div class="text-xs-center mt-5 pt-5">
      <img height="120" src="../assets/Logo2.jpg" >
    </div>
    <v-form v-model="login" row>
      <v-container xs12>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field
              outline
              label="Email"
              placeholder="Email"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field
              label="Password"
              :type="passwordShow ? 'text' : 'password'"
              :append-icon="passwordShow ? 'visibility_off' : 'visibility'"
              @click:append="passwordShow = !passwordShow"
              outline
              placeholder="Password"
              v-model="password"
              :rules="passwordRule"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-btn
              class="btnM primary card-r no-shadow"
              xs12
              sm10
            >Login</v-btn>
          </v-flex>
          <router-link to="/" class="no-deraction f-8 w-100 text-xs-right">Forgot password ?</router-link>
        </v-layout>
      </v-container>
    </v-form>
    <v-layout class="fixedButtom" style="padding:10px">
      <v-flex xs12>
      <a :href="`#/signup`" class="no-deraction text-xs-center" style="font-size:15px;">Create an Account?</a>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "Login",
  data: () => ({
    login: false,
    PhoneNumber: "",
    password: "",
    passwordShow: false,
    PhoneNumberRule: [v => !!v || "Phone Number is required"],
    email: "",

    passwordRule: [
      v => !!v || "Password is required"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
    ]
  }),
};
</script>

