import { TIME_INTERVALS } from '../constants/time-intervals'

export const scoreFormatter = (value) => {
  const formatter = new Intl.NumberFormat('en', { notation: 'compact' })
  return formatter.format(value)
}

export const relativeDateFormatter = (value) => {
  const formatter = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
    style: 'short'
  })

  const postDate = new Date(value * 1000)
  const elapsed = (postDate - new Date())

  for (const [unit, amount] of TIME_INTERVALS) {
    if (Math.abs(elapsed) > amount || unit === 'second') {
      return formatter.format(Math.round(elapsed / amount), unit)
    }
  }
  return ''
}

export const dateTimeFormatter = (value) => {
  const formatter = new Intl.DateTimeFormat('en', {
    dateStyle: 'short',
    timeStyle: 'short',
    hour12: true
  })
  return formatter.format(value)
}
