import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

export class SlideAxisEnum {
  static Vertical = Symbol("Vertical")
  static Horizontal = Symbol("Horizontal")
}

const getAxisAttr = (slideAxis) => {
  switch (slideAxis) {
    case SlideAxisEnum.Vertical:
      return "marginTop"
    case SlideAxisEnum.Horizontal:
      return "marginLeft"
  }
}

// btw also auto fades in and out
export const Slide = ({ on, delay, slideAxis, slideAmt, duration, children }) => {
  const axis = getAxisAttr(slideAxis)
  const props = useSpring({
    config: {
      duration: duration,
    },
    from: {
      opacity: 0,
      [axis]: -slideAmt,
    },
    delay: delay,
    opacity: on ? 1 : 0,
    [axis]: on ? 0 : -slideAmt,
  })
  return (
    // <div style={{ width: "100%", position: "absolute" }}>
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", position: slideAxis === SlideAxisEnum.Vertical ? "absolute" : null }}>
        <animated.div style={props}>{children}</animated.div>
      </div>
    </div>
  )
}