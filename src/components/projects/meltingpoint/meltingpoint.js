import React, { useEffect, useRef } from 'react'
import { Slide, SlideAxisEnum } from '../../animated/slide'
import { List } from '../../list'

import styles from './meltingpoint.module.scss'
import sharedStyles from '../../scss/index.module.scss'

const programmingDoneList = [
  "A detection system to map a level's different objects to the 2D coordinate system",
  "A calculator of the player's next position on the grid depending on which direction they pressed and the objects in their path",
  "A calculator of timing when each effect was played when the ice cube passed through them",
  "UI",
  "Data saving (of the player's level progress)",
  "Playing sound effects and background music",
]

export const Meltingpoint = () => {
  return (
    <div className={styles.mainOuterDiv} style={{ marginTop: 100 }}>
      <Slide slideAxis={SlideAxisEnum.Vertical} slideAmt={100}>
        <div className={sharedStyles.titleCenter}>Melting Point</div>
      </Slide>
      <Slide slideAxis={SlideAxisEnum.Vertical} slideAmt={-100}>
        <div className={sharedStyles.date}>August 2021 to November 2021</div>
      </Slide>
      <div className={styles.contentWrapperDiv}>
        <Slide slideAxis={SlideAxisEnum.Horizontal} slideAmt={100}>
          <div className={styles.mainText}>
            Used Lua to program a short turn based puzzle game on the platform Roblox. Designed and programmed all of the game mechanics, levels, effects, and UI.
          </div>
        </Slide>
        <Slide slideAxis={SlideAxisEnum.Horizontal} slideAmt={-100}>
          <div style={{ width: "50vw" }} className={styles.mainTextRight}>
            You control an ice cube named Bob who melts every turn. Your goal at each level is to get him into the freezer before he melts to death by sliding him skilfully around the dangers of the level, ranging from random gaps in the bench, angry heat packs, and blistering hot steam from steam generators! Due to the rather horrifying enlarging puddle of himself beneath him, Bob slides one more tile than the last turn with each turn, and also rebounds off most obstacles.
          </div>
        </Slide>
        <Slide slideAxis={SlideAxisEnum.Horizontal} slideAmt={-100}>
          <div style={{ width: "50vw" }} className={styles.mainText}>
            Programming the game included
            <List texts={programmingDoneList}/>
          </div>
        </Slide>
      </div>
    </div>
  )
}