<template>
  <div class="header">
    <b-navbar type="dark" variant="dark" class="navbar">
      <b-container>
        <b-navbar-brand href="#">MovieDB</b-navbar-brand>
        <b-nav-form style="list-style-type: none">
          <b-form-input 
            class="mr-sm-2 search-input" 
            placeholder="Search"
            debounce="500"
            v-model="searchValue">
          </b-form-input>
        </b-nav-form>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  data: () => ({
    searchValue: ''
  }),
  watch: {
    searchValue: 'onSerchValueChanged'
  },
  methods: {
    ...mapActions('movies', [
      'searchMovies', 
      'fetchMovies', 
      'toggleSearchState'
    ]),
    onSerchValueChanged(val) {
      if(val) {
        this.searchMovies(val)
        this.toggleSearchState(true)
      } else {
        this.fetchMovies()
        this.toggleSearchState(false)
      }
    }
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 30px;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.search-input {
  color:#fff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 0, 0, 0.6);
}

.search-input:focus {
  box-shadow: none;
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(0, 0, 0, 0.6);
  color:#fff;
}
</style>