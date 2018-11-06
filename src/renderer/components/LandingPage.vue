<template>
  <div>
    <div class="container is-fluid">
      {{ messages }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages: 'Welcome page',
      is_login: false
    }
  },
  created () {
    if (this.is_login) {
      this.$router.push({ path: 'home' })
    } else {
      this.$router.push({ path: 'welcome' }) // was main
    }
  }
}
</script>
