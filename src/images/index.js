import KiplepayLogo from './assets/kiplepay.png'
import ReactLogo from './assets/react-logo.png'
import GolangLogo from './assets/golang-logo.png'
import ArchRiceImage from './assets/arch-rice.png'
import Easymotion from './assets/easymotion.png'
import Telescope1 from './assets/telescope-1.png'
import Telescope2 from './assets/telescope-2.png'
import Packer from './assets/packer.png'
import styles from './index.module.scss'

export const Image = ({ src, width, style, className }) => {
  return (
    <div style={{ ...style, width }} className={className}>
      <img className={styles.genericImage} src={src} alt="logo"/>
    </div>
  )
}

export {
  KiplepayLogo,
  ReactLogo,
  GolangLogo,
  ArchRiceImage,
  Easymotion,
  Telescope1,
  Telescope2,
  Packer,
}