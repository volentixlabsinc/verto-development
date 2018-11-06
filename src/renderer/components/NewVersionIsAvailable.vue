<template>
  <section class="hero is-fullheight is-light is-bold" >
    <NewVersionDownload/>
  </section>
</template>

<script>
import NewVersionDownload from "@/components/NewVersionIsAvailable/NewVersionDownload.vue";

export default {
  components: {
    NewVersionDownload
  }
};
</script>
