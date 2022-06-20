'use strict'

/**
 * @description DOMツリー読み込み完了後指定の関数を実行する
 * @param {Function} func [実行関数]
 */
export const mounted = func => {
  if (document.readyState !== 'loading') {
    func()
  } else {
    document.addEventListener('DOMContentLoaded', func)
  }
}

/**
 * @description Domの参照を取得する
 * @param {String} className [class名]
 * @returns {Object} 指定class名のDom参照
 */
export const elem = className => {
  const all = document.querySelectorAll(`.${className}`)

  return all.length > 1 ? all : all[0]
}

/**
 * @description 開始要素から最も近い親要素を取得する
 * @param {Object} el [要素]
 * @param {String} className [class名]
 * @returns {Object} 指定class名のDom参照
 */
export const closest = ({ el, className }) => {
  for (let item = el; item; item = item.parentElement) {
    if (item.classList.contains(className)) {
      return item
    }
  }
}

/**
 * @description モバイル端末なら true 、それ以外なら false を返す
 * @returns {Boolean}
 */
export const isMobile = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()

  if (
    userAgent.indexOf('iphone') != -1 ||
    userAgent.indexOf('ipod') != -1 ||
    (userAgent.indexOf('android') != -1 && userAgent.indexOf('mobile') != -1)
  ) {
    return true
  } else {
    return false
  }
}

export const parseQueryString = value => {
  const str = value ? value : window.location.search
  const objURL = {}

  str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function(
    $0,
    $1,
    $2,
    $3
  ) {
    objURL[$1] = $3
  })

  return objURL
}

export const escapeHtml = str => {
  if (!str) {
    return
  }

  str = str.replace(/&/g, '&amp;')
  str = str.replace(/</g, '&lt;')
  str = str.replace(/>/g, '&gt;')
  str = str.replace(/"/g, '&quot;')
  str = str.replace(/'/g, '&#39;')

  return str
}

export const isApp = () => {
  const ua = window.navigator.userAgent.toLowerCase()
  let appType = 0

  switch (true) {
    case ua.indexOf('frnativeapp') != -1 && ua.indexOf('ios-jp') != -1:
      appType = 1
      break
    case ua.indexOf('frnativeapp') != -1 && ua.indexOf('android-jp') != -1:
      appType = 2
      break
    case ua.indexOf('circle-jp') != -1:
      appType = 3
      break
    case ua.indexOf('frnativeapp') != -1 && ua.indexOf('ios-us') != -1:
      appType = 4
      break
    case ua.indexOf('frnativeapp') != -1 && ua.indexOf('android-us') != -1:
      appType = 5
      break
    case ua.indexOf('frnativeapp') != -1:
      appType = 6
      break
  }

  return appType
}

export const bffRegion = () => {
  const bodyEl = document.body
  const bffRegion = bodyEl.dataset.bffRegion

  return bffRegion
}

export const bffVersion = () => {
  const bodyEl = document.body
  const bffVersion = bodyEl.dataset.bffVersion

  return bffVersion
}
