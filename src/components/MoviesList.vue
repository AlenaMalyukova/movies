<template>
  <b-container class="movies-list-container">
    <h1 class="list-title">{{ listTitle }}</h1>
    <b-row>
      <template v-if="isExist">
      <b-col cols="3" v-for="(movie, key) in list" :key="key">
        <MovieItem 
        :movie="movie" 
        @mouseover.native="onMouseOver(movie.Poster)"
        @removeItem="onRemoveItem"
        @showModal="onShowMovieInfo"/>
      </b-col>
    </template>
    <template v-else>
      <div>Empty List</div>
    </template>
    </b-row>
    <b-modal 
      body-class="movie-modal-body" 
      :id="movieInfoModalId" 
      size="xl" 
      hide-footer 
      hide-header
    >
      <MovieInfoModalContent :movie="selectedMovie" @closeModal="onCloseModal"/>
    </b-modal>
  </b-container>
</template>

<script>
import MovieItem  from './MovieItem'
import { mapActions,mapGetters } from 'vuex'
import MovieInfoModalContent from './MovieInfoModalContent';

export default {
  name: "MoviesList",
  components: {
    MovieItem,
    MovieInfoModalContent
  },
  props: {
    list: {
      type: Object,
      default: () => ({ })
    }
  },
  data: () => ({
    movieInfoModalId: 'movie-info',
    selectedMovieId: ''
  }),
  computed: {
    ...mapGetters('movies', ['isSearch']),
    isExist() {
      return Boolean(Object.keys(this.list).length)
    },
    listTitle() {
      return this.isSearch ? 'Search result' : 'IMDB Top 250'
    },
    selectedMovie() {
      return this.selectedMovieId ? this.list[this.selectedMovieId] : null
    }
  },
  methods: {
    ...mapActions( 'movies', ['removeMovie']),
    ...mapActions(['showNotify']),
    onMouseOver(poster) {
      this.$emit('changePoster', poster)
    },
    async onRemoveItem({ id, title }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(`Are you sure delete ${title}?`)
      
      if (isConfirmed) {
        this.removeMovie(id)
        this.showNotify({
          msg: 'Movie deleted successeful',
          variant: 'success',
          title: 'success'
        })
      }
    },
    onShowMovieInfo(id) {
      this.selectedMovieId = id
      this.$bvModal.show(this.movieInfoModalId)
    },
    onCloseModal() {
      this.selectedMovieId = null
      this.$bvModal.hide(this.movieInfoModalId)
    }
  }
}
</script>

<style scoped>
.movies-list-container {
  padding-bottom: 30px;
}
.list-title {
  color: #fff;
  padding: 15px;
  margin-bottom: 30px;
  font-size: 50px;
}
</style>

<style>
.movie-modal-body {
  padding: 0 !important;
}
</style>