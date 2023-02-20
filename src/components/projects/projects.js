import './projects.scss'
import React, { useState, useLayoutEffect } from 'react'
import { Internship } from './internship'


export const Projects = () => {
  const [ scrollY, setScrollY ] = useState(0)
  useLayoutEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="div">
      {/* <div className="projects-title">
        My Projects
      </div> */}
      <Internship scrollY={scrollY}/>
    </div>
  )
}