'use strict'

import { addEvent } from '@utilities/event'
import Stickyfill from 'stickyfill'
import { throttle } from 'throttle-debounce'

/**
 * @description FixedAnchor
 */
export default class FixedAnchor {
  constructor(el) {
    this.el = el
    this.innerEl = this.el.querySelector('.js-fr-fixedAnchor_inner')
    this.item = this.el.querySelectorAll('.js-fr-fixedAnchor_item')
    this.itemLength = this.item.length
    this.changeItemNumber = 5
    this.isHorizontalScroll = this.item.length > this.changeItemNumber
    this.init()
  }

  init() {
    this.attachEventScroll()
    const stickyfill = Stickyfill()
    stickyfill.add(this.el)

    if (this.isHorizontalScroll) {
      this.el.classList.add('-horizontalScroll')
      this.createMovingButtons()
      this.attachEventMovingButtonsScroll()
      this.attachEventMovingButtonsClick()
    }

    this.el.classList.remove('-loading')
  }

  configSetting(scrollY) {
    const config = JSON.parse(this.el.dataset.config)

    for (const key in config) {
      const target = document.querySelector(key)
      const position = target.getBoundingClientRect().top

      if (position) {
        config[key] = Math.floor(scrollY + position)
      }
    }

    return config
  }

  configArray(configSetting) {
    return Object.entries(configSetting).map(([class_name, value]) => ({
      class_name,
      value
    }))
  }

  fixedAnchorPoint(config, scrollY) {
    let point = -1
    const pointsArr = []

    for (const key in config) {
      pointsArr.push(config[key])
    }

    for (let i = 0; i < pointsArr.length; i++) {
      if (scrollY >= pointsArr[i]) {
        point++
      }
    }

    return point
  }

  currentLocationDisplay() {
    const activeClassName = '-current'
    const scrollY =
      document.documentElement.scrollTop || document.body.scrollTop
    const configSetting = this.configSetting(scrollY)
    const configArray = this.configArray(configSetting)
    const fixedAnchorPoint = this.fixedAnchorPoint(configSetting, scrollY)

    for (let i = 0; i < configArray.length; i++) {
      const targetEl = document.querySelector(
        `[data-link="${configArray[i].class_name}"]`
      )
      const configLastItem = configArray.length - 1

      if (i === fixedAnchorPoint && i !== configLastItem) {
        if (targetEl && !targetEl.classList.contains(activeClassName)) {
          targetEl.classList.add(activeClassName)

          const rect = targetEl.getBoundingClientRect()
          const rectLeft =
            rect.left - (window.innerWidth - this.el.clientWidth) / 2
          const scrollLeft = this.innerEl.scrollLeft
          const scrollAmount = rectLeft + scrollLeft

          this.innerEl.scrollLeft = scrollAmount
          this.movingButtons()
        }
      } else if (targetEl && targetEl.classList.contains(activeClassName)) {
        targetEl.classList.remove(activeClassName)
      }
    }
  }

  isActive() {
    const el = this.el
    const className = '-isActive'
    const rect = el.getBoundingClientRect()
    const rectTop = rect.top

    if (rectTop === -1 && !el.classList.contains(className)) {
      el.classList.add(className)
    } else if (rectTop !== -1 && el.classList.contains(className)) {
      el.classList.remove(className)
    }
  }

  createMovingButtons() {
    const buttons = `<button class="fr-fixedAnchor_movingButton -prev js-fr-fixedAnchor_movingButton"></button><button class="fr-fixedAnchor_movingButton -next js-fr-fixedAnchor_movingButton"></button>`

    this.el.insertAdjacentHTML('beforeend', buttons)
  }

  movingButtons() {
    const scrollLeftAfter = this.innerEl.scrollLeft
    const contentWrapperWidth = this.innerEl.scrollWidth
    const contentWidth = this.el.clientWidth

    if (0 < scrollLeftAfter) {
      this.el.classList.add('-isActiveMovingButtonPrev')
    } else {
      this.el.classList.remove('-isActiveMovingButtonPrev')
    }

    if (scrollLeftAfter < contentWrapperWidth - contentWidth) {
      this.el.classList.add('-isActiveMovingButtonNext')
    } else {
      this.el.classList.remove('-isActiveMovingButtonNext')
    }
  }

  movingButtonsClick(e) {
    const target = e.currentTarget

    if (target.classList.contains('-prev')) {
      this.innerEl.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    } else if (target.classList.contains('-next')) {
      this.innerEl.scrollTo({
        top: 0,
        left: this.innerEl.scrollWidth,
        behavior: 'smooth'
      })
    }
  }

  attachEventScroll() {
    window.addEventListener(
      'scroll',
      throttle(150, () => {
        this.isActive()
        this.currentLocationDisplay()
      })
    )
  }

  attachEventMovingButtonsScroll() {
    this.innerEl.addEventListener(
      'scroll',
      throttle(150, () => {
        this.movingButtons()
      })
    )
  }

  attachEventMovingButtonsClick() {
    const movingButtons = document.querySelectorAll(
      '.js-fr-fixedAnchor_movingButton'
    )

    addEvent({
      el: movingButtons,
      ev: 'click',
      func: e => {
        this.movingButtonsClick(e)
      }
    })
  }
}
