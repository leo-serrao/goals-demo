import style from './Header.module.css'
import flags from '../assets/flags.png'


export function Header() {
  return (
    <div className={style.header}>
      <img src={flags} alt="" width='104px'/>
      <h1><span>Go</span>als</h1>
    </div>
  )
}
