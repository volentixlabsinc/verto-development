<template>
  <div class="hero is-fullheight is-paddingless has-blur-background">
    <div class="hero-head p-t-sm">
      <div class="p-t-xl p-l-lg">
        <div class="is-pulled-left is-vcentered is-flex m-t-md">
          <router-link to="/welcome">
            <font-awesome-icon icon="arrow-left" class="fa-sm has-text-white m-l-sm"/>
          </router-link>
        </div>
        <img src="~@/assets/img/verto-logo-white.png" class="logo m-l-md p-t-sm p-l-sm p-r-sm">
      </div>
      <p class="p-t-lg p-l-lg has-text-aqua is-size-4">
        Generate New Key
      </p>
      <div class="m-t-lg p-l-lg p-r-lg has-text-white">
        <p class="has-text-grey-light is-size-6">
          Generate key
        </p>
        <a :class="{'is-primary': deviceIsDisconnected, 'is-disabled': !deviceIsDisconnected}" class="button m-t-md is-fullwidth m-t-xl is-size-5" @click="checkUserConnection">
          <p class="p-l-md p-r-md has-text-weight-bold is-size-6">Generate Key</p>
        </a>
      </div>
    </div>
    <b-modal :active.sync="checkYourConnection">
      <div class="card">
        <div class="card-content">
          <p>
            Make sure your device is disconnected from the Internet and Bluetooth
          </p>
        </div>
        <div class="has-text-centered close-button p-md">
          <a class="m-t-lg is-size-6" @click="checkYourConnection = false; deviceIsDisconnected = true">
            <p class="p-l-md p-r-md">Close</p>
          </a>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkYourConnection: false,
      deviceIsDisconnected: false
    };
  },
  methods: {
    checkUserConnection() {
      if (!this.deviceIsDisconnected) {
        let command = "networksetup -setairportpower airport off";
        let exec = require("child_process").exec;
        exec(command);
        this.checkYourConnection = true;
      } else {
        this.$router.push("storeKeys");
      }
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 0.6rem;
}
.close-button {
  border-top: solid 0.1rem rgba(55, 202, 189, 0.3);
}
.close-button p {
  color: #223435;
}
.button {
  border-radius: 0.5rem;
}
.button p {
  color: #223435;
}
.button.is-disabled {
  background-color: hsl(0, 0%, 71%);
  border-color: hsl(0, 0%, 71%);
  /* cursor: pointer; */
}
.is-size-custom-header {
  font-size: 1.7rem;
}
.logo {
  height: 3.3rem;
  border-top: solid 0.2rem rgba(55, 202, 189);
}
.is-size-vtx-amount {
  font-size: 2.7rem;
}
.copy-button {
  width: 100%;
}
.has-blur-background {
  background-image: url(~@/assets/img/transaction-back-screen.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.has-text-aqua {
  color: #2cfee6;
}
.size-smaller {
  font-size: 0.75rem;
}
.is-vcentered {
  align-items: center;
}
.line-height-md {
  line-height: 1rem;
}
.list-item {
  border-bottom: solid 1px rgba(55, 202, 189, 0.3);
  width: 100vw;
}
.hero-foot {
  border-top: solid 1px rgba(55, 202, 189, 0.3);
}
</style>
