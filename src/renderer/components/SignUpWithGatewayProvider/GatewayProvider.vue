<template>
  <div class="hero is-fullheight is-paddingless has-blur-background">
    <div class="hero-head p-t-sm">
      <div class="p-t-xl p-l-lg">
        <img src="~@/assets/img/verto-logo-white.png" class="logo m-l-md p-t-sm p-l-sm p-r-sm">
      </div>
      <p class="p-t-lg p-l-lg has-text-aqua is-size-4">
        Sign Up with Gateway Provider
      </p>
      <div class="control has-text-white is-size-5 p-t-lg p-l-lg">
        <label class="radio">
          <input v-model="selectedProvider" type="radio" name="zixipay" value="zixipay">
          Zixipay
        </label>
        <br>
        <label class="radio m-t-sm">
          <input v-model="selectedProvider" type="radio" name="blocktopus" value="blocktopus">
          Blocktopus
        </label>
      </div>
      <div class="p-l-lg p-r-lg">
        <router-link to="/main">
          <a class="button is-primary m-t-lg is-size-5">
            <p class="p-l-md p-r-md">Not now</p>
          </a>
        </router-link>
        <router-link :to="{ name: 'UserCredentials', params: {provider: selectedProvider} }">
          <a class="button is-primary m-t-lg m-l-md is-size-5">
            <p class="p-l-md p-r-md">Next</p>
          </a>
        </router-link>
        <!-- <router-link :to="{ path: 'userCredentials', params: {key: $route.params.key} }"> -->
        <!-- <a :href="selectedProvider" class="button is-primary m-t-lg m-l-md is-size-5">
          <p class="p-l-md p-r-md has-text-white">Next</p>
        </a> -->
      </div>
    </div>
    <b-modal :active.sync="connectionIsBackOn">
      <div class="card">
        <div class="card-content">
          <p>
            Make sure your connection is back on
          </p>
        </div>
        <div class="has-text-centered close-button p-md">
          <a class="m-t-lg is-size-6" @click="connectionIsBackOn = false">
            <p class="p-l-md p-r-md">Ok</p>
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
      selectedProvider: "",
      connectionIsBackOn: true
    };
  },
  mounted() {
    let command = "networksetup -setairportpower en0 on";
    let exec = require("child_process").exec;
    exec(command);
  }
};
</script>

<style scoped>
.card {
  border-radius: 0.6rem;
}
.button {
  border-radius: 0.6rem;
  width: 9rem;
}
.button p {
  color: #223435;
}
.close-button {
  border-top: solid 0.1rem rgba(55, 202, 189, 0.3);
}
.is-size-custom-header {
  font-size: 1.7rem;
}
.logo {
  height: 3.3rem;
  border-top: solid 0.2rem rgba(55, 202, 189, 0.3);
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
