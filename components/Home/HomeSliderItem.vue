<template>
  <div class="home__card">
    <a :href="url" :title="title">
      <img :src="thumbnail" :alt="title" />
    </a>
    <div>
      <h2>{{ title }}</h2>
      <ul>
        <li>Action</li>
        <li>2021</li>
      </ul>
    </div>
    <button class="home__add" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"
        />
      </svg>
    </button>
    <span v-if="rating" class="home__rating"
      ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"
        />
      </svg>
      {{ rating }}</span
    >
  </div>
</template>

<script>
export default {
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
.home__add {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 3;
  transition: 0.5s;
  opacity: 0;
  pointer-events: none;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: #151f30;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: scale(0.8);
}
.home__add svg {
  width: 18px;
  height: auto;
  fill: #2f80ed;
  transition: fill 0.5s;
}
.home__add:hover svg,
.home__add.active svg {
  fill: #ffc312;
}
.home__rating {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;
  transition: 0.5s;
  opacity: 0;
  pointer-events: none;
  height: 30px;
  width: auto;
  padding: 0 10px;
  transform: scale(0.8);
  border-radius: 10px;
  background-color: rgba(21, 31, 48, 0.75);
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  cursor: default;
}
.home__rating svg {
  width: 16px;
  height: auto;
  fill: #2f80ed;
  transition: fill 0.5s;
  margin-right: 5px;
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
