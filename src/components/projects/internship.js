import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { useSpring, animated } from '@react-spring/web'
import { Slide, SlideAxisEnum } from '../animated/slide'
import { Image, ReactLogo, KiplepayLogo, GolangLogo } from '../../images'
import './projects.scss'

      // <Parallax ref={parallax} pages={3}>
      //   <ParallaxLayer
      //       offset={0}
      //       speed={0}
      //       factor={3}
      //       // style={{
      //       //   backgroundImage: url('stars', true),
      //       //   backgroundSize: 'cover',
      //       // }}
      //     />
      //   <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
      //     {/* <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} /> */}
      //   </ParallaxLayer>
      // </Parallax>

const TimelineCircleSvg = ({ x, y, r, strokeWidth, fill="rgba(0, 0, 0, 0)" }) => {
  return (
    <circle stroke="white" strokeWidth={strokeWidth} fill={fill} cx={x} cy={y} r={r} />
  )
}

const TimelineLineSvg = ({ x, y, width, height }) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill="rgb(255, 255, 255)"
    />
  )
}

const timelineWidth = 500
const circleRadius = 7.5 

const TimelineSvg = ({ x }) => {
  return (
    <div className="timeline-line">
      <svg width={timelineWidth} height="100">
          <TimelineCircleSvg x={20} y={50} strokeWidth={5} r={circleRadius}/>
          <TimelineLineSvg x={30} y={47.5} height={5} width={timelineWidth - 30 - 30}/>
          <TimelineCircleSvg x={480} y={50} strokeWidth={5} r={circleRadius}/>
          <TimelineCircleSvg
            x={x}
            y={50}
            fill="rgb(255, 255, 255)"
            r={circleRadius}
          />
      </svg>
    </div>
  )
}

const Timeline = () => {
  const x = 50
  return (
    <div className="timeline">
      <TimelineSvg x={x}/>
      <DateCarousel xCenter={x} y={0}/>
    </div>
  )
}

const Letter = ({ value }) => {
  return (
    <div className="letter-carousel">
      {value}
    </div>
  )
}

// const LetterCarousel = ({ currentValue }) => {
const LetterCarousel = () => {
  const [ currentValue, setCurrentValue ] = useState("5")
  const [ prevValue, setPrevValue ] = useState("4")
  const [ bufferValue, setBufferValue ] = useState("")
  const [ toggle, setToggle ] = useState(false)
  const props = useSpring({
    loop: true,
    config: {
      duration: 100,
    },
    from: { marginTop: "0vw" },
    to: { marginTop: "-10.8vw" },
    onRest: () => {
      switchVals()
    }
  })
  const switchVals = () => {
    if (currentValue === "5") {
      setCurrentValue("4")
      setPrevValue("5")
      return
    }
    setCurrentValue("5")
    setPrevValue("4")
  }
  // useEffect(() => {
  //   setPrevValue(bufferValue)
  //   setBufferValue(currentValue)
  // }, [ currentValue ])
  return (
    <div className="letter-carousel-outer">
      {/* <animated.div style={{ marginTop: `${props.marginTop}vw` }} className="letter-carousel-inner"> */}
      <animated.div style={props} className="letter-carousel-inner">
        <Letter value={currentValue} top={true}/>
        <Letter value={prevValue} top={false}/>
      </animated.div>
    </div>
  )
}

const DateCarousel = ({ show, xCenter, y }) => {
  return (
    <>
      <div style={{ marginLeft: xCenter/2 }} className="date-carousel">
        <div className="triangle-up"></div>
        {/* <LetterCarousel currentValue={"5"}/>
        <LetterCarousel currentValue={"4"}/> */}
      </div>
    </>
  )
}

// export const Internship = () => {
export const NotInternship = () => {
  const alignCenter = { display: 'flex', alignItems: 'flex-start' }
  const parallax = useRef(null)
  return (
    <>
      <Parallax pages={5}>
        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="sticky">
            Internship at Kiplepay
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGMIttEjf8B1rP9xaWUviUNJBuGjpTCc-7GpRW5Ue&s"
              width="40%"
              height="50%"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, alignItems: 'flex-end', justifyContent: "center" }}>
          <Timeline/>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="card parallax">
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="card sticky">
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export const Internship = ({ scrollY }) => {
  return (
    <div style={{ marginTop: 800 }}>
      <Slide on={scrollY > 500} slideAxis={SlideAxisEnum.Vertical} slideAmt={100}>
        <div className="title-center">Internship at kiplepay</div>
      </Slide>
      <Slide on={scrollY > 510} slideAxis={SlideAxisEnum.Vertical} slideAmt={-100}>
        <div className="date">October 11th - 31st December 2022</div>
      </Slide>
      <div className="main-text-container">
        <Slide delay={500} on={scrollY > 550} slideAxis={SlideAxisEnum.Horizontal} slideAmt={100}>
          <div className="main-text">
            Worked remotely at Malaysian Fintech company Kiplepay as a full stack developer intern for three months.
          </div>
        </Slide>
        <div className="kiplepay-image-container">
          <Slide on={scrollY > 500} slideAxis={SlideAxisEnum.Horizontal} slideAmt={-100}>
            <Image src={KiplepayLogo} className="kiplepay-image"/>
          </Slide>
        </div>
      </div>
      <Slide on={scrollY > 600} slideAxis={SlideAxisEnum.Horizontal} slideAmt={100}>
        <div className="tech-info-div">
          <div className="tech-info-title">
            Technologies used
          </div>
          <div className="tech-line">
            <Image src={ReactLogo} style={{ width: "5vw" }}/>
            React JS (frontend library)
          </div>
          <div className="tech-line">
            <Image src={GolangLogo} style={{ width: "5vw" }}/>
            Iris go backend framework
            <br/>
            GORM (golang ORM for interacting with SQL database)
          </div>
        </div>
      </Slide>
      <div className="texts-container">
        <Slide on={scrollY > 850} slideAxis={SlideAxisEnum.Horizontal} slideAmt={100}>
          <div className="title-center">
            What I did there
          </div>
        </Slide>
        <Slide on={scrollY > 950} slideAxis={SlideAxisEnum.Horizontal} slideAmt={-100}>
          <div className="boxes">
            <div className="box" style={{ marginTop: 0 }}>
              Added operation logs feature to the Kiplepay website which logged the actions of users under the end user (admin) on the website, which would be used by the admin for monitoring purposes. Included adding backend code to log and record API calls from the frontend in the database as well as frontend code to handle the data received from the server.
            </div>
            <div className="box">
              Helped to fix visual bugs and add UI features to an E-wallet microsite integrated with the maxis hotlink app. The app was developed alongside Maxis, Malaysia’s main and oldest communications service provider. react JS was still used as the HTML and CSS was rendered in-app.
            </div>
          </div>
        </Slide>
      </div>
      <div className="texts-container" style={{ marginLeft: 100 }}>
        <Slide on={scrollY > 1450} slideAxis={SlideAxisEnum.Horizontal} slideAmt={100}>
          <div className="boxes">
            <div className="box" style={{ marginTop: 0 }}>
              When I realised that the language the company used for their backend servers was Golang, I had to adapt quickly, having had no experience in the language beforehand. Despite this setback, I pressed on and learnt the language quickly. By the end of the internship, Golang became a new tool under my belt that I could use.
            </div>
            <div className="box">
              This internship was also the first time I worked with other team members on the same codebase. I learnt the development flow of a software production team and had a better grasp of how to use Git, the team’s platform for hosting their repositories.
            </div>
          </div>
        </Slide>
        <Slide on={scrollY > 1250} slideAxis={SlideAxisEnum.Horizontal} slideAmt={-100}>
          <div className="title-center">
            Achievements
          </div>
        </Slide>
      </div>
      <div style={{ marginTop: 1000 }}>
      end
      </div>
    </div>
  )
}