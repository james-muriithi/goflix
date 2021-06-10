<template>
  <section
    class="
      section
      section--head
      section--head-fixed
      section--gradient
      section--details-bg
    "
  >
    <div
      class="section__bg"
      :style="`background: url('https://image.tmdb.org/t/p/original/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg') center top / cover no-repeat`"
    ></div>
    <div class="container">
      <!-- article -->
      <movie-article />
      <!-- end article -->
    </div>
  </section>
</template>

<script>
import MovieArticle from '@/components/Movie/Article.vue'

export default {
  components: {
    MovieArticle,
  },
}
</script>

<style>
.section {
  /* padding: 60px 0; */
  position: relative;
  overflow: hidden;
}
.section--pb0 {
  padding-top: 0px;
}
.section--head {
  margin-top: 80px;
  padding-top: 30px;
  padding-bottom: 0;
  border-top: 1px solid #151f30;
}
.section--gradient:after {
  content: '';
  position: absolute;
  bottom: 0;
  height: 300px;
  left: 0;
  right: 0;
  display: block;
  z-index: 1;
  background: linear-gradient(0deg, rgba(21, 31, 48, 0.35) 0%, #131720 100%);
  pointer-events: none;
}
.section--gradient .container {
  z-index: 2;
  position: relative;
}
.section--catalog {
  padding-bottom: 20px;
  border-bottom: 1px solid #151f30;
  margin-bottom: 60px;
}
.section--details {
  padding-bottom: 60px;
}
.section--details-bg {
  padding-bottom: 60px;
  padding-top: 120px;
}
.section__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 450px;
  z-index: 2;
}
.section__bg:before {
  content: '';
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: block;
  z-index: 1;
  background: linear-gradient(180deg, rgba(19, 23, 32, 0.5) 0%, #131720 100%);
  pointer-events: none;
}
.section__title {
  display: block;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  color: #fff;
  font-size: 30px;
  line-height: 120%;
  margin-bottom: 10px;
}
.section__title a {
  color: #fff;
}
.section__title a:hover {
  color: #2f80ed;
}
.section__title b {
  font-weight: 400;
  color: #2f80ed;
}
.section__title--center {
  text-align: center;
}
.section__title--head {
  font-size: 32px;
}
.section__title--sidebar {
  margin-top: 60px;
}
.section__text {
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: #e0e0e0;
  margin-bottom: 10px;
}
.section__text b {
  font-weight: 500;
  color: #fff;
}
.section__text a {
  color: #2f80ed;
}
.section__text a:hover {
  color: #2f80ed;
  text-decoration: underline;
}
.section__text--center {
  text-align: center;
}
.section__text:first-child {
  margin-top: 20px;
}
.section__list ol {
  padding-left: 0;
  list-style: none;
  counter-reset: li;
  margin-bottom: 0;
}
.section__list ol ol {
  padding-left: 15px;
  margin-top: 10px;
}
.section__list ol ol ol {
  margin-top: 10px;
  margin-bottom: 10px;
}
.section__list ol ol ol li {
  margin-top: 5px;
}
.section__list ol h4 {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  display: inline-block;
  margin-bottom: 0;
  margin-top: 20px;
  font-weight: 500;
}
.section__list ol li {
  font-size: 16px;
  line-height: 24px;
  color: #e0e0e0;
  position: relative;
}
.section__list ol li b {
  font-weight: 500;
  color: #e0e0e0;
}
.section__list ol li a {
  color: #2f80ed;
}
.section__list ol li a:hover {
  color: #2f80ed;
  text-decoration: underline;
}
.section__list ol li:last-child {
  margin-bottom: 0;
}
.section__list ol li:before {
  counter-increment: li;
  content: counters(li, '.') '. ';
}
.section__carousel-wrap {
  position: relative;
  width: 100%;
}
.section__carousel .owl-dots,
.section__interview .owl-dots,
.section__live .owl-dots,
.section__series .owl-dots {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 30px;
}
.section__carousel .owl-dot,
.section__interview .owl-dot,
.section__live .owl-dot,
.section__series .owl-dot {
  margin-right: 10px;
}
.section__carousel .owl-dot:last-child,
.section__interview .owl-dot:last-child,
.section__live .owl-dot:last-child,
.section__series .owl-dot:last-child {
  margin-right: 0;
}
.section__carousel .owl-dot span,
.section__interview .owl-dot span,
.section__live .owl-dot span,
.section__series .owl-dot span {
  display: block;
  height: 4px !important;
  width: 10px !important;
  border-radius: 3px;
  background-color: rgba(47, 128, 237, 0.5) !important;
  transition: 0.5s !important;
}
.section__carousel .owl-dot.active span,
.section__interview .owl-dot.active span,
.section__live .owl-dot.active span,
.section__series .owl-dot.active span {
  width: 20px !important;
  background-color: #2f80ed !important;
}
.section__series .owl-dots {
  margin-top: 20px;
}
.section__nav {
  display: none;
}
@media (min-width: 768px) {
  .section {
    padding: 80px 0;
  }
  .section--pb0 {
    padding-top: 0px;
  }
  .section--head {
    padding-top: 40px;
    padding-bottom: 0;
  }
  .section--catalog {
    padding-bottom: 30px;
    margin-bottom: 80px;
  }
  .section--details {
    padding-bottom: 80px;
  }
  .section--details-bg {
    padding-bottom: 80px;
    padding-top: 160px;
  }
  .section__title {
    font-size: 36px;
  }
  .section__title--head {
    font-size: 38px;
  }
  .section__text {
    font-size: 18px;
    line-height: 28px;
  }
  .section__text--small {
    font-size: 16px;
    line-height: 26px;
  }
  .section__text:first-child {
    margin-top: 30px;
  }
  .section__list ol h4 {
    font-size: 16px;
  }
  .section__list ol li {
    font-size: 16px;
    line-height: 26px;
  }
  .section__carousel .owl-dots,
  .section__interview .owl-dots,
  .section__live .owl-dots,
  .section__series .owl-dots {
    margin-top: 40px;
  }
  .section__series .owl-dots {
    margin-top: 30px;
  }
}
@media (min-width: 992px) {
  .section__title--sidebar {
    margin-top: 30px;
  }
}
@media (min-width: 1200px) {
  .section--gradient:after {
    height: 500px;
  }
  .section--head {
    margin-top: 0px;
    padding-top: 60px;
    padding-bottom: 20px;
  }
  .section--head-fixed {
    margin-top: 0px;
  }
  .section--catalog {
    padding-bottom: 30px;
    margin-bottom: 80px;
  }
  .section--details {
    padding-bottom: 80px;
  }
  .section--details-bg {
    padding-bottom: 80px;
    padding-top: 160px;
  }
  .section__nav {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: 50%;
    margin-top: -10px;
    background-color: #151f30;
  }
  .section__nav svg {
    stroke: #e0e0e0;
    transition: stroke 0.5s;
  }
  .section__nav:hover {
    background-color: #2f80ed;
  }
  .section__nav--cards {
    top: 142px;
    margin-top: -25px;
  }
  .section__nav--interview,
  .section__nav--live {
    top: 148px;
    margin-top: -25px;
  }
  .section__nav--series {
    top: 90px;
    margin-top: -25px;
  }
  .section__nav--prev {
    right: 100%;
    margin-right: 30px;
  }
  .section__nav--next {
    left: 100%;
    margin-left: 30px;
  }
}
@media (min-width: 1440px) {
  .section__nav--cards {
    top: 165px;
  }
  .section__nav--interview,
  .section__nav--live {
    top: 170px;
  }
  .section__nav--series {
    top: 102px;
  }
}
</style>
