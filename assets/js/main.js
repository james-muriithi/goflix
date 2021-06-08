if (process.client) {
  $(function () {
    $('.home__carousel').owlCarousel({
      mouseDrag: true,
      touchDrag: true,
      dots: true,
      loop: true,
      autoplay: false,
      smartSpeed: 600,
      margin: 20,
      autoHeight: true,
      autoWidth: true,
      responsive: {
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
      },
    })
  })
}
