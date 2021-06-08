<template>
  <div>
    <client-only>
      <carousel
        id="flixtv-hero"
        class="home__carousel owl-carouseal"
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
            'mouse-drag': false,
            dots: false,
            'start-position': 1,
            'slide-by': 3,
          },
        }"
      >
        <home-slider-item
          v-for="movie in movies"
          :id="movie.id"
          :key="movie.id"
          :title="movie.title"
          :thumbnail="movie.thumbnail"
          :rating="movie.rating"
        />
      </carousel>
    </client-only>

    <button
      class="home__nav home__nav--prev"
      data-nav="#flixtv-hero"
      type="button"
    ></button>
    <button
      class="home__nav home__nav--next"
      data-nav="#flixtv-hero"
      type="button"
    ></button>
  </div>
</template>

<script>
import HomeSliderItem from '@/components/Home/HomeSliderItem.vue'
export default {
  components: {
    HomeSliderItem,
  },
  data() {
    return {
      movies: [
        {
          id: '1',
          title: 'Money Plane',
          thumbnail: require('@/assets/images/1.jpg'),
          rating: 9.1,
        },
        {
          id: '2',
          title: 'The Art of political',
          thumbnail: require('@/assets/images/2.jpg'),
          rating: 8.3,
        },
        {
          id: '3',
          title: 'Antebellum',
          thumbnail: require('@/assets/images/3.jpg'),
          rating: 7.9,
        },
        {
          id: '4',
          title: 'Kids Next Door',
          thumbnail: require('@/assets/images/4.jpg'),
          rating: 8.4,
        },
      ],
    }
  },
}
</script>

<style scoped>
.home--title {
  padding-top: 30px;
  overflow: hidden;
}
.home--title:after {
  content: '';
  position: absolute;
  top: 0;
  height: 300px;
  left: 0;
  right: 0;
  display: block;
  z-index: 1;
  background: linear-gradient(180deg, rgba(21, 31, 48, 0.35) 0%, #131720 100%);
}
.home--title .container,
.home--title .home__carousel {
  z-index: 2;
  position: relative;
}
.home__carousel {
  padding-left: 15px;
}

@media (min-width: 768px) {
  .home__carousel {
    padding-left: 0;
  }
}
</style>

<style>
.home__carousel .owl-theme .owl-dots {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 30px;
}
.home__carousel .owl-theme .owl-dot {
  margin-right: 10px;
}
.home__carousel .owl-dot:last-child {
  margin-right: 0;
}
.home__carousel .owl-theme .owl-dot span {
  display: block;
  height: 4px;
  width: 10px;
  border-radius: 3px;
  background-color: rgba(47, 128, 237, 0.5) !important;
  transition: 0.5s;
}
.home__carousel .owl-dot.active span {
  width: 20px;
  background-color: #2f80ed;
}
@media (min-width: 768px) {
  .home__carousel .owl-dots {
    margin-top: 40px;
    padding-left: calc((100vw - 690px) / 2);
  }
}
@media (min-width: 992px) {
  .home__carousel .owl-dots {
    padding-left: calc((100vw - 930px) / 2);
  }
}
@media (min-width: 1200px) {
  .home__carousel .owl-dots {
    padding-left: calc((100vw - 1110px) / 2);
  }
}
@media (min-width: 1440px) {
  .home__carousel .owl-dots {
    padding-left: calc((100vw - 1240px) / 2);
  }
}
</style>
