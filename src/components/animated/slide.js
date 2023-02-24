import React, { useState, useRef } from 'react'
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
const isElementInViewport = (el) => {
  if (!el) return true
  var rect = el.getBoundingClientRect()
  const height = rect.bottom - rect.top
  const threshold = height > 80 ? height : 0
  return (
      rect.top >= -threshold &&
      rect.left >= -threshold &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + threshold &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) + threshold
  );
}


// btw also auto fades in and out
export const Slide = ({ delay, slideAxis, slideAmt, duration, children }) => {
  const ref = useRef(null)
  const axis = getAxisAttr(slideAxis)
  const on = isElementInViewport(ref.current)
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
  const isVertical = slideAxis === SlideAxisEnum.Vertical 
  return (
    // <div style={{ width: "100%", position: "absolute" }}>
    <div ref={ref} style={{ width: "100%" }}>
      <animated.div style={{...props, width: "100%", position: isVertical ? "absolute" : null }}>{children}</animated.div>
      {(
        !isVertical ? null :
        <div style={{ opacity: 0 }}>
          {children}
        </div>
      )}
    </div>
  )
}