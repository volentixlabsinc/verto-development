<template>
  <section class="hero is-fullheight is-light is-bold" >
    <CheckUpdates/>
  </section>
</template>

<script>
import CheckUpdates from "@/components/CheckForUpdates/CheckUpdates.vue";

export default {
  components: {
    CheckUpdates
  }
};
</script>
