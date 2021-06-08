<template>
  <div class="catalog">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <catalog-nav />

          <div class="row row--grid">
            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
              <movie-card />
            </div>
            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
              <movie-card />
            </div>
            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
              <movie-card />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <button class="catalog__more" type="button">Load more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogNav from '@/components/Catalog/CatalogNav.vue'
import MovieCard from '@/components/Movie/MovieCard.vue'

export default {
  components: {
    CatalogNav,
    MovieCard,
  },
}
</script>

<style scoped>
.catalog {
  position: relative;
  padding: 40px 0 60px;
  overflow: hidden;
}
.catalog:after {
  content: '';
  position: absolute;
  bottom: 0;
  height: 500px;
  left: 0;
  right: 0;
  display: block;
  z-index: 1;
  background: linear-gradient(0deg, rgba(21, 31, 48, 0.35) 0%, #131720 100%);
}
.catalog .container {
  z-index: 2;
  position: relative;
}
.catalog__more {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 40px auto 0;
  width: 160px;
  height: 50px;
  border-radius: 16px;
  background-color: #151f30;
  font-size: 14px;
  color: #e0e0e0;
  text-transform: uppercase;
  font-weight: 500;
}
.catalog__more:hover {
  color: #fff;
  background-color: #2f80ed;
}
.catalog__paginator-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 40px auto 0;
  width: 100%;
  height: 50px;
  border-radius: 16px;
  background-color: #151f30;
}
.catalog__paginator-wrap--comments {
  margin: 30px auto;
}
.catalog__pages {
  display: none;
}
.catalog__paginator {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.catalog__paginator li {
  margin-right: 15px;
}
.catalog__paginator li:last-child {
  margin-right: 0;
}
.catalog__paginator li.active a {
  color: #2f80ed;
  cursor: default;
}
.catalog__paginator a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 12px;
  background-color: #131720;
  font-size: 14px;
  color: #e0e0e0;
  font-weight: 500;
}
.catalog__paginator a svg {
  stroke: #e0e0e0;
  transition: 0.5s;
}
.catalog__paginator a:hover {
  color: #2f80ed;
}
.catalog__paginator a:hover svg {
  stroke: #2f80ed;
}
.catalog--list:after {
  display: none;
}
.catalog--page {
  padding-top: 20px;
}
@media (min-width: 768px) {
  .catalog {
    padding: 60px 0 80px;
  }
  .catalog--page {
    padding-top: 30px;
  }
  .catalog__more {
    margin: 60px auto 0;
    width: 180px;
    height: 60px;
  }
  .catalog__paginator-wrap {
    padding: 0 30px;
    margin: 60px auto 0;
    height: 60px;
    justify-content: space-between;
  }
  .catalog__paginator-wrap--comments {
    margin: 30px auto;
    padding: 0 20px;
  }
  .catalog__pages {
    display: block;
    font-size: 14px;
    color: #e0e0e0;
    font-weight: 500;
  }
}
@media (min-width: 1200px) {
  .catalog {
    overflow: visible;
  }
}
.row--grid {
  margin-right: -10px;
  margin-left: -10px;
}
.row--grid .col-6,
.row--grid .col-12 {
  padding-left: 10px;
  padding-right: 10px;
}
@media (min-width: 768px) {
  .row--grid {
    margin-right: -15px;
    margin-left: -15px;
  }
  .row--grid .col-6,
  .row--grid .col-12 {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
