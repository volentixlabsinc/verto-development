<template>
  <section>
    <div class="hero-head safe-keys p-md">
      <div class="has-text-centered">
        <img src="~@/assets/img/saveKeys.png">
      </div>
    </div>
    <div class="hero-body safe-keys">
      <div class="container font-gibson">
        <p class="is-size-4 font-gibson-semibold">
          Keep your keys safe
        </p>
        <p class="m-t-sm">
          Before continuing, it is important to note that you are entirely responsible for the management, safety, protection, and recovery of
          your private key. No one else including partners of the Volentix ecosystem.
        </p>
        <br>
        <p>
          You have 2 choices on persisting your private key. Both methods are designed to ensure your private key remains safe.
        </p>
        <ol class="m-l-md">
          <li>
            The first choice is to write your key down.
          </li>
          <li>
            The second choice is to encrypt your key in a password protected  file.
          </li>
        </ol>
        <br>
        <br>
        <router-link to="/saveyourkeys">
          <a class="is-primary button m-t-md is-size-5 is-pulled-right">
            <p class="p-l-md p-r-md is-size-6">Next</p>
          </a>
        </router-link>
        <router-link to="/walletmanager">
          <a class="is-primary button m-t-md is-size-5 is-pulled-left">
            <p class="p-l-md p-r-md is-size-6">Back</p>
          </a>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-body.safe-keys {
  background-color: #ffffff !important;
  padding-top: 0 !important;
}
.hero-head.safe-keys {
  background-color: #ffffff !important;
}
.hero-body.safe-keys .font-gibson-semibold {
  color: #454f63;
}
.hero-body.safe-keys .font-gibson {
  color: #78849e;
  font-size: 11pt;
}
.hero-body.safe-keys .button {
  border-radius: 0.7rem;
}
iframe {
  width: 100%;
}
</style>
