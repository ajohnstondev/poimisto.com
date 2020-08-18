import React, { useEffect } from 'react'
import { useTrail, animated } from 'react-spring'

import * as S from './choose-time'

type Props = {
  items: React.ReactElement[]
  toggle: any
}

const ChooseTime: React.FC<Props> = ({ items, toggle }) => {
  const [trail, set] = useTrail(items.length, () => ({ opacity: 1 as number }))
  useEffect(() => {
    set({ opacity: 0, config: { duration: 0 } })
    setTimeout(() => {
      set({
        opacity: 1,
        config: { duration: 250 },
      })
    })

    /*
     * That's intentional!
     */
    // return () => {}
  }, [toggle])

  return (
    <S.ChooseTime>
      {trail.map((props, index) => (
        <animated.div style={{ ...props }} key={index}>
          {items[index]}
        </animated.div>
      ))}
    </S.ChooseTime>
  )
}

export default ChooseTime
