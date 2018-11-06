<template>
  <section>
    <div class="hero-head p-md save-your-keys">
      <p class="is-size-4 font-gibson-semibold">
        Zixipay Failed Payment
      </p>
    </div>
    <div class="hero-body save-your-keys">
      <div class="container font-gibson">
        <p>
            Unfortunately, Zixipay is unable to complete the transaction. Please contact Zixipay and the Volentix team. You can send your information to t.me/volentix.
        </p>
        <div class="m-t-md">
          <div class="has-text-dark is-pulled-right">
            <a  class="button m-t-md is-size-5 green is-pulled-right" @click="$router.push('main')">
              <p class="p-l-sm p-r-sm is-size-7 font-gibson-semibold second">Back To Wallet</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    let fs = require("fs");
    let path = require("path")
    let electron = require("electron")
    let filePath = path.join(electron.remote.app.getPath('userData'), '/verto.temp');
    const config = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    this.$store.commit("save", config.currentKey);
    this.$store.dispatch("setKeys", config.keys);
    fs.unlinkSync(filePath);
    this.$store.dispatch("login", true);
  },
  methods: {}
};
</script>

<style scoped>
.display-keys {
  background-color: #162929;
  border-radius: 0.6rem;
  padding: 1rem !important;
}
.generated-keys {
  background-color: #1a4a48;
  border-radius: 0.6rem;
  border: solid #3acce1 1.2pt;
  overflow-wrap: break-word;
}
.hero-body.save-your-keys {
  background-color: #f7f7fa !important;
  padding-top: 0.3rem !important;
}
.hero-head.save-your-keys {
  background-color: #f7f7fa !important;
}
.save-your-keys .font-gibson-semibold {
  color: #454f63;
}
.hero-body.save-your-keys p.font-gibson-semibold.second {
  color: #ffffff;
}
.hero-body.save-your-keys .button.green {
  background-color: #00a6a6 !important;
}
.hero-body.save-your-keys .button.aqua {
  background-color: #2cfee6 !important;
}
.hero-body.save-your-keys .font-gibson {
  color: #78849e;
  font-size: 10.5pt;
}
.hero-body.save-your-keys .button {
  border-radius: 0.7rem;
}
.b-checkbox {
  margin-top: 0.6rem;
}
.level-left .button {
  width: 10rem;
  height: 3rem;
}
.level-right .button {
  width: 10rem;
  height: 3rem;
}
.container {
  width: 10rem;
}
</style>
