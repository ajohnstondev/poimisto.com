import React, { useState } from 'react'
import {
  format,
  getWeek,
  startOfWeek,
  isSaturday,
  isSunday,
  addDays,
} from 'date-fns'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import * as S from './choose-meeting-time-form'
import { addWeeks } from 'date-fns/esm'

const START_HOUR = 8
const END_HOUR = 17 // excluding
const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const DATE_FORMAT_STRING = 'dd.MM.yyyy'
const MAX_WEEKS_FROM_NOW = 4 // including

type Props = {
  setDate: (date: InstanceType<typeof Date>) => void
}

const ChooseMeetingTimeForm: React.FC<Props> = ({ setDate }) => {
  const [weeksFromNow, setWeeksFromNow] = useState(0)
  const now = new Date()

  let firstWorkingMonday: InstanceType<typeof Date>

  if (isSaturday(now)) {
    firstWorkingMonday = addDays(now, 2)
  } else if (isSunday(now)) {
    firstWorkingMonday = addDays(now, 1)
  } else {
    firstWorkingMonday = startOfWeek(now, { weekStartsOn: 1 })
  }

  return (
    <S.ChooseMeetingTimeForm>
      <S.ChooseWeek>
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
      </S.ChooseWeek>
      <S.ChooseTime>
        <S.TimeRow>
          {DAYS_OF_WEEK.map((day, index) => (
            <S.DayOfAWeek key={index}>{day}</S.DayOfAWeek>
          ))}
        </S.TimeRow>
        {new Array(END_HOUR - START_HOUR).fill(0).map((_, index) => (
          <S.TimeRow key={index}>
            {DAYS_OF_WEEK.map((_, key) => (
              <S.TimeCell
                available={true}
                onClick={() => {
                  const date = new Date(
                    addDays(
                      addWeeks(firstWorkingMonday, weeksFromNow),
                      key
                    ).setHours(START_HOUR + index, 0, 0, 0)
                  )
                  setDate(date)
                }}
                key={key}
              >
                {`${Math.floor((START_HOUR + index) / 10)}${
                  (START_HOUR + index) % 10
                }:00`}
              </S.TimeCell>
            ))}
          </S.TimeRow>
        ))}
      </S.ChooseTime>
    </S.ChooseMeetingTimeForm>
  )
}

export default ChooseMeetingTimeForm
