<template>
  <section>
  <div class="hero is-fullheight is-paddingless has-blur-background">
    <div class="hero-head p-t-sm p-l-lg">
      <div class="p-t-xl">
        <div class="is-pulled-left is-vcentered is-flex m-t-md">
          <router-link to="/keepyourkeyssafe">
            <font-awesome-icon icon="arrow-left" class="fa-sm has-text-white m-l-sm"/>
          </router-link>
        </div>
        <img src="~@/assets/img/verto-logo-white.png" class="logo m-l-md p-t-sm p-l-sm p-r-sm">
      </div>
      <a @click="isInstructionsActive = true">
        <font-awesome-icon icon="question-circle" class="fa-lg has-text-grey-light  is-pulled-right m-r-sm"/>
      </a>
      
        <b-checkbox native-value="write" v-model="isEnabled" class="has-text-white">
          I understand that the private key is not stored in Verto and cannot be recovered.
        </b-checkbox>
        <div class="field">
          <div class="control">
            <div v-if="nokeyname">
              <p class="has-text-danger m-t-md">
                You must provide a key name.
              </p>
            </div>
            <div v-if="keyalreadyused">
              <p class="has-text-danger m-t-md">
                The name or the key has already been used.
              </p>
            </div>
            <div v-if="notMatchingPass">
              <p class="has-text-danger m-t-md">
                Passwords should match
              </p>
            </div>
            <div v-if="fillAllFields">
              <p class="has-text-danger m-t-md">
                Please fill all the fields above
              </p>
            </div>
            <input v-model="keyname" class="input is-medium m-t-md" type="text" placeholder="Wallet Name">
            
            <input v-model="userPassword" :class="{ 'is-danger' : notMatchingPass }" class="input is-medium m-t-md" type="password" placeholder="Choose Wallet Password">
            <input v-model="checkPassword" :class="{ 'is-danger' : notMatchingPass }" class="input m-t-md is-medium" type="password" placeholder="Confirm Wallet password">
            <div v-if="incorrectPassword">
              <p class="has-text-danger m-t-md">
                The Verto Password Is Incorrect.
              </p>
            </div>
            <input v-model="walletpassword" class="input is-medium m-t-md" type="password" placeholder="Verto Password">
          </div>
        </div>
        <div v-if="fillAllFields">
          <p class="has-text-danger m-t-md">
            Please fill all the fields above
          </p>
        </div>
        <div class="level is-mobile m-t-md">
          <div class="has-text-dark level-left">
            <a  @click="$router.push({ path: 'walletmanager' })" class="button m-t-md green is-centered has-text-white">
              <p class="is-size-6">
                Cancel
              </p>
            </a>
          </div>
          <div class="has-text-dark level-right">
            <a :disabled="!isEnabled" class="button m-t-md is-size-5 green is-pulled-right" @click="encrypt">
              <p class="p-l-sm p-r-sm is-size-7 font-gibson-semibold second">Save</p>
            </a>
          </div>
        </div>
      </div>
      <b-modal :active.sync="isInstructionsActive">
        <div class="card">
          <div class="card-content">
            <div class="modal-header">
              <slot name="header">
                Recommended
              </slot>
            </div>
            <div>
              <ul>
                <li>
                  * Store on an external drive, wallet, or usb key.
                </li>
              </ul>
            </div>
            <br>
            <div class="modal-header">
              <slot name="header">
                Once Completed
              </slot>
            </div>
            <div>
              <ul>
                <li>
                  * Look for a warm, safe, secure, dry place such as a bank safety deposit box.
                </li>
                <li>
                  * Add provisions to your will on who and how the transfer of your wallet will be conducted.
                </li>
              </ul>
            </div>
            <br>
            <div class="modal-header">
              <slot name="header">
                Do Not
              </slot>
            </div>
            <div>
              <ul>
                <li>
                  * Store it on your computers local drive.
                </li>
                <li>
                  * Share with anyone.
                </li>
                <li>
                  * Email it.
                </li>
                <li>
                  * Store on the cloud.
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
      isEnabled: false,
      userFile: "",
      userPassword: "",
      checkPassword: "",
      privateKey: "",
      publicKey: "",
      notMatchingPass: false,
      fillAllFields: false,
      test: "",
      filePath: "Choose file",
      keyname: "",
      keyalreadyused: false,
      nokeyname: false,
      incorrectPassword: false,
      walletpassword: "",
      isInstructionsActive: false
    };
  },
  mounted() {
    const ecc = require("eosjs-ecc");
    ecc.randomKey().then(privateKey => {
      this.privateKey = privateKey;
      this.publicKey = ecc.privateToPublic(privateKey);
      this.$store.commit("save", this.publicKey);
    });
  },
  methods: {
    encrypt() {
      const { dialog } = require("electron").remote;
      this.notMatchingPass = false;
      this.fillAllFields = false;
      this.keyalreadyused = false;
      this.nokeyname = false;
      this.incorrectPassword = false;
      if (this.keyname === "") {
        this.nokeyname = true;
        return;
      }
      if (this.userPassword.length > 0 && this.checkPassword.length > 0) {
        if (this.userPassword === this.checkPassword) {
          let fs = require("fs");
          let path = require("path")
          let electron = require("electron")
          let filePath = path.join(electron.remote.app.getPath('userData'), '/verto.config');
          const databack = fs.readFileSync(filePath, 'utf-8');
          let config = {};
          try {
            config = JSON.parse(sjcl.decrypt(this.walletpassword, databack));
          } catch (error) {
            this.incorrectPassword = true
            return;
          }
          let i;
          for (i = 0; i < config.keys.length; i++) {
            const key = config.keys[i];
            if (key.name.toLowerCase() === this.keyname.toLowerCase()) {
              this.keyalreadyused = true;
              return;
            }
          }
          var savePath = dialog.showSaveDialog({
            title: "Choose file"
          });
          // TODO: Need some error checking here.
          config.keys.push({name: this.keyname, key: this.publicKey});
          fs.writeFileSync(savePath, sjcl.encrypt(this.walletpassword, this.privateKey));
          fs.writeFileSync(filePath, sjcl.encrypt(this.walletpassword, JSON.stringify(config)), 'utf-8');
          this.$store.commit("save", this.publicKey);
          this.$store.dispatch("setKeys", config.keys);
          this.$router.push("congratsscreen");
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
</style>
