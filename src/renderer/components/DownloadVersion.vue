<template>
  <section class="hero is-fullheight is-light is-bold" >
    <NewVersionIsDownloading/>
  </section>
</template>

<script>
import NewVersionIsDownloading from "@/components/DownloadVersion/NewVersionIsDownloading.vue";

export default {
  components: {
    NewVersionIsDownloading
  }
};
</script>
