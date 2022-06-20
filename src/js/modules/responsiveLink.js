'use strict'

/**
 * @description PCアクセス時にPCリンク設定があれば href に設定する
 */
export const responsiveLink = items => {
  for (let item of items) {
    item.href = item.dataset.pcLink
  }
}
