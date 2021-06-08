<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div
          class="
            col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3
            order-4 order-md-1 order-lg-4 order-xl-1
          "
        >
          <div class="footer__flixtv">
            <img src="@/assets/images/logo-white.png" alt="" />
          </div>
          <p class="footer__tagline">
            Movies & TV Shows, Online cinema,<br />
            Movie database Vue & Nuxt Template.
          </p>
          <div class="footer__social">
            <a
              v-for="social in socials"
              :key="social.title"
              :title="social.title"
              :href="social.link"
              target="_blank"
            >
              <span v-html="social.svg"></span>
            </a>
          </div>
        </div>

        <div
          class="
            col-6 col-md-4 col-lg-3 col-xl-2
            order-1 order-md-2 order-lg-1 order-xl-2
            offset-md-2 offset-lg-0 offset-xl-1
          "
        >
          <h6 class="footer__title">Goflix</h6>
          <div class="footer__nav">
            <a href="#">About us</a>
          </div>
        </div>

        <div
          class="
            col-12 col-md-8 col-lg-6 col-xl-4
            order-3 order-lg-2 order-md-3 order-xl-3
          "
        >
          <div class="row">
            <div class="col-12">
              <h6 class="footer__title">Browse</h6>
            </div>

            <div class="col-6">
              <div class="footer__nav">
                <a href="#">TV Shows</a>
                <a href="#">Movies</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="footer__content">
            <div class="footer__links">
              <a href="#">Privacy policy</a>
              <a href="#">Terms and conditions</a>
            </div>
            <small class="footer__copyright"
              >© Goflix, {{ new Date().getFullYear() }}. Created by
              <a href="https://james-muriithi.firebaseapp.com/" target="_blank"
                >James Muriithi</a
              >.</small
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          title: 'Facebook',
          link: '#',
          svg: `<svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z"
                  fill="#3B5998"
                />
                <path
                  d="M16.5634 23.8197V15.6589H18.8161L19.1147 12.8466H16.5634L16.5672 11.4391C16.5672 10.7056 16.6369 10.3126 17.6904 10.3126H19.0987V7.5H16.8457C14.1394 7.5 13.1869 8.86425 13.1869 11.1585V12.8469H11.4999V15.6592H13.1869V23.8197H16.5634Z"
                  fill="white"
                /></svg`,
        },
        {
          title: 'Twitter',
          link: '#',
          svg: `<svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z"
                  fill="#55ACEE"
                />
                <path
                  d="M14.5508 12.1922L14.5822 12.7112L14.0576 12.6477C12.148 12.404 10.4798 11.5778 9.06334 10.1902L8.37085 9.50169L8.19248 10.0101C7.81477 11.1435 8.05609 12.3405 8.843 13.1455C9.26269 13.5904 9.16826 13.654 8.4443 13.3891C8.19248 13.3044 7.97215 13.2408 7.95116 13.2726C7.87772 13.3468 8.12953 14.3107 8.32888 14.692C8.60168 15.2217 9.15777 15.7407 9.76631 16.0479L10.2804 16.2915L9.67188 16.3021C9.08432 16.3021 9.06334 16.3127 9.12629 16.5351C9.33613 17.2236 10.165 17.9545 11.0883 18.2723L11.7388 18.4947L11.1723 18.8337C10.3329 19.321 9.34663 19.5964 8.36036 19.6175C7.88821 19.6281 7.5 19.6705 7.5 19.7023C7.5 19.8082 8.78005 20.4014 9.52499 20.6344C11.7598 21.3229 14.4144 21.0264 16.4079 19.8506C17.8243 19.0138 19.2408 17.3507 19.9018 15.7407C20.2585 14.8827 20.6152 13.315 20.6152 12.5629C20.6152 12.0757 20.6467 12.0121 21.2343 11.4295C21.5805 11.0906 21.9058 10.7198 21.9687 10.6139C22.0737 10.4126 22.0632 10.4126 21.5281 10.5927C20.6362 10.9105 20.5103 10.8681 20.951 10.3915C21.2762 10.0525 21.6645 9.43813 21.6645 9.25806C21.6645 9.22628 21.5071 9.27924 21.3287 9.37458C21.1398 9.4805 20.7202 9.63939 20.4054 9.73472L19.8388 9.91479L19.3247 9.56524C19.0414 9.37458 18.6427 9.16273 18.4329 9.09917C17.8978 8.95087 17.0794 8.97206 16.5967 9.14154C15.2852 9.6182 14.4563 10.8469 14.5508 12.1922Z"
                  fill="white"
                /></svg`,
        },
        {
          title: 'Github',
          link: '#',
          svg: `<svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
                  <path fill-rule="evenodd" fill="white" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>`,
        },
      ],
    }
  },
}
</script>

<style scoped>
.footer {
  background-color: #131720;
  padding: 30px 0;
  position: relative;
  overflow: hidden;
}
.footer:after {
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
.footer .container {
  z-index: 2;
  position: relative;
}
.footer__flixtv {
  margin-top: 60px;
}
.footer__tagline {
  margin-top: 20px;
  display: block;
  font-size: 13px;
  line-height: 21px;
  color: #e0e0e0;
  margin-bottom: 0;
}
.footer__social {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
}
.footer__social a {
  margin-top: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  position: relative;
  transition-property: all;
}
.footer__social a svg {
  width: 100%;
  height: auto;
}
.footer__social a:last-child {
  margin-right: 0;
}
.footer__social a:hover {
  opacity: 1 !important;
}
.footer__social:hover a {
  opacity: 0.4;
}
.footer__content {
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid rgba(47, 128, 237, 0.1);
}
.footer__links {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
.footer__links a {
  font-size: 14px;
  color: #e0e0e0;
  margin-right: 20px;
}
.footer__links a:last-child {
  margin-right: 0;
}
.footer__links a:hover {
  color: #2f80ed;
}
.footer__copyright {
  display: block;
  font-size: 13px;
  color: #e0e0e0;
  margin-top: 20px;
}
.footer__copyright a {
  color: #fff;
}
.footer__copyright a:hover {
  color: #2f80ed;
}
.footer__title {
  display: block;
  margin-top: 30px;
  font-size: 15px;
  color: #fff;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  margin-bottom: 15px;
}
.footer__nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.footer__nav a {
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 10px;
  color: #e0e0e0;
}
.footer__nav a:last-child {
  margin-bottom: 0;
}
.footer__nav a:hover {
  color: #2f80ed;
}
@media (min-width: 768px) {
  .footer {
    padding: 40px 0;
  }
  .footer__content {
    margin-top: 80px;
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .footer__flixtv {
    margin-top: 40px;
  }
  .footer__title {
    margin-top: 40px;
  }
  .footer__links {
    width: auto;
    order: 2;
  }
  .footer__copyright {
    margin-top: 0;
    order: 1;
  }
}
@media (min-width: 1200px) {
  .footer:after {
    height: 500px;
  }
  .footer__social {
    display: inline-flex;
    width: auto;
  }
  .footer__links a {
    margin-right: 30px;
  }
  .footer__links a:last-child {
    margin-right: 0;
  }
}
</style>
