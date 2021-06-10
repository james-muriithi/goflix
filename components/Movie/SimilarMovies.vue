<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="section__title">
            <a href="#">Similar movies</a>
          </h2>
        </div>

        <div class="col-12">
          <div class="section__carousel-wrap">
            <carousel
              class="section__carousel"
              :mouse-drag="true"
              :touch-drag="true"
              :dots="true"
              :loop="true"
              :autoplay="false"
              :smart-speed="600"
              :margin="20"
              :auto-height="true"
              :auto-width="true"
              :responsive="{
                0: {
                  items: 2,
                },
                576: {
                  items: 2,
                  margin: 20,
                },
                768: {
                  items: 2,
                  margin: 30,
                  center: true,
                },
                1200: {
                  items: 3,
                  margin: 30,
                  center: true,
                  mouseDrag: false,
                  dots: false,
                  startPosition: 1,
                  slideBy: 3,
                },
              }"
            >
              <movie-card class="similar-movie" />
              <movie-card class="similar-movie" />
              <movie-card class="similar-movie" />
            </carousel>

            <button
              class="section__nav section__nav--cards section__nav--prev"
              data-nav="#similar"
              type="button"
            >
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 7.72559L16.25 7.72559"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.2998 1.70124L1.2498 7.72524L7.2998 13.7502"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              class="section__nav section__nav--cards section__nav--next"
              data-nav="#similar"
              type="button"
            >
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 7.72559L0.75 7.72559"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MovieCard from '@/components/Movie/MovieCard.vue'

export default {
  components: {
    MovieCard,
  },
}
</script>

<style scoped>
.similar-movie {
  width: 160px;
}
</style>
