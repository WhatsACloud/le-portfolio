import React, { useEffect, useState } from 'react'
import { Slide, SlideAxisEnum } from '../../animated/slide'
import styles from './arch.module.scss'
import sharedStyles from '../../scss/index.module.scss'
import { Image, ArchRiceImage, Packer, Telescope1, Telescope2, Easymotion } from '../../../images'
import { List } from '../../list'

const texts = [
  "Installing DWM (Dynamic Window Manager)",
  "Installing Dmenu (came with DWM)",
  "Installing ST (Suckless Terminal)",
  "Installing Picom (Jonaburg fork)",
  "Installing Powerline",
  "Installing fonts",
  "Installing chinese fonts",
  "Installing chinese typing support (Ibus)",
  "Installing audio support",
  "Creating keybinds for hardware keys for adjusting volume, brightness, etc.",
  "Installing dwmblocks for viewing system info",
  "Adding keybinds to make life easier",
]

const achievementsTexts = [
  "Became an arch user(btw I use arch)",
  "Became proficient in linux terminal",
]

const TextAndImage = ({ text, image, comment }) => {
  return (
    <div className={styles.textAndImage}>
      {text}
      <Image src={image} width="70vw"/>
      <div className={styles.comment}>{comment}</div>
    </div>
  )
}

export const Arch = () => {
  return (
    <div>
      <Slide slideAxis={SlideAxisEnum.Vertical} slideAmt={100}>
        <div className={sharedStyles.titleCenter}>Arch Linux and Neovim</div>
      </Slide>
      <div className={styles.contentDiv}>
        <div className={styles.firstLine}>
          <Slide slideAxis={SlideAxisEnum.Horizontal} slideAmt={100}>
            <div className={styles.text}>Installed Arch Linux on my personal computer. Arch Linux is a minimal operating system based on Linux with no pre-installed packages or graphical environment.</div>
          </Slide>
          <Slide slideAxis={SlideAxisEnum.Horizontal} slideAmt={-100}>
            <Image src={ArchRiceImage} width="40vw"/>
          </Slide>
        </div>
        <Slide slideAxis={SlideAxisEnum.Horizontal} slideAmt={100}>
          <div className={styles.text} style={{ width: "40vw" }}>
            Post operating system installation activities to set it up as fully fledged OS included
            <List texts={texts}/>
          </div>
        </Slide>
        <Slide slideAxis={SlideAxisEnum.Horizontal} slideAmt={-100}>
          <div className={styles.divRight} style={{ width: "40vw" }}>
            <div className={sharedStyles.title}>
              Achievements
            </div>
            <div className={styles.text} style={{ width: "40vw" }}>
              <List texts={achievementsTexts}/>
            </div>
          </div>
        </Slide>
      <Slide slideAxis={SlideAxisEnum.Vertical} slideAmt={100}>
        <div className={sharedStyles.titleCenter}>Neovim configuration</div>
      </Slide>
      <Slide slideAxis={SlideAxisEnum.Vertical} slideAmt={-100}>
        <div className={styles.text}>Configured Neovim to become a decent code editor</div>
      </Slide>
      <Slide slideAxis={SlideAxisEnum.Vertical} slideAmt={100}>
        <div className={styles.divCenter} style={{ width: "80vw" }}>
          <div className={styles.text} style={{ width: "80vw" }}>
            Includes
            <TextAndImage image={Packer} comment="" text="Packer.nvim to manage neovim plugins"/>
            <TextAndImage image={Telescope2} comment="" text="Text and file finding in a directory with telescope.nvim"/>
            <TextAndImage image={Telescope1} comment="File explorer on the left." text="A file explorer with nvim-tree"/>
            <TextAndImage image={Easymotion} comment="Above is easymotion in use." text="Custom keybinds and plugins like easymotion and nerdcommenter to help with editing"/>
          </div>
        </div>
      </Slide>

      </div>
    </div>
  )
}