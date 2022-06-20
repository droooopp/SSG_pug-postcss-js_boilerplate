'use strict'

import Modal from '@modules/Modal'

/**
 * @description video
 */
const modal = {
  funcOpen(e) {
    e.preventDefault()

    const target = e.currentTarget
    const modalEl = document.querySelector('.js-modal')
    const modalContentsEl = document.querySelector('.js-modal_contentsInner')
    const href = target.dataset.href

    const createIframe = `<iframe class="modal_contentsIframe" src="${href}" frameborder="0" allowfullscreen></iframe>`

    modalContentsEl.innerHTML = createIframe
    modalEl.setAttribute('data-modal-is-active', true)
  },

  funcWindow() {
    const modalContentsEl = document.querySelector('.modal_contents')

    if (!modalContentsEl) {
      return
    }

    if (Math.abs(window.orientation) === 90) {
      modalContentsEl.classList.add('-landscape')
    } else {
      modalContentsEl.classList.remove('-landscape')
    }
  },

  funcWindowLoad() {
    this.funcWindow()
  },

  funcWindowResize() {
    this.funcWindow()
  },

  funcWindowOrientationchange() {
    this.funcWindow()
  }
}

export const video = items => {
  new Modal({
    items: items,
    modal: modal
  })
}
