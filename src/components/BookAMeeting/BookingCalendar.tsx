import React, { useMemo } from 'react'
import {
  format,
  getWeek,
  startOfWeek,
  isSaturday,
  isSunday,
  addDays,
} from 'date-fns'
import { addWeeks } from 'date-fns/esm'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { ChooseTime } from '@/components/Animated'

import isAvailable from '@/utils/isAvailable';

import * as S from './calendar-styled'
import {
  START_HOUR,
  END_HOUR,
  DATE_FORMAT_STRING,
  DAYS_OF_WEEK,
  MAX_WEEKS_FROM_NOW,
} from './constants'

type Props = {
  setDate: (date: Date) => void
  weeksFromNow: number
  setWeeksFromNow: (n: number) => void
}

const BookingCalendar: React.FC<Props> = ({
  setDate,
  weeksFromNow,
  setWeeksFromNow,
}) => {
  const now = new Date()

  let firstWorkingMonday: Date

  if (isSaturday(now)) {
    firstWorkingMonday = addDays(now, 2)
  } else if (isSunday(now)) {
    firstWorkingMonday = addDays(now, 1)
  } else {
    firstWorkingMonday = startOfWeek(now, { weekStartsOn: 1 })
  }

  const items = useMemo(() => {
    const tempItems: React.ReactElement[] = []

    new Array(END_HOUR - START_HOUR).fill(0).forEach((_, index) => {
      DAYS_OF_WEEK.forEach((_, key) => {
        const date = new Date(
          addDays(addWeeks(firstWorkingMonday, weeksFromNow), key).setHours(
            START_HOUR + index,
            0,
            0,
            0
          )
        )

        const isAv = isAvailable(date)

        tempItems.push(
          <S.TimeCell
            available={isAv}
            onClick={isAv ? () => setDate(date) : undefined}
            key={key}
          >
            {`${Math.floor((START_HOUR + index) / 10)}${
              (START_HOUR + index) % 10
            }:00`}
          </S.TimeCell>
        )
      })
    })

    return tempItems
  }, [weeksFromNow])

  return (
    <div>
      <S.FormHead>
       
          <FaChevronLeft
            size={24}
            color={weeksFromNow > 0 ? '#000' : '#aaa'}
            onClick={() => {
              if (weeksFromNow > 0) {
                setWeeksFromNow(weeksFromNow - 1)
              }
            }}
          />
          <div>
            <div>
              Week{' '}
              {getWeek(addWeeks(firstWorkingMonday, weeksFromNow), {
                weekStartsOn: 1,
              })}
            </div>
            <div>
              {`${format(
                addWeeks(firstWorkingMonday, weeksFromNow),
                DATE_FORMAT_STRING
              )} -
              ${format(
                addDays(addWeeks(firstWorkingMonday, weeksFromNow), 4),
                DATE_FORMAT_STRING
              )}`}
            </div>
          </div>
          <FaChevronRight
            size={24}
            color={weeksFromNow <= MAX_WEEKS_FROM_NOW ? '#000' : '#aaa'}
            onClick={() => {
              if (weeksFromNow <= MAX_WEEKS_FROM_NOW) {
                setWeeksFromNow(weeksFromNow + 1)
              }
            }}
          />


      </S.FormHead>
    
      <S.TimeRow>
        {DAYS_OF_WEEK.map((day, index) => (
          <S.DayOfAWeek key={index}>{day}</S.DayOfAWeek>
        ))}
      </S.TimeRow>
      <ChooseTime items={items} toggle={weeksFromNow} />
    </div>
  )
}

export default BookingCalendar
