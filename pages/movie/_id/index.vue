<template>
  <div>
    <movie-details />
    <similar-movies />
  </div>
</template>

<script>
import MovieDetails from '@/components/Movie/MovieDetails.vue'
import SimilarMovies from '@/components/Movie/SimilarMovies.vue'

export default {
  components: {
    MovieDetails,
    SimilarMovies,
  },
  data() {
    return {
      title: 'Fast and Furious 9',
    }
  },
  head() {
    return {
      title: `Goflix | Watch ${this.title}`,
    }
  },
}
</script>
