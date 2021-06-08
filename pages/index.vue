<template>
  <div class="home home--static">
    <home-carousel />
    <home-catalog />
  </div>
</template>

<script>
import HomeCarousel from '@/components/Home/HomeCarousel.vue'
import HomeCatalog from '@/components/Home/HomeCatalog.vue'

export default {
  components: {
    HomeCarousel,
    HomeCatalog,
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
