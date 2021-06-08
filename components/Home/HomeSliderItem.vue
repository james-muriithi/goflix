<template>
  <div class="home__card">
    <nuxt-link :to="url" :aria-label="title">
      <img :src="thumbnail" :alt="title" />
    </nuxt-link>
    <div>
      <h2>{{ title }}</h2>
      <ul>
        <li v-if="genre">{{ genre }}</li>
        <li>2021</li>
      </ul>
    </div>
    <bookmark />
    <rating v-if="rating" :value="rating" />
  </div>
</template>

<script>
import Rating from '../UI/Rating.vue'
export default {
  components: { Rating },
  props: {
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: false,
      default: null,
    },
    genre: {
      type: String,
      default: 'Action',
    },
  },
  computed: {
    url() {
      return '#'
    },
  },
}
</script>

<style scoped>
.home__card {
  display: block;
  width: 290px;
  transition: 0.5s;
  overflow: hidden;
  position: relative;
  border-radius: 16px;
}
.home__card img {
  position: relative;
  width: 100%;
  z-index: 1;
  transition: 0.5s;
}
.home__card:before {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.8) 75%,
    rgba(0, 0, 0, 0.9) 100%
  );
  opacity: 0.65;
  transition: 0.5s;
  pointer-events: none;
}
.home__card div {
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  pointer-events: none;
}
.home__card div h2 {
  font-family: 'Rubik', sans-serif;
  font-size: 26px;
  line-height: 120%;
  font-weight: 400;
  color: #fff;
  margin-bottom: 15px;
  transition: 0.5s;
}
.home__card div ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.home__card div ul li {
  font-size: 14px;
  font-weight: 400;
  color: #e0e0e0;
  line-height: 100%;
  margin-right: 20px;
}
.home__card div ul li:last-child {
  margin-right: 0;
}
.home__card:hover:before {
  opacity: 0.9;
}
.home__card:hover img {
  transform: scale(1.08);
}
.home__card:hover div h2 {
  color: #2f80ed;
}
.home__card:hover .home__add {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}
.home__card:hover .home__rating {
  opacity: 1;
  transform: scale(1);
}
.home__nav {
  display: none;
}
.home__title {
  display: block;
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  color: #fff;
  font-size: 32px;
  line-height: 120%;
  margin-bottom: 30px;
}
.home__title b {
  font-weight: 400;
}
@media (min-width: 360px) {
  .home__card {
    width: 320px;
  }
}
@media (min-width: 400px) {
  .home__card {
    width: 340px;
  }
}
@media (min-width: 576px) {
  .home__card {
    width: 360px;
  }
  .home__card div {
    padding: 30px;
  }
  .home__card div h2 {
    font-size: 30px;
  }
  .home__carousel {
    padding-left: calc((100vw - 510px) / 2);
  }
  .home__add {
    top: 30px;
    left: 30px;
  }
  .home__rating {
    top: 30px;
    right: 30px;
  }
}
@media (min-width: 768px) {
  .home__carousel .owl-dots {
    margin-top: 40px;
    padding-left: calc((100vw - 690px) / 2);
  }
  .home__rating {
    font-size: 14px;
  }
  .home__rating svg {
    width: 18px;
  }
  .home__title {
    font-size: 40px;
    margin-bottom: 40px;
  }
  .home__card {
    width: 450px;
  }
}
@media (min-width: 992px) {
  .home__carousel .owl-dots {
    padding-left: calc((100vw - 930px) / 2);
  }
}
@media (min-width: 1200px) {
  .home--title .home__nav {
    height: 280px;
    top: auto;
  }
  .home__card {
    width: 350px;
  }
  .home__nav {
    display: block;
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    width: calc((100% - 1170px) / 2);
  }
  .home__nav--prev {
    left: 0;
    border-radius: 0 16px 16px 0;
  }
  .home__nav--next {
    right: 0;
    border-radius: 16px 0 0 16px;
  }
  .home__carousel .owl-item {
    pointer-events: none;
  }
  .home__carousel .owl-item.active + .center,
  .home__carousel .owl-item.center + .active,
  .home__carousel .owl-item:not(.active) + .active {
    pointer-events: auto;
  }
  .home__carousel .owl-dots {
    padding-left: calc((100vw - 1110px) / 2);
  }
}
@media (min-width: 1440px) {
  .home--title .home__nav {
    height: 330px;
  }
  .home__card {
    width: 413.333333px;
  }
  .home__nav {
    width: calc((100% - 1360px) / 2);
  }
}
</style>
