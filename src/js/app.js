'use strict'

import 'lazysizes'
import 'picturefill'
import 'picturefill/dist/plugins/intrinsic-dimension/pf.intrinsic.min.js'

import { mounted, isMobile } from '@utilities'

const carousel = async () => {
  try {
    const carouselItems = document.querySelectorAll('.js-carousel')

    if (!carouselItems.length) {
      return
    }

    const { carousel } = await import(
      /* webpackChunkName: "carousel" */ '@modules/carousel'
    )

    carousel(carouselItems)
  } catch (error) {
    /* eslint no-console: 0 */
    console.log(error)
  }
}

const responsiveDestroyCarousel = async () => {
  try {
    const carouselItems = document.querySelectorAll('.js-carousel-destroy')

    if (!carouselItems.length) {
      return
    }

    const { responsiveDestroyCarousel } = await import(
      /* webpackChunkName: "carousel" */ '@modules/carousel'
    )

    responsiveDestroyCarousel(carouselItems)
  } catch (error) {
    /* eslint no-console: 0 */
    console.log(error)
  }
}

const video = async () => {
  try {
    const items = document.querySelectorAll('.js-video')

    if (!items.length) {
      return
    }

    const { video } = await import(
      /* webpackChunkName: "video" */ '@modules/video'
    )

    video(items)
  } catch (error) {
    /* eslint no-console: 0 */
    console.log(error)
  }
}

const smoothScroll = async () => {
  try {
    const items = document.querySelectorAll('.js-smoothScroll')

    if (!items.length) {
      return
    }

    const { smoothScroll } = await import(
      /* webpackChunkName: "smoothScroll" */ '@modules/smoothScroll'
    )

    smoothScroll(items)
  } catch (error) {
    /* eslint no-console: 0 */
    console.log(error)
  }
}

const fixedAnchor = async () => {
  try {
    const el = document.querySelector('.js-fr-fixedAnchor')

    if (!el) {
      return
    }

    const module = await import(
      /* webpackChunkName: "fixedAnchor" */ '@modules/FixedAnchor'
    )

    new module.default(el)
  } catch (error) {
    /* eslint no-console: 0 */
    console.log(error)
  }
}

const colorChip = async () => {
  try {
    const items = document.querySelectorAll('.js-colorChip')

    if (!items.length) {
      return
    }

    const { colorChip } = await import(
      /* webpackChunkName: "colorChip" */ '@modules/colorChip'
    )

    colorChip(items)
  } catch (error) {
    /* eslint no-console: 0 */
    console.log(error)
  }
}

const responsiveLink = async () => {
  try {
    const items = document.querySelectorAll('.js-responsiveLink')

    if (!items.length || isMobile()) {
      return
    }

    const { responsiveLink } = await import(
      /* webpackChunkName: "responsiveLink" */ '@modules/responsiveLink'
    )

    responsiveLink(items)
  } catch (error) {
    /* eslint no-console: 0 */
    console.log(error)
  }
}

const pagetop = async () => {
  try {
    const el = document.querySelector('.js-fr-pagetop')

    if (!el) {
      return
    }

    const { pagetop } = await import(
      /* webpackChunkName: "pagetop" */ '@modules/pagetop'
    )

    pagetop(el)
  } catch (error) {
    /* eslint no-console: 0 */
    console.log(error)
  }
}

mounted(() => {
  carousel()
  responsiveDestroyCarousel()
  video()
  smoothScroll()
  fixedAnchor()
  colorChip()
  responsiveLink()
  pagetop()
})
