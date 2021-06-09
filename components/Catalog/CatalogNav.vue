<template>
  <div class="catalog__nav">
    <div class="catalog__select-wrap d-none">
      <select class="catalog__select" name="genres">
        <option value="All genres">All genres</option>
        <option value="Action/Adventure">Action/Adventure</option>
        <option value="Animals">Animals</option>
        <option value="Animation">Animation</option>
        <option value="Biography">Biography</option>
        <option value="Comedy">Comedy</option>
        <option value="Cooking">Cooking</option>
        <option value="Dance">Dance</option>
        <option value="Documentary">Documentary</option>
        <option value="Drama">Drama</option>
        <option value="Education">Education</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Family">Family</option>
        <option value="Fantasy">Fantasy</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Independent">Independent</option>
        <option value="International">International</option>
        <option value="Kids & Family">Kids & Family</option>
        <option value="Medical">Medical</option>
        <option value="Military/War">Military/War</option>
        <option value="Music">Music</option>
        <option value="Mystery/Crime">Mystery/Crime</option>
        <option value="Nature">Nature</option>
        <option value="Paranormal">Paranormal</option>
        <option value="Politics">Politics</option>
        <option value="Racing">Racing</option>
        <option value="Romance">Romance</option>
        <option value="Sci-Fi/Horror">Sci-Fi/Horror</option>
        <option value="Science">Science</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Science/Nature">Science/Nature</option>
        <option value="Travel">Travel</option>
        <option value="Western">Western</option>
      </select>

      <select class="catalog__select" name="years">
        <option value="All the years">All the years</option>
        <option value="1">'50s</option>
        <option value="2">'60s</option>
        <option value="3">'70s</option>
        <option value="4">'80s</option>
        <option value="5">'90s</option>
        <option value="6">2000-10</option>
        <option value="7">2010-20</option>
        <option value="8">2021</option>
      </select>
    </div>

    <div class="slider-radio">
      <input id="featured" type="radio" name="grade" checked="checked" /><label
        for="featured"
        >Featured</label
      >
      <input id="popular" type="radio" name="grade" /><label for="popular"
        >Popular</label
      >
      <input id="newest" type="radio" name="grade" /><label for="newest"
        >Newest</label
      >
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const sliderRadios = document.getElementsByClassName('slider-radio')
    const animationDuration = 0.2
    let timeout = null

    for (let i = 0; i < sliderRadios.length; i++) {
      const sliderRadio = sliderRadios[i]

      const slidingPiece = document.createElement('div')
      slidingPiece.className = 'sliding-piece'
      sliderRadio.appendChild(slidingPiece)
      slidingPiece.style.position = 'absolute'
      slidingPiece.style.transition =
        'width ' +
        animationDuration +
        's, height ' +
        animationDuration +
        's, top ' +
        animationDuration +
        's, left ' +
        animationDuration +
        's'

      sliderRadio.addEventListener('click', handleLabelClick)

      // Simply setting up the `sliderPiece` by clicking any pre-checked value;
      const radios = sliderRadio.querySelectorAll("input[type='radio']")
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) radios[i].click()
      }
    }

    function handleLabelClick(e) {
      let label
      let radio
      let slidingPiece

      if (e.target.nodeName === 'INPUT') {
        radio = e.target
        label = radio.nextSibling
        slidingPiece = radio.parentNode.querySelector('.sliding-piece')

        if (radio.checked) {
          const labelCoords = getElementCoords(label)

          // Read function description below.
          runUglyAnimationSetups(slidingPiece)

          animateSlidingPiece(labelCoords)

          if (timeout) {
            clearTimeout(timeout)
          }
          timeout = setTimeout(function () {
            clearUglyAnimationSetups()

            timeout = null
          }, (animationDuration + 0.3) * 1000)
        }
      }

      // function updateSlidingPieceCoords(label) {
      //   animateSlidingPiece(getElementCoords(label))
      // }

      function animateSlidingPiece(coords) {
        slidingPiece.style.left = coords.x + 'px'
        slidingPiece.style.top = coords.y + 'px'
        slidingPiece.style.width = coords.width + 'px'
        slidingPiece.style.height = coords.height + 'px'
      }

      /**
       * This function tries to hide the checked label until the animation
       * is over, because, in truth, the label is checked instantly. So
       * it gets all the styles from the css. But things like border or background-color
       * we don't want to show up instantly. So in this function we hide those styles.
       */
      function runUglyAnimationSetups() {
        slidingPiece.style['transition-duration'] = animationDuration
        slidingPiece.style.opacity = 1
        label.style.backgroundColor = 'transparent'
        label.style.boxShadow = 'none'
        label.style.borderColor = 'transparent'
      }

      function clearUglyAnimationSetups() {
        label.style.backgroundColor = ''
        slidingPiece.style.opacity = '0'
        label.style.boxShadow = ''
        label.style.borderColor = ''
      }
    }

    function getElementCoords(el) {
      const elementPosition = { x: el.offsetLeft, y: el.offsetTop }
      const elementSize = el.getBoundingClientRect()

      return {
        x: elementPosition.x,
        y: elementPosition.y,
        width: elementSize.width,
        height: elementSize.height,
      }
    }
  },
}
</script>

<style scoped>
.catalog__nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #151f30;
  padding: 10px 20px 20px;
  border-radius: 16px;
  width: 100%;
}
.catalog__select-wrap {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 2;
}
@media (min-width: 768px) {
  .catalog__nav {
    padding: 20px 30px;
    flex-direction: row;
  }
}

@media (min-width: 1200px) {
  .catalog__nav {
    position: -webkit-sticky;
    position: sticky;
    top: -1px;
    z-index: 99;
    background-color: #131720;
    border-radius: 0 0 16px 16px;
  }
  .catalog__nav:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    background-color: #151f30;
    z-index: 1;
    pointer-events: none;
  }
  .catalog__nav--relative {
    position: relative;
    top: auto;
  }
}
/* REQUIRED STYLES */
.slider-radio {
  position: relative;
}
.slider-radio input[type='radio'] {
  display: none;
}
.slider-radio input[type='radio']:checked + label {
  position: relative !important;
  z-index: 100 !important;
}

/* DEFAULT */
.slider-radio {
  display: inline-block;
}

.slider-radio label {
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
}

/* Indicator Styles */
.slider-radio input[type='radio']:checked + label,
.slider-radio .sliding-piece {
  background-color: #77abff;
  transition-timing-function: cubic-bezier(0.74, 0.14, 0.38, 0.99);
}

/* Base Theme */
.slider-radio.base {
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;
}

.slider-radio.base input[type='radio']:checked + label,
.slider-radio.base .sliding-piece {
  background-color: #005d7a;
  border: none;
  color: white;
}

/* Elegant Theme */

.slider-radio.elegant label {
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  opacity: 0.5;
}

.slider-radio.elegant input[type='radio']:checked + label,
.slider-radio.elegant .sliding-piece {
  color: white;
  border-radius: 10px;
  background-color: #f44242;
  opacity: 1;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

/* Edgy Theme */

.slider-radio.edgy label {
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  opacity: 0.5;
  filter: blur(1px);
  transition: filter 0.3s;
}

.slider-radio.edgy input[type='radio']:checked + label {
  filter: blur(0px);
}
.slider-radio.edgy input[type='radio']:checked + label,
.slider-radio.edgy .sliding-piece {
  border-radius: 10px;
  background-color: transparent;
  color: black;
  opacity: 1;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

/* Vertical */

.slider-radio.vertical label {
  display: block !important;
}

.slider-radio {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #131720;
  padding: 5px 0;
  border-radius: 16px;
  margin-top: 10px;
  position: relative;
  width: 100%;
  z-index: 2;
}
.slider-radio label {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 0 10px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  color: #e0e0e0;
  margin-bottom: 0;
  cursor: pointer;
  border-radius: 12px;
  margin: 0 5px;
  position: relative;
  z-index: 100;
  transition: color 0.5s;
}
.slider-radio label:hover {
  color: #2f80ed;
}
.slider-radio .sliding-piece {
  border-radius: 12px;
  background-color: #151f30;
  z-index: 99;
}
.slider-radio input[type='radio']:checked + label {
  color: #2f80ed;
  background-color: #151f30;
}
@media (min-width: 768px) {
  .slider-radio {
    margin-left: auto;
    margin-top: 0;
    width: auto;
  }
}
</style>
