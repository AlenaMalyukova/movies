<template>
  <BContainer>
    <h3 class="list-title">IMDB Top 250</h3>
    <BRow>
      <template v-if="isExist">
      <BCol cols="3" v-for="(movie, key) in list" :key="key">
      </BCol>
    </template>
    </BRow>
  </BContainer>
</template>

<script>
import { BContainer } from 'bootstrap-vue';

export default {
  name: "MoviesList",
  props: {
      list: {
          type: Array,
          default: () => { }
      }
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length)
    }
  }
}
</script>

<style scoped>

</style>