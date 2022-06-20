'use strict'

import { closest } from '@utilities'
import { addEvent } from '@utilities/event'

const colorChipFunc = el => {
  const parent = closest({
    el: el,
    className: 'js-fr-productGrid'
  })
  const imgEl = parent.querySelector('.fr-img')
  const fileNameFullPath = imgEl.getAttribute('src')
  const fileName = fileNameFullPath.match(/([^/]*)\./)[1]
  const extend = fileNameFullPath.match(/[^.]+$/)[0]
  const path = fileNameFullPath.replace(`${fileName}.${extend}`, '')
  const switchFileName = el.dataset.colorChip

  imgEl.setAttribute('src', `${path}${switchFileName}.${extend}`)
}

/**
 * @description colorChip
 */
export const colorChip = items => {
  addEvent({
    el: items,
    ev: 'click',
    func: e => {
      colorChipFunc(e.currentTarget)
    }
  })
}
