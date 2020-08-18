import React from 'react'
import { PageProps } from 'gatsby'

import Layout from '@/components/Layout'

import AboutUs from '@/components/AboutUs'
import BookAMeeting from '@/components/BookAMeeting'
import Hero from '@/components/Hero'

import { useSpring, animated } from 'react-spring'

const Home: React.FC<PageProps> = () => {
  /*
    Just a quick test of using react-spring
  */
  const animateFade = useSpring({
    opacity: 1, // hardcoded for now
    from: {
      opacity: 0,
    },
    config: { mass: 5, tension: 120, friction: 80 },
  })
  const animateColor = useSpring({
    color: '#00cb26', // hardcoded for now
    from: {
      color: '#333',
    },
    config: { mass: 5, tension: 30, friction: 80 },
  })

  return (
    <Layout>
      <Hero>
        <animated.span style={animateFade}>
          We <animated.span style={animateColor}>help you to</animated.span>{' '}
          build tech and data capabilities.
        </animated.span>
      </Hero>

      <AboutUs />

      <BookAMeeting />
    </Layout>
  )
}

export default Home
