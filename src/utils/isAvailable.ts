import { isAfter } from 'date-fns'

import availability from '../../config/availability'

const isAvailable = (date: Date): boolean => {
  if (isAfter(date, new Date()) && !(date.toISOString() in availability)) {
    return true
  }
  return false
}
export default isAvailable;
