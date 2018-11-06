<template>
  <section>
    <div class="hero-body choose-password p-md">
      <div class="container font-gibson m-t-lg">
        <p class="is-size-4 font-gibson-semibold">
          Whitelist
        </p>
        <br>
        <p class="m-t-lg">
          The following is the workflow for applying for KYC.
        </p>
        <br>
        <form>
            <input v-model="username" class="input m-b-sm" type="text" placeholder="Name">
            <input v-model="email" class="input m-b-sm" type="text" placeholder="Email">
            <input v-model="amount" class="input m-b-sm" type="number" placeholder="Amount">
            <select class="input m-b-md" v-model="currency">
              <option value="BTC">Bitcoin</option>
              <option value="ETH">Ethereum</option>
              <option value="EUR">Euro</option>
              <option value="USD">US Dollar</option>
            </select>
            <div class="level-item has-text-centered is-marginless">
                <a class="button is-fullwidth is-primary has-text-white" @click="signup"> Submit </a>
            </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import sjcl from "sjcl";

export default {
  data() {
    return {
      username: "",
      email: "",
      amount: 0,
      currency: 'BTC'
    };
  },
  methods: {
    signup: function() {
      this.$router.push("zixipay")
    }
  }
};
</script>

<style scoped>
.hero-body.choose-password {
  background-color: #f7f7fa !important;
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
