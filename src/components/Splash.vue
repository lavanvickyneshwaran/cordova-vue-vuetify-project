<template>
  <div feild-height class="primary text-xs-center height-app feild-height">
    <v-form>
      <v-container class="pt-5">
        <v-layout row wrap class="pad-200 mt-5">
          <v-flex xs12>

            <img src="../assets/Splash.jpg" height="120" >
            <!--<div class="display-1 mt-5 text-capitalize font-weight-bold text-white">VUE</div>-->

          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: "Signup",
    data: () => ({
    }),
    created(){
      setTimeout(function(){
        // this.$router.push("/Login")
        window.location.href = "#/Login";
      },3000)
    }
  };
</script>

<style>
  .height-app {
    height: -webkit-fill-available !important;
    width: 100%!important;
  }
</style>
