<template>
  <div>
    <the-header />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/Navigation/TheHeader.vue'
// jquery
// import('jquery')
// // bootstrap
// import('popper.js')
// import('bootstrap')

export default {
  components: {
    TheHeader,
  },
}
</script>
