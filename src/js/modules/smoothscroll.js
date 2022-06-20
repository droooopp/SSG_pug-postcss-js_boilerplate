'use strict'

import { addEvent } from '@utilities/event'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

const smoothScrollFunc = e => {
  e.preventDefault()

  const el = e.currentTarget
  const targetId = el.dataset.link
  const targetEl = document.querySelector(targetId)

  if (!targetEl) {
    return
  }

  const rect = targetEl.getBoundingClientRect()
  const targetPosition = rect.top + window.pageYOffset

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  })
}

/**
 * @description smoothScroll
 */
export const smoothScroll = items => {
  addEvent({
    el: items,
    ev: 'click',
    func: e => {
      smoothScrollFunc(e)
    }
  })
}
