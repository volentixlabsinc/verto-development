<template>
  <section class="hero is-fullheight is-light is-bold">
    <div class="hero-head">
      <div class="container">
        <div class="navbar-brand p-l-xl p-t-lg">
          <img src="~@/assets/img/verto-dark.png" alt="Logo">
        </div>
      </div>
    </div>
    <div class="hero-body is-paddingless">
      <div class="container p-l-lg p-r-lg">
        <h3 class="subtitle is-marginless font-gibson">
          Terms & Conditions
        </h3>
        <div class="box terms-box m-t-sm is-size-6 font-gibson">
          <article>
            <p class="m-t-md m-b-md" >Placeholder US citizens Warning</p>
            <p class="m-t-md m-b-md" >Vestibulum volutpat fermentum elit eget consectetur. Curabitur interdum tincidunt tincidunt. Nam non mi libero. integer congue lorem vestibulum ante mattis fringilla.</p>
            <p class="m-t-md m-b-md" >Elit eget consectetur. Curabitur interdum</p>
            <p class="m-t-md m-b-md" >Placeholder US citizens Warning</p>
            <p class="m-t-md m-b-md" >Vestibulum volutpat fermentum elit eget consectetur. Curabitur interdum tincidunt tincidunt. Nam non mi libero. integer congue lorem vestibulum ante mattis fringilla.</p>
            <p class="m-t-md m-b-md" >Elit eget consectetur. Curabitur interdum</p>
            <p class="m-t-md m-b-md" >Placeholder US citizens Warning</p>
            <p class="m-t-md m-b-md" >Vestibulum volutpat fermentum elit eget consectetur. Curabitur interdum tincidunt tincidunt. Nam non mi libero. integer congue lorem vestibulum ante mattis fringilla.</p>
            <p class="m-t-md m-b-md" >Elit eget consectetur. Curabitur interdum</p>
            <p class="m-t-md m-b-md" >Placeholder US citizens Warning</p>
            <p class="m-t-md m-b-md" >Vestibulum volutpat fermentum elit eget consectetur. Curabitur interdum tincidunt tincidunt. Nam non mi libero. integer congue lorem vestibulum ante mattis fringilla.</p>
            <p class="m-t-md m-b-md" >Elit eget consectetur. Curabitur interdum</p>
          </article>
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <div class="container">
        <div class="level is-mobile p-lg">
          <div class="level-item has-text-centered is-marginless font-gibson-semibold">
            <a class="p-t-lg p-b-lg button is-fullwidth is-light m-r-sm deny-btn">Deny</a>
          </div>
          <div class="level-item has-text-centered is-marginless font-gibson-semibold">
            <a class="p-t-lg p-b-lg button is-fullwidth is-primary m-l-sm">Agree</a>
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
      messages: "",
      wallet: null, // { name: "wallet_xxx", publicKey: "EOS..."" }
      eosUrl: null
    };
  }
};
</script>

<style scoped>
.terms-box {
  padding: 0.75rem;
}
.terms-box article {
  height: 55vh;
  overflow-y: scroll;
}
.button {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 0.5rem;
}
.deny-btn {
  background-color: rgba(120, 132, 158, 0.16);
}
</style>
