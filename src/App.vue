<template>
  <v-app id="inspire" class="bd grey lighten-3">
    <v-content xs12 class="">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
import Vue from "vue";
export default {
  data() {
    return {
      cordova: Vue.cordova
    };
  },
  name: "App",
  created() {
    var self = this;
    this.cordova.on("deviceready", () => {
      self.onDeviceReady();
    });
  },
  methods: {
    onDeviceReady: function() {
      // Handle the device ready event.
      this.cordova.on("pause", this.onPause, false);
      this.cordova.on("resume", this.onResume, false);
      if (this.cordova.device.platform === "Android") {
        document.addEventListener("backbutton", this.onBackKeyDown, false);
      }
    },
    onPause() {
      // Handle the pause lifecycle event.
      console.log("pause");
    },
    onResume() {
      // Handle the resume lifecycle event.
      // SetTimeout required for iOS.
      setTimeout(function() {
        console.log("resume");
      }, 0);
    },
    onBackKeyDown() {
      // Handle the back-button event on Android. By default it will exit the app.
      navigator.app.exitApp();
    }
  }
};
</script>
<style>
@import "./css/main.css";
</style>
