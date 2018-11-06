<template>
  <div class="hero is-fullheight is-paddingless has-blur-background">
    <div class="hero-head p-t-sm">
      <div class="p-t-xl p-l-lg">
        <div class="is-pulled-left is-vcentered is-flex m-t-md">
          <router-link to="/signupwithgatewayprovider">
            <font-awesome-icon icon="arrow-left" class="fa-sm has-text-white m-l-sm"/>
          </router-link>
        </div>
        <img src="~@/assets/img/verto-logo-white.png" class="logo m-l-md p-t-sm p-l-sm p-r-sm">
      </div>
      <div v-if="$route.params.provider === 'blocktopus'">
        <iframe :src="blocktopusSigningLink"/>
      </div>
      <div v-else>
        <div class="hero-body has-text-grey-light is-size-5">
          <p>
            Zixipay is not available yet.
          </p>
        </div>
      </div>
      <!-- <div class="m-t-lg p-l-lg p-r-lg has-text-white">
        <p class="has-text-grey-light is-size-6">
          Coming soon (in development)
        </p>
        <router-link :to="{ name: 'main', params: {key: $route.params.key} }">
          <a class="button is-primary m-t-md is-fullwidth m-t-xl is-size-5">
            <p class="p-l-md p-r-md">Next</p>
          </a>
        </router-link>
      </div> -->

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocktopusSigningLink: ""
    };
  },
  mounted() {
    this.generateLink();
  },
  methods: {
    generateLink() {
      this.blocktopusSigningLink =
        "https://test.volentix.blocktopus.io/token_buyers/sign_in?verto_public_address=" +
        this.$route.params.key;
    }
  }
};
</script>

<style>
iframe {
  width: 100%;
  height: 90vh;
}
.button {
  border-radius: 0.6rem;
  width: 9rem;
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
