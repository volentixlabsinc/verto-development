<template>
  <section>
    <a class="button is-fullwidth is-primary has-text-white" @click="$router.push('settings')">&lt;--- &nbsp;&nbsp;Back To Verto</a>
    <iframe :src="zixipayLink"/>
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
      currency: 'BTC',
      zixipayLink: 'https://volentix.blocktopus.io/token_buyers/sign_up?verto_address=' + this.$store.state.userKey
    };
  },
  methods: {
    signup: function() {
      this.$router.push("walletmanager")
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
