<template>
  <div class="movie-item">
    <div class="movie-item-poster" :style="posterBg"></div>
    <div class="movie-info-wrap">
      <div class="movie-item-info"> 
        <h3 class="movie-item-title"> {{ movie.Title }} </h3>
        <span class="movie-year"> {{ movie.Year }}</span>
      </div>
      <div class="movie-item-controls row no-gutters">
        <div class="col" pr-2>
          <b-button 
            size="md" 
            block 
            variant="outline-light" 
            @click="showInfoModalEvent"
            >Info
          </b-button>
        </div>
        <div class="col" pl-2>
          <b-button 
            size="md" 
            block 
            variant="outline-light" 
            @click="removeEvent"
          >Remove</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MovieItem',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    posterBg() {
      return {
        'background-image' : `url(${this.movie.Poster})`
      }
    }
  },
  methods:{
    removeEvent() {
      this.$emit('removeItem', {id: this.movie.imdbID, title: this.movie.Title})
    },
    showInfoModalEvent() {
      this.$emit('showModal', this.movie.imdbID)
    }
  }
}
</script>
<style scoped>
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease-in;
  height: 400px;
  margin-bottom: 15px;
}

.movie-item:hover {
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
}

.movie-item-poster {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-repeat: none;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.movie-info-wrap {
  padding: 20px 10px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: all 0.2s ease;
}

.movie-item:hover .movie-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
}

.movie-item-title {
  font-size: 20px;
  color: #fff;
}

.movie-item-year {
  font-size: 14px;
  color: #fff;
}

.movie-item-controls {
  display: flex;
}

.no-gutters > .col {
  padding: 0 5px;
}

button {
  width: 100%;
}
</style>