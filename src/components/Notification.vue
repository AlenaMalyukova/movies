<template>
  <div class="notify-wrap"></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Notification',
  computed: {
    ...mapGetters(['messagePool'])
  },
  watch: {
    messagePool: 'showNotification'
  },
  methods: {
    showNotification({ msg, variant, title }) {
      this.$bvToast.toast(msg, {
        title,
        variant,
        solid: false,
        autoHideDelay:'2000',
      })
    }
  }
}
</script>

<style scoped>
::v-deep .toast {
  margin-top: 50px !important;
}
</style>