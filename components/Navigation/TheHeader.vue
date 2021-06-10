<template>
  <header class="header header--static">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header__content">
            <button class="header__menu" type="button">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nuxt-link to="/" class="header__logo">
              <img src="@/assets/images/logo-white.png" alt="Goflix" />
            </nuxt-link>

            <div class="header__actions">
              <form
                action="#"
                :class="
                  searchOpen
                    ? 'header__form header__form--active'
                    : 'header__form'
                "
              >
                <input
                  class="header__form-input"
                  type="text"
                  placeholder="I'm looking for..."
                />
                <button class="header__form-btn" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  class="header__form-close"
                  title="close search"
                  @click="toggleSearch"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.3345 0.000183105H5.66549C2.26791 0.000183105 0.000488281 2.43278 0.000488281 5.91618V14.0842C0.000488281 17.5709 2.26186 20.0002 5.66549 20.0002H14.3335C17.7381 20.0002 20.0005 17.5709 20.0005 14.0842V5.91618C20.0005 2.42969 17.7383 0.000183105 14.3345 0.000183105ZM5.66549 1.50018H14.3345C16.885 1.50018 18.5005 3.23515 18.5005 5.91618V14.0842C18.5005 16.7653 16.8849 18.5002 14.3335 18.5002H5.66549C3.11525 18.5002 1.50049 16.7655 1.50049 14.0842V5.91618C1.50049 3.23856 3.12083 1.50018 5.66549 1.50018ZM7.07071 7.0624C7.33701 6.79616 7.75367 6.772 8.04726 6.98988L8.13137 7.06251L9.99909 8.93062L11.8652 7.06455C12.1581 6.77166 12.6329 6.77166 12.9258 7.06455C13.1921 7.33082 13.2163 7.74748 12.9984 8.04109L12.9258 8.12521L11.0596 9.99139L12.9274 11.8595C13.2202 12.1524 13.2202 12.6273 12.9273 12.9202C12.661 13.1864 12.2443 13.2106 11.9507 12.9927L11.8666 12.9201L9.99898 11.052L8.13382 12.9172C7.84093 13.2101 7.36605 13.2101 7.07316 12.9172C6.80689 12.6509 6.78269 12.2343 7.00054 11.9407L7.07316 11.8566L8.93843 9.99128L7.0706 8.12306C6.77774 7.83013 6.77779 7.35526 7.07071 7.0624Z"
                    />
                  </svg>
                </button>
              </form>

              <button
                class="header__search"
                type="button"
                title="search"
                @click="toggleSearch"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                  />
                </svg>
              </button>

              <nuxt-link to="/login" class="header__user">
                <span>Sign in</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"
                  />
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchOpen: false,
    }
  },
  methods: {
    toggleSearch() {
      this.searchOpen = !this.searchOpen
    },
  },
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #131720;
  z-index: 99;
  transition: 0.5s, margin 0s;
}
.header--menu {
  top: 250px;
}
.header__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 80px;
  width: 100%;
}
.header__logo {
  display: block;
  margin-left: 35px;
  height: auto;
  width: 80px;
}
.header__logo img {
  width: 100%;
  height: auto;
}

.header__nav-menu {
  display: block;
  position: absolute !important;
  z-index: -1;
  pointer-events: none;
  opacity: 0;
  top: 0;
  background-color: #151f30;
  border-radius: 16px;
  padding: 0 20px;
  width: 200px;
  transition: 0.5s;
  transform: translate3d(0px, 22px, 0px);
  margin-top: 10px;
  height: auto;
}
.header__nav-menu .header__nav-menu {
  margin-top: 5px;
  margin-left: 20px;
}
.header__nav-menu li {
  position: relative;
  margin-bottom: 15px;
}
.header__nav-menu li:first-child {
  padding-top: 20px;
}
.header__nav-menu li:last-child {
  margin-bottom: 0;
  padding-bottom: 20px;
}
.header__nav-menu a {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #e0e0e0;
  font-size: 14px;
  font-weight: 400;
  transition: 0.5s;
  position: relative;
}
.header__nav-menu a svg {
  stroke: #2f80ed;
  fill: #2f80ed;
  width: 4px;
  height: auto;
  transition: 0.5s;
  margin-left: 4px;
  margin-top: 1px;
}
.header__nav-menu a:hover {
  color: #2f80ed;
}
.header__nav-menu a:hover:after {
  opacity: 1;
}
.header__nav-menu--scroll {
  max-height: 240px;
  overflow: hidden;
}
.header__nav-menu.show {
  z-index: 1000;
  pointer-events: auto;
  opacity: 1;
}
.header__menu {
  position: absolute;
  width: 24px;
  height: 22px;
  display: block;
  left: 0;
  top: 29px;
}
.header__menu span {
  position: absolute;
  left: 0;
  width: 24px;
  height: 2px;
  background-color: #fff;
  border-radius: 2px;
  transition: 0.5s;
  opacity: 1;
}
.header__menu span:first-child {
  top: 0;
}
.header__menu span:nth-child(2) {
  top: 10px;
  width: 16px;
}
.header__menu span:last-child {
  top: 20px;
  width: 8px;
}
.header__menu--active span {
  background-color: #2f80ed;
}
.header__menu--active span:first-child {
  transform: rotate(45deg);
  top: 9px;
}
.header__menu--active span:nth-child(2) {
  opacity: 0;
}
.header__menu--active span:last-child {
  width: 24px;
  transform: rotate(-45deg);
  top: 9px;
}
.header__form {
  position: absolute;
  top: auto;
  left: 0;
  right: 0;
  bottom: -80px;
  height: 80px;
  background-color: #131720;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  pointer-events: none;
  transition: 0.5s;
}
.header__form--active {
  pointer-events: auto;
  bottom: 0;
}
.header__form-input {
  width: calc(100% - 40px);
  height: 40px;
  border-radius: 16px;
  background-color: #151f30;
  border: none;
  padding: 0 60px 0 20px;
  font-size: 14px;
  color: #fff;
}
.header__form-btn {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  right: 60px;
}
.header__form-btn svg {
  width: 20px;
  height: auto;
  fill: #2f80ed;
  transition: fill 0.5s;
}
.header__form-btn:hover svg {
  fill: #fff;
}
.header__form-close {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  right: 0;
  opacity: 0.7;
}
.header__form-close svg {
  width: 16px;
  height: auto;
  fill: #2f80ed;
}
.header__form-close:hover {
  opacity: 1;
}
.header__actions {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.header__search {
  margin-right: 30px;
}
.header__search svg {
  width: 20px;
  height: auto;
  fill: #2f80ed;
}
.header__user {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.header__user span {
  font-size: 14px;
  color: #e0e0e0;
  font-weight: 500;
  margin-right: 10px;
  transition: 0.5s;
}
.header__user svg {
  width: 20px;
  fill: #2f80ed;
}
.header__user:hover span {
  color: #2f80ed;
}
@media (min-width: 576px) {
  .header__nav {
    padding-left: calc((100% - 510px) / 2);
  }
}
@media (min-width: 768px) {
  .header__nav {
    padding-left: calc((100% - 690px) / 2);
  }
  .header__search {
    margin-right: 43px;
  }
}
@media (min-width: 992px) {
  .header__nav {
    padding-left: calc((100% - 930px) / 2);
  }
  .header__search {
    margin-right: 163px;
  }
}
@media (min-width: 1200px) {
  .header--static {
    position: relative;
  }
  .header--fixed {
    border-bottom: 1px solid transparent;
  }
  .header--fixed .header__content,
  .header--fixed .header__nav-item {
    transition: height 0.5s;
  }
  .header--hidden .header__content,
  .header--hidden .header__nav-item {
    transition: height 0.5s;
  }
  .header--active {
    border-color: #151f30;
  }
  .header--active .header__content {
    height: 80px;
  }
  .header--active .header__nav {
    height: 80px;
  }
  .header--active .header__nav-item {
    height: 80px;
  }
  .header--scroll {
    top: -80px;
  }
  .header--scroll .header__content {
    height: 80px;
  }
  .header--scroll .header__nav {
    height: 80px;
  }
  .header--scroll .header__nav-item {
    height: 80px;
  }
  .header__content {
    height: 100px;
    overflow: visible;
  }
  .header__nav-menu {
    transform: translate3d(0px, 46px, 0px);
    margin-top: 25px;
  }
  .header__nav-menu .header__nav-menu {
    margin-top: 0;
    margin-left: 0;
    transform: translate3d(0px, 0px, 0px);
    left: 100%;
    padding-top: 30px;
    border-radius: 6px;
  }
  .header__nav-menu .header__nav-menu li:first-child {
    padding-top: 0;
  }
  .header__nav-menu .header__nav-menu:before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    top: 10px;
    height: 1px;
    background-color: rgba(47, 128, 237, 0.16);
  }
  .header__menu {
    display: none;
  }
  .header__logo {
    margin-left: 0;
  }
  .header__actions {
    justify-content: space-between;
    width: 350px;
  }
  .header__form {
    position: relative;
    opacity: 1;
    pointer-events: auto;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    width: 250px;
  }
  .header__form-input {
    width: 100%;
  }
  .header__form-btn {
    right: 20px;
  }
  .header__form-close {
    display: none;
  }
  .header__search {
    display: none;
  }
}
@media (min-width: 1440px) {
  .header__actions {
    width: 383px;
  }
  .header__content {
    padding: 0 30px;
  }
}
</style>
