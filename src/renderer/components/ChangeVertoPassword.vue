<template>
  <section>
  <div class="hero is-fullheight is-paddingless has-blur-background">
    <div class="hero-head p-t-sm p-l-lg">
      <div class="p-t-xl">
        <div class="is-pulled-left is-vcentered is-flex m-t-md">
          <router-link to="/settings">
            <font-awesome-icon icon="arrow-left" class="fa-sm has-text-white m-l-sm"/>
          </router-link>
        </div>
        <img src="~@/assets/img/verto-logo-white.png" class="logo m-l-md p-t-sm p-l-sm p-r-sm">
      </div>
        <a @click="isInstructionsActive = true">
          <font-awesome-icon icon="question-circle" class="fa-lg has-text-grey-light  is-pulled-right m-r-sm"/>
        </a>
        <br>
        <br>
        <br>
        <div class="field">
          <div class="control">
            <div v-if="incorrectpassword">
              <p class="has-text-danger m-t-md">
                The password is incorrect.
              </p>
            </div>
            <input v-model="originalPassword" :class="{ 'is-danger' : incorrectpassword }" class="input is-medium" type="password" placeholder="Current Verto Password">
          </div>
        </div>
        <hr style="height:1px; border:none; color:#000; background-color:#000;">
        <div class="field">
          <div class="control">
            <div v-if="notMatchingPass">
              <p class="has-text-danger m-t-md">
                Passwords must match.
              </p>
            </div>
            <div v-if="fillAllFields">
              <p class="has-text-danger m-t-md">
                All fields are required.
              </p>
            </div>
            <input v-model="userPassword" :class="{ 'is-danger' : notMatchingPass }" class="input is-medium" type="password" placeholder="New Verto Password">
            <input v-model="checkPassword" :class="{ 'is-danger' : notMatchingPass }" class="input m-t-md is-medium" type="password" placeholder="Confirm New Verto Password">
          </div>
        </div>
        <div class="level is-mobile m-t-md">
          <div class="has-text-dark level-left">
            <a  @click="$router.push({ path: 'settings' })" class="button m-t-md green is-centered has-text-white">
              <p class="is-size-6">
                Cancel
              </p>
            </a>
          </div>
          <div class="has-text-dark level-right">
            <a class="button m-t-md green is-right has-text-white" @click="updatePassword">
              <p class="is-size-6">
                Save
              </p>
            </a>
          </div>
        </div>
      </div>
      <b-modal :active.sync="isInstructionsActive">
        <div class="card">
          <div class="card-content">
            <div class="modal-header">
              <slot name="header">
                Change Verto Password
              </slot>
            </div>
            <div>
              <ul>
                <li>
                  It is recommended that you first backup the current configuration of Verto before changing the password. You can back up Verto  <router-link to="/backupwallet"><span style="text-decoration:underline;">here</span></router-link>.
                </li>
                <li>
                  Changes the password to access Verto. Once selected, all configuration is encrypted using the new password. You may want to 
                </li>
                
                <li>
                  <b>NOTE:</b> Vero is unable to recover deleted wallets.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </section>
</template>

<script>
import sjcl from "sjcl";

export default {
  data() {
    return {
      userPassword: "",
      checkPassword: "",
      notMatchingPass: false,
      fillAllFields: false,
      incorrectpassword: false,
      originalPassword: "",
      isInstructionsActive: false
    };
  },
  methods: {
    updatePassword: function() {
      this.notMatchingPass = false;
      this.fillAllFields = false;
      let fs = require("fs");
      let path = require("path")
      let electron = require("electron")
      let filePath = path.join(electron.remote.app.getPath('userData'), '/verto.config');
      const databack = fs.readFileSync(filePath, 'utf-8');
      let config = {};
      try {
        config = JSON.parse(sjcl.decrypt(this.originalPassword, databack));
      } catch (error) {
        this.incorrectPassword = true
        console.log("3" + error)
        return;
      }
      console.log("4")
      if (this.userPassword.length > 0 && this.checkPassword.length > 0) {
        if (this.userPassword === this.checkPassword) {
          const router = this.$router;
          const store = this.$store;
          fs.writeFile(filePath, sjcl.encrypt(this.userPassword, JSON.stringify(config)), 'utf-8', () => {
            store.dispatch("login", true);
            router.push({ path: "walletmanager" });
          });
        } else {
          this.notMatchingPass = true;
        }
      } else {
        this.fillAllFields = true;
      }
    }
  }
};
</script>

<style scoped>
.hero-body.choose-password {
  background-color: #f7f7fa !important;
}
.myLink {
	color: #f00;
}
.active {
	color: #0f0;
}
.modal-header {
  margin-top: 0;
  color: #42b983;
}
.hero-body.choose-password .font-gibson-semibold {
  color: #454f63;
}
.hero-body.choose-password .font-gibson {
  color: #78849e;
  font-size: 11pt;
}
.hero-body.choose-password .button.green {
  background-color: #00a6a6 !important;
  border: solid #00a6a6 1pt !important;
  border-radius: 0.5rem;
}
.hero-body.choose-password .choose-file {
  border-radius: 0.5rem;
}
.hero-body.choose-password .button.green p {
  color: #ffffff !important;
}
.b-checkbox {
  margin-top: 0.6rem;
}
.hero-body.choose-password input {
  border-radius: 0.5rem;
}
.notices.is-top {
  top: 18rem !important;
  left: 18.5rem;
}
.notices .toast {
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
}
.is-vcentered {
  align-items: center;
}
.top-bg {
  background-image: url(~@/assets/img/wallet-main-top-bg.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.dark-blue-gradient {
  background: linear-gradient(
    to bottom,
    rgba(41, 137, 216, 0) 0%,
    rgba(255, 255, 255, 0) 10%,
    rgba(34, 52, 53, 1) 100%
  );
}
.w-main-b-graident {
  background: linear-gradient(
    to bottom,
    rgba(34, 52, 53, 1) 0%,
    rgba(255, 255, 255, 0.05) 20%,
    rgba(255, 255, 255, 0.1) 80%,
    rgba(255, 255, 255, 0) 90%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
.wallet-address {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 1px;
}
.line-height-md {
  line-height: 1rem;
}
.logo {
  height: 3.5rem;
}
.list-item {
  border-bottom: solid 1px rgba(55, 202, 189, 0.3);
  width: 100vw;
}
.hero-body {
  position: relative;
  top: 0;
  bottom: 0;
  width: 100%;
  align-items: flex-start !important;
}
.hero-body > .container {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.hero-foot {
  border-top: none;
}
.hero.is-fullheight .hero-body {
  flex: 1;
}
.hero.is-fullheight {
  height: 100vh;
}
</style>
