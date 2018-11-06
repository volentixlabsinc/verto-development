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
      <input disabled="disabled" v-model="savePath" class="input m-t-md" type="text" placeholder="">
      <a @click="selectFolder" class="button m-t-md green is-centered has-text-white">
        <p class="is-size-6">
          Select Folder
        </p>
      </a>
      <br>
       <div class="level is-mobile m-t-md">
          <div class="has-text-dark level-left">
            <a  @click="$router.push({ path: 'settings' })" class="button m-t-md green is-centered has-text-white">
              <p class="is-size-6">
                Cancel
              </p>
            </a>
          </div>
          <div class="has-text-dark level-right">
            <a :disabled="!enableBackup" @click="backupVerto" class="button m-t-md green is-centered has-text-white">
              <p class="is-size-6">
                Backup Wallet
              </p>
            </a>
          </div>
        </div>
      
      <b-modal :active.sync="isInstructionsActive">
        <div class="card">
          <div class="card-content">
            <div class="modal-header">
              <slot name="header">
                Backup
              </slot>
            </div>
            <div>
              <ul>
                <li>
                  Simple tooling to back up your wallet in order to restore or open on another device. Simply:
                </li>
                <li>
                  * Select a directory to back up the wallet to.
                </li>
                <li>
                  * Verto will back up the wallet with the name 'verto' + the date + '.config'
                </li>
                <li>
                  * Select 'Backup Wallet'
                </li>
              </ul>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
  </section>
</template>

<script>
import sjcl from "sjcl";

export default {
  data() {
    return {
      isInstructionsActive: false,
      savePath: "",
      enableBackup: false
    };
  },
  mounted() {
  },
  methods: {
    selectFolder: function() {
      const { dialog } = require("electron").remote;
      const dateFormat = require('dateformat');
      const selectedPath = dialog.showOpenDialog({
        title: "Choose file",
        properties: ['openDirectory']
      });
      this.savePath = selectedPath + '/verto.' + dateFormat(new Date(), "yyyy.mm.dd.h.MM.ss") + '.config';
      this.enableBackup = true;
    },
    backupVerto: function() {
      const fs = require("fs");
      const path = require("path")
      const electron = require("electron")
      const filePath = path.join(electron.remote.app.getPath('userData'), '/verto.config');
      fs.writeFileSync(this.savePath, fs.readFileSync(filePath, 'utf-8'));
      this.$router.push({ path: "settings" })
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
