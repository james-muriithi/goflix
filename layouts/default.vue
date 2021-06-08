<template>
  <div>
    <the-header />
    <Nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/Navigation/TheHeader.vue'
import TheFooter from '~/components/Navigation/TheFooter.vue'
// jquery
// import 'jquery'
// // bootstrap
// import('popper.js')
// import('bootstrap')

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
