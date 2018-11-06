<template>
  <div class="hero is-fullheight is-paddingless has-blur-background">
    <div class="hero-head p-t-sm">
      <div class="p-t-xl p-l-lg">
        <div class="is-pulled-left is-vcentered is-flex m-t-md">
          <router-link to="/newversionisavailable">
            <font-awesome-icon icon="arrow-left" class="fa-sm has-text-white m-l-sm"/>
          </router-link>
        </div>
        <img src="~@/assets/img/verto-logo-white.png" class="logo m-l-md p-t-sm p-l-sm p-r-sm">
        <div class="is-pulled-right is-vcentered is-flex m-t-md p-r-lg">
          <router-link to="/settings">
            <font-awesome-icon icon="sliders-h" class="is-size-5 has-text-aqua" flip="horizontal"/>
          </router-link>
        </div>
      </div>
      <p class="p-t-lg p-l-lg has-text-aqua is-size-4">
        Check for Updates
      </p>
      <div class="m-t-lg p-l-lg p-r-lg">
        <p class="has-text-grey-light is-size-6">
          Version 0.1.2 is downloading.
        </p>
      </div>
      <div class="m-t-xl p-l-lg p-r-lg has-text-white">
        <div class="is-pulled-left">
          Downloading
        </div>
        <div class="is-pulled-right">
          25%
        </div>
        <progress class="progress is-primary is-small" value="25" max="100">25%</progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  border-radius: 0.6rem;
}
.button p {
  color: #223435;
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