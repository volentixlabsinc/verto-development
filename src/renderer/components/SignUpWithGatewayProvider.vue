<template>
  <section class="hero is-fullheight is-light is-bold" >
    <GatewayProvider/>
  </section>
</template>

<script>
import GatewayProvider from "@/components/SignUpWithGatewayProvider/GatewayProvider.vue";
export default {
  components: {
    GatewayProvider
  }
};
</script>
