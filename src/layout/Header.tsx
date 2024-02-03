
import {
  FaCrown,
  FaMagnifyingGlass,
  FaBookmark,
  FaCircleUser
} from 'react-icons/fa6'

import style from './Header.module.css'
import logo from '../assets/logo.svg'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={style.headerContainer}>
      <div className={style.container}>
        <div className={style.rightContent}>
          <div className={style.logo}>
            <Link to='/'><img src={logo} alt="Crunchyroll Logo" /></Link>
          </div>
        </div>
        <div className={style.headerMenu}>
            <ul>
              <li><Link to='/navegar'>Navegar</Link></li>
              <li><Link to='/jogos'>Jogos</Link></li>
              <li><Link to='/noticias'>Notícias</Link></li>
            </ul>
        </div>
        <div className={style.leftContent}>
          <div className={style.plan}>
            <div className={style.premium}>
            <FaCrown id={style.crown} />
            <p className={style.premiumText}>TESTE GRATIS <br /><span>PREMIUM</span></p>
            </div>
            {/* <div className={style.menuIcons}> */}
              <FaMagnifyingGlass />
              <FaBookmark />
              <FaCircleUser />
            {/* </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header