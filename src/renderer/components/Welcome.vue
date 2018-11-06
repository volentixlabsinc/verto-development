<template>
  <section class="hero is-fullheight wallet-background">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="box has-text-white is-radiusless is-shadowless">
          <div class="is-size-3">WELCOME TO</div>
          <div class="logo-welcome p-l-lg p-r-lg">
            <img src="~@/assets/img/white-logo-with-text.png" >
          </div>
          <div class="m-t-md is-size-5">{{ subtitle_message }}</div>
          <div v-if="hasPassword">
            <div class="is-size-6 m-t-md">Welcome Back!</div>
            <div v-if="nopassword">
              <p class="has-text-danger m-t-md">
                No Password Has Been Set For The Wallet. Please Create A Password First.
              </p>
            </div>
            <div v-if="incorrectPassword">
              <p class="has-text-danger m-t-md">
                The Password Is Incorrect.
              </p>
            </div>
            <form>
              <input  v-model="password" class="input m-b-sm" type="password" placeholder="Password">
              <div class="level-item has-text-centered is-marginless">
                <a class="p-t-lg button is-fullwidth is-success" @click="login"> Login </a>
              </div>
            </form>
          </div>
          <div v-if="!hasPassword">
            <div class="is-size-6 m-t-md">{{ join_message }}</div>
            <a class="p-t-lg button is-fullwidth is-primary" @click="createvertopassword">
              Create Verto Password
            </a>
          </div>
        </div>
        <div class="logger">
          <div id="messages"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sjcl from "sjcl";

const {ipcRenderer} = require('electron');
ipcRenderer.on('message', function(event, text) {
  var container = document.getElementById('messages');
  var message = document.createElement('div');
  message.innerHTML = text;
  container.appendChild(message);
})

export default {
  data() {
    return {
      subtitle_message:
        "Verto is your gateway to Volentix, with Verto, you can purchase VTX, the native token of the Volentix ecosystem.",
      join_message: "We're glad you've joined us.",
      publicKey: "",
      password: "",
      nopassword: false,
      incorrectPassword: false,
      hasPassword: false
    };
  },
  mounted() {
    let fs = require("fs");
    let path = require("path")
    let electron = require("electron")
    let filePath = path.join(electron.remote.app.getPath('userData'), '/verto.temp');
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    if (fs.existsSync(path.join(electron.remote.app.getPath('userData'), '/verto.config'))) {
      this.hasPassword = true;
      console.log("You are here.")
    }
  },
  methods: {
    login: function() {
      this.incorrectPassword = false;
      this.nopassword = false;
      let fs = require("fs");
      let path = require("path")
      let electron = require("electron")
      let filePath = path.join(electron.remote.app.getPath('userData'), '/verto.config');
      if (!fs.existsSync(filePath)) {
        this.nopassword = true;
      } else {
        const databack = fs.readFileSync(filePath, 'utf-8');
        try {
          const config = JSON.parse(sjcl.decrypt(this.password, databack));
          this.$store.dispatch("setKeys", config.keys);
          this.$store.dispatch("login", true);
          this.$router.push({ path: "walletmanager" });
        } catch (error) {
          this.incorrectPassword = true
        }
      }
    },
    createvertopassword: function() {
      this.$router.push({ path: "createvertopassword" });
    }
  }
};
</script>

<style scoped>
.wallet-background {
  height: 100vh;
  background-image: url(~@/assets/img/wallet-bg.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.box {
  background-color: rgba(0, 0, 0, 0.42);
}
.button {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 0.5rem;
}
.logo-welcome img {
  width: 100%;
  max-width: 320px;
}
.logger {
  overflow: scroll;
  background-color: white;
  color: #000000;
  height: 150px;
}
</style>
