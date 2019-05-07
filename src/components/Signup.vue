<template>
  <div>
    <v-toolbar flat fixed class="primary text-xs-center" app dark xs12>
      <div class="btn-tool text-xs-right">
        <router-link to="/Login" class="aBtn">
          <v-icon class="text-white pt-2">fas fa-arrow-left</v-icon>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <div class="pr-5 text-xs-center font-weight-bold f-20">Create an Account</div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down"></v-toolbar-items>
    </v-toolbar>
    <v-container>
      <v-layout row wrap align-center>
        <v-flex class="text-xs-center" xs12 sm12 lg9 style="margin:auto">
          <div class="card-r no-shadow ">
            <v-card class="card-r no-shadow grey lighten-3">
              <div>
                <v-avatar
                  :size="100"
                  color="grey lighten-2" class="text-xs-center">
                  <img class="br-3 grey lighten-1"
                       src="http://farrellaudiovideo.com/wp-content/uploads/2016/02/default-profile-pic-300x300.png"
                       style="object-fit: cover!important; background: red">
                </v-avatar>
              </div>

              <v-form>
                <v-card-text class="pa-0">
                  <v-layout wrap>
                    <span class="f-15 text-primary font-weight-bold">Types</span>
                    <v-flex md12 sm12 xs12 class>
                      <v-select
                        :items="type"
                        label="Select one"
                        outline
                        placeholder="First/Second"
                        class="input-group--focused"
                        v-model="newUser.userType"
                      ></v-select>
                    </v-flex>
                    <span class="f-15 text-primary font-weight-bold">Personal info</span>

                    <v-flex xs12  >
                      <v-text-field
                        required
                        color="#749DBF"
                        type="text"
                        placeholder="Name"
                        class="textFeald"
                        outline
                        label="Name"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        required
                        color="#749DBF"
                        class="textFeald"
                        outline
                        prefix="+45"
                        label="Phone Number"
                        placeholder="Phone Number"
                        :rules="[ v => v.length >= 8 || 'Min 8 characters']"
                        v-model="newUser.user.phone"
                      ></v-text-field>
                    </v-flex>
                    <span class="f-8 text-primary pl-3 white w-100 text-xs-left pt-2 font-weight-bold">Date Of Birth</span>

                    <v-flex xs12  class="w-100 mb-2">
                      <div class="ma-0 pt-3 pb-3 pl-3 white w-100">
                        <date-dropdown min="1960" max="2019" v-model="selectedDate" />
                      </div>
                    </v-flex>
                    <span class="f-8 text-primary pl-3 white w-100 text-xs-left pt-2 font-weight-bold">Gender</span>

                    <v-flex xs12 offset-xs0 class="w-100 mb-2">
                      <v-radio-group
                        v-model="newUser.user.gender"
                        row
                        class="ma-0 pl-3 white w-100"
                      >
                        <v-radio color="primary" label="Male" value="male"></v-radio>
                        <v-radio color="primary" label="Female" value="female"></v-radio>
                        <v-radio color="primary" label="nonbinary" value="non binary"></v-radio>
                      </v-radio-group>
                    </v-flex>

                    <v-flex xs12>
                      <v-text-field
                        required
                        color="#749DBF"
                        class="textFeald"
                        outline
                        label="Club name"
                        placeholder="Club name"
                        v-model="newUser.user.clubName"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 v-if="newUser.userType=='First'">
                      <v-text-field
                        required
                        color="#749DBF"
                        class="textFeald"
                        outline
                        label="Number plate code"
                        placeholder="DD 12-312"
                        v-model="newUser.user.clubName"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        name="Email"
                        label="Email"
                        color="#749DBF"
                        outline
                        class="textFeald"
                        placeholder="Email"
                        hint="email is required"
                        v-model="newUser.user.email"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        required
                        color="#749DBF"
                        class="textFeald"
                        type="password"
                        outline
                        label="Password"
                        placeholder="Password"
                        v-model="newUser.user.password"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 class="pa-0">
                      <v-dialog class="pa-0 display-unset dd"
                                v-model="dialog"
                                width="500"
                      >
                        <v-checkbox class="transparent" slot="activator" label="Terms of Service and Privacy Policy " required></v-checkbox>
                        <!--<v-label  class="text-primary" >Expire Date</v-label>-->
                        <v-card class="card-r no-shadow">
                          <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                          >
                            Terms and Conditions
                          </v-card-title>

                          <v-card-text>
                            Registration and membership is open to all natural persons over 18 years of age who have an interest to take the driving license. Users under 18 years of age must first obtain the valid/legal documents before taking license.
                            Each User shall only register once.
                            The User shall register online to become a Member of Driver.
                            During the registration process, the User can, in addition, opt to become a Member of the Association. Members of the Association are Members of Driver with additional accesses allowing them to book classes based on the prefered time.
                            Members of the Association shall expressly accept Driver’s Statutes on registration and are bound to comply with them.
                            By registering with Driver, the User accepts that most communications with Driver and its Members will take place electronically.
                            It is the User’s responsibility to make sure that she/he has sufficient access to Internet to participate to the activities at the desired extent.
                            Driver screens registration applications and reserves itself the right to reject a registration without stating the reasons.
                            Members of Driver have access to a notification preferences page where they can define their preferences for the notifications sent to them by email. They have access to the Members Area and can participate in the various activities that are open to Members, depending on their role as a climate scientist or not and their functions.
                            Upon registration, Members are required to supply their name, email address, mail address, areas of interest and a password.
                            Members requesting to be registered as climate scientists are required in addition to supply an affiliation and a list of publications. Driver’s team will verify that the member fulfills the necessary conditions for being registered as a climate scientist.
                            The necessary conditions for being registered as a climate scientist with Driver at any moment in time are:
                            Have completed driving theory exam or be currently driving.
                            Members vouch that data supplied on registration are true and complete, and that they are kept up-to-date after registration. In particular, members registered in driving school who do not fulfill the necessary conditions for being registered in the Driving school anymore must change their registration accordingly.
                            It is expressly forbidden to place accounts at the disposal of third parties and to disclose access details to third parties.
                            For technical reasons, Driver cannot establish with certainty whether a registered Member really is the person he/she claims to be. Driver shall therefore provide no guarantee as to Members’ true identities. Members shall therefore be responsible for verifying other Member’s identities and shall contact Driver in cases of suspicion.
                            Registration as a Member results in a contractual relationship (usage contract) between Driver and the Member. By accepting the Terms, they become a contract component. The member receives a personal, non-transferable right, revocable at any time, to use the contents and services provided by the Website and undertakes to comply with these Terms and the restrictions set out in them during such use.
                            Driver reserves the right to modify, suspend or discontinue individual services and/or sections of the Members Area, or all of them, at any time and without prior notice, in whole or in part. Driver reserves the further right to limit or deny access to individual or all services, without prior notice at any time.
                            Resigned Members can apply to revive their registration at any time. The decision to revive a registration is taken by the Admin or Super admin.
                          </v-card-text>

                          <v-divider></v-divider>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              class="primary"
                              flat
                              @click="dialog = false"
                            >
                              I accept
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-form>
            </v-card>
          </div>
        </v-flex>
        <v-flex xs12 v-if="newUser.userType=='First'">
          <v-btn
            class="btnM primary card-r no-shadow"
            type="submit"
          >First Sign Up</v-btn>
        </v-flex>

        <v-flex xs12 v-if="newUser.userType=='Second'">
          <v-btn
            class="btnM primary card-r no-shadow"
            type="submit"
          >Second Sign Up</v-btn>
        </v-flex>
        <v-flex xs12 class="text-xs-center">
        <router-link to="/Login" class="aBtn text-xs-center">Already have an account?</router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  /* eslint-disable */
  import DateDropdown from 'vue-date-dropdown'
  export default {
    name: "Signup",
    data: () => ({
      tab: null,
      selectedDate: '',
      dialog: false,
      newUseraddress: {
        oneLineAddress: ""
      },
      newUser: {
        userType: "dsfdfd",
        user: {
          firstName: "",
          lastName: "",
          phone: "",
          dob: "",
          address: {
            oneLineAddress: ""
          },
          gender: "",
          clubName: "",
          email: "",
          password: "",
          termAccept: ""
        },
        teacherClasses: {}
      },
      counter: 0,
      seen: true,
      show: true,
      date: null,
      birthday: false,
      type: ["Second", "First"],
      gender: ["male", "female"],
      timeslot: [
        "07:00 am",
        "08:00 am",
        "09:00 am",
        "10:00 am",
        "11:00 am",
        "12:00 pm",
        "01:00 pm",
        "02:00 pm",
        "03:00 pm",
        "04:00 pm",
        "05:00 pm",
        "06:00 pm"
      ],
      workMin: [
        "60 min",
        "120 min",
        "180 min",
        "240 min",
        "300 min",
        "360 min",
        "420 min",
        "480 min"
      ],
      breakmin: ["15 min", "30 min", "45 min", "60 min"],
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Password must be more than 8 characters"
      ]
    }),
    watch: {},
    updated: () => {},
    methods: {
      CreateUser() {
        if (this.newUser.userType == "Second") {
          this.$store.dispatch("AddSecond", Second).then(res => {
            console.log(res);
          });
        } else if (this.newUser.userType == "First") {
          this.$store.dispatch("AddFirst", First).then(res => {
            console.log(res);
          });
        }
      },
      selectItem(payload, objectName) {
        this.$set(this, objectName, this.translateData(payload));
        this.newUser.user.address = this.translateData(payload);
      },
    },
    components: {
      DateDropdown,
    }
  };
</script>
<style>
  .v-dialog:not(.v-dialog--fullscreen){
    max-height: 500px!important;
  }
  .date-dropdown-select[data-v-67d74744] {
    border: 1px solid #077fff !important;
    padding: 8px 25px!important;
  }
</style>

