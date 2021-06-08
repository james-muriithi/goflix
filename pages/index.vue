<template>
  <div class="home home--static">
    <home-carousel />
  </div>
</template>

<script>
import HomeCarousel from '@/components/Home/HomeCarousel.vue'

export default {
  components: {
    HomeCarousel,
  },
}
</script>

<style scoped>
.home {
  position: relative;
  margin-top: 80px;
}
@media (min-width: 1200px) {
  .home {
    margin-top: 100px;
  }
  .home--static {
    margin-top: 0;
  }
}
</style>
