<template>
  <div class="movies-pagination">
    <b-pagination 
      v-model="currentPageModel"
      :per-page="perPage"
      :total-rows="total"
      prev-text="Prev"
      next-text="Next">
    </b-pagination> 
  </div>
</template>
<script>
export default {
  name: 'MoviesPagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage
      },
      set(value) {
        this.$emit('pageChanged', value)
      }
    }
  }
}
</script>

<style scoped>
.movies-pagination {
  display: flex;
  justify-content: center;
  margin-top: auto;
}

.movies-pagination >>> .pagination .page-item .page-link {
  background-color: transparent;
  color: #fff;
  font-size: 12px;
  box-shadow: none;
}

.movies-pagination >>> .pagination .page-item.active .page-link {
  border-color: #fff;
  background-color: #fff;
  color: #000;
}

.movies-pagination >>> .pagination .page-item.disabled .page-link {
  color: grey;
}

</style>