'use strict'

import Swiper from 'swiper/dist/js/swiper.min.js'

const init = carouselItems => {
  for (const carouselItem of carouselItems) {
    if (carouselItem.swiper) {
      return
    }

    const paginationEl = carouselItem.parentNode.querySelector(
      '.js-carouselPagination'
    )
    const prevBtnEl = carouselItem.parentNode.querySelector(
      '.js-carouselButtonPrev'
    )
    const nextBtnEl = carouselItem.parentNode.querySelector(
      '.js-carouselButtonNext'
    )

    const panel = value => {
      switch (true) {
        case value === 'auto':
          return 'auto'
        case !value:
          return 1
        default:
          return Number(value)
      }
    }

    const options = {
      loop: false,
      slidesPerView: panel(carouselItem.dataset.pcPanel),
      navigation: {
        nextEl: nextBtnEl,
        prevEl: prevBtnEl
      },
      pagination: {
        el: paginationEl,
        clickable: true
      },
      breakpoints: {
        812: {
          slidesPerView: panel(carouselItem.dataset.spPanel)
        }
      }
    }

    if (carouselItem.dataset.spOption) {
      const optionSpObj = JSON.parse(carouselItem.dataset.spOption)

      Object.assign(options.breakpoints[812], optionSpObj)
    }

    if (carouselItem.dataset.pcOption) {
      const optionPcObj = JSON.parse(carouselItem.dataset.pcOption)

      Object.assign(options, optionPcObj)
    }

    const swiper = new Swiper(carouselItem, options)

    swiper.on('slideChangeTransitionEnd', function() {
      const slides = this.el.querySelectorAll('.fr-img')

      if (!slides.length) {
        return
      }

      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i]

        if (slide.classList.contains('lazyloading')) {
          slide.classList.remove('lazyloading')
          slide.classList.add('lazyloaded')
        }
      }
    })
  }
}

export const carousel = carouselItems => {
  init(carouselItems)
}

export const responsiveDestroyCarousel = carouselItems => {
  const convertedTypeArrayCarouselItems = [].map.call(
    carouselItems,
    element => {
      return element
    }
  )

  const divideDevice = device => {
    const result = convertedTypeArrayCarouselItems.filter(item => {
      const type = item.dataset.destroy

      return device === type
    })

    return result
  }

  const destroy = destroyItems => {
    for (const destroyItem of destroyItems) {
      if (!destroyItem.swiper) {
        return
      }

      destroyItem.swiper.destroy(true, true)
    }
  }

  const initSwiper = () => {
    const deviceSize = window.innerWidth
    const breakpoint = 812

    if (deviceSize <= breakpoint) {
      init(divideDevice('pc'))
      destroy(divideDevice('sp'))
    } else {
      init(divideDevice('sp'))
      destroy(divideDevice('pc'))
    }
  }

  initSwiper()

  window.addEventListener('resize', () => {
    initSwiper()
  })
}
