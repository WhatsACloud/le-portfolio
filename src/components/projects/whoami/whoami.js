import React, { useState, useEffect } from 'react'
import { useSpring, animated, useSpringRef, config } from 'react-spring'
import { Slide, SlideAxisEnum } from '../../animated/slide'
import styles from './whoami.module.scss'

const Animate = ({ on }) => {
  return (
    <></>
  )
}

class Timings {
  constructor () {}
  current = 0
  // timings = {}
  Next = (offset) => {
    this.current += offset
    return this.current
  }
  // Is = (key) => {
  //   timings[key] = 0
  //   return this
  // }
  // After = () => {
  //   return this
  // }
}

const timings = new Timings()

const Hi = () => {
  const props = useSpring({
    config: {
    },
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: timings.Next(1000),
  })
  return (
    <animated.div style={props}>
      <div className={styles.title} style={{ fontSize: 45 }}>Hi.</div>
    </animated.div>
  )
}

// marginTop in rem
const NextInTitle = ({ delay, children }) => {
  const [ startNext, setStartNext ] = useState(false)
  const props1 = useSpring({
    delay: delay,
    from: { opacity: 0, marginTop: 100 },
    to: { opacity: 1, marginTop: 0 },
  })
  return (
    <div style={{ height: '3em' }}>
      <animated.div className={styles.title} style={{ position: "absolute", ...props1 }}>{children}</animated.div>
    </div>
  )
}

const Entrance = ({ onFinish }) => {
  const { hiOpacity } = useSpring({
    delay: timings.Next(0),
    from: { hiOpacity: 0 },
    to: { hiOpacity: 1 },
  })
  const { hiFontSize } = useSpring({
    delay: timings.Next(500),
    from: { hiFontSize: 90 },
    to: { hiFontSize: 40 },
  })
  const wrapperProps = useSpring({
    delay: 2000,
    from: { opacity: 1, marginTop: 0 },
    to: { opacity: 0, marginTop: -100 },
    onRest: onFinish,
    // from: { marginTop: 0 },
    // to: { marginTop: -100 }
  })
  return (
    <animated.div className={styles.titlesWrapper} style={wrapperProps}>
      <div className={styles.titles}>
        <animated.div style={{ opacity: hiOpacity, fontSize: hiFontSize }}>Hi.</animated.div>
        <NextInTitle delay={timings.Next(0)}>I'm</NextInTitle>
        <NextInTitle marginTop={1} delay={timings.Next(200)}>James.</NextInTitle>
      </div>
    </animated.div>
  )
}

export const Whoami = ({ scrollY, onFinish }) => {
  return (
    <>
      <Entrance onFinish={onFinish}/>
    </>
  )
}