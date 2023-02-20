import KiplepayLogo from './assets/kiplepay.png'
import ReactLogo from './assets/react-logo.png'
import GolangLogo from './assets/golang-logo.png'
import './index.scss'

export const Image = ({ src, style, className }) => {
  return (
    <div style={style} className={className}>
      <img className="generic-image" src={src} alt="logo"/>
    </div>
  )
}

export {
  KiplepayLogo,
  ReactLogo,
  GolangLogo
}