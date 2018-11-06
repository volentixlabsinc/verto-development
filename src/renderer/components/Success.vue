<template>
  <section>
    <div class="hero-head p-md save-your-keys">
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
    this.$router.push({ path: "main" });
  },
  methods: {}
};
</script>

<style scoped>
</style>
