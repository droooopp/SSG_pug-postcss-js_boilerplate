'use strict'

import { elem } from '@utilities'
import { addEvent } from '@utilities/event'

/**
 * @description Modal
 */
export default class Modal {
  constructor({ items, modal }) {
    modal.funcWindowLoad ? this.addEventWindowLoad(modal) : false
    modal.funcWindowResize ? this.addEventWindowResize(modal) : false
    modal.funcWindowOrientationchange
      ? this.addEventWindowOrientationchange(modal)
      : false
    this.addEventOpen({
      items: items,
      modal: modal
    })
    this.addEventClose()
  }

  open(e, modal) {
    modal.funcOpen(e)
  }

  close() {
    const modalEl = document.querySelector('.js-modal')
    const modalContentsEl = document.querySelector('.js-modal_contentsInner')

    modalContentsEl.innerHTML = ''
    modalEl.setAttribute('data-modal-is-active', false)

    if (modalEl.classList.contains('-favorite')) {
      modalEl.classList.remove('-favorite')
    }
  }

  addEventWindowLoad(modal) {
    addEvent({
      el: window,
      ev: 'load',
      func: () => {
        modal.funcWindowLoad()
      }
    })
  }

  addEventWindowResize(modal) {
    addEvent({
      el: window,
      ev: 'resize',
      func: () => {
        modal.funcWindowResize()
      }
    })
  }

  addEventWindowOrientationchange(modal) {
    addEvent({
      el: window,
      ev: 'orientationchange',
      func: () => {
        modal.funcWindowOrientationchange()
      }
    })
  }

  addEventOpen({ items, modal }) {
    addEvent({
      el: items,
      ev: 'click',
      func: e => {
        this.open(e, modal)
      }
    })
  }

  addEventClose() {
    const el = elem('js-modal_close')

    addEvent({
      el: el,
      ev: 'click',
      func: e => {
        this.close(e)
      }
    })
  }
}
