'use strict'

import axiosBase from 'axios'

import { bffRegion, bffVersion } from '@utilities'

/**
 * @description Axios
 */
export const axios = axiosBase.create({
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
  timeout: 10000
})

/**
 * @description Axios/BFF
 */
export const axiosBFF = () => {
  const data = {
    data: {},
    responseType: 'json',
    timeout: 10000
  }

  switch (true) {
    case bffVersion() === 'v5':
      data.headers = {
        'x-fr-clientid': `${bffRegion()}.feature-pages`
      }

      break
  }

  return axiosBase.create(data)
}
