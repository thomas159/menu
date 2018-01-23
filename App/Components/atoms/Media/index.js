/* eslint-disable  */
import styled, { css } from 'styled-components'

const minSizes = {
  desktop: 959,
  tablet: 768,
  phone: 413,
  smphone: 0,
}

const maxSizes = {
  desktop: 10000,
  tablet: 959,
  phone: 767,
  smphone: 412,
}

// iterate through the sizes and create a media template
export const media = Object.keys(minSizes, maxSizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emMinSize = minSizes[label] / 16
  const emMaxSize = maxSizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emMinSize}em) and (max-width: ${emMaxSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

