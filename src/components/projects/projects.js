import './projects.scss'
import React, { useState, useLayoutEffect } from 'react'
import { Internship } from './internship'
import { Meltingpoint } from './meltingpoint'
import { Whoami } from './whoami'
import { Arch } from './arch'

export const Projects = () => {
  const [ canScroll, setCanScroll ] = useState(false)
  const [ scrollY, setScrollY ] = useState(0)
  useLayoutEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])
  return (
    <div style={{ overflow: "hidden" }} className="stuff-container">
      {/* <div className="projects-title">
        My Projects
      </div> */}
      {/* <Whoami scrollY={scrollY} onFinish={() => setCanScroll(true)}/> */}
      {/* <Internship scrollY={scrollY}/> */}
      {/* <Meltingpoint/> */}
      <Arch/>
      <div style={{ marginTop: 3000 }}>
        end
      </div>
    </div>
  )
}