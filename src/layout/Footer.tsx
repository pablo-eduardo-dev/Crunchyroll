import {
    FaYoutube,
    FaFacebook,
    FaSquareXTwitter,
    FaInstagram,
    FaTiktok,
    FaCrown

} from 'react-icons/fa6'

import style from './Footer.module.css'
import pictureSony from '../assets/img/sony_pictures_logo.png'

const Footer = () => {
    return (
        <footer>
            <nav className={style.footer}>
                <ul className="navegação">
                    <h3>Navegação</h3>
                    <li>Séries Populares</li>
                    <li>Séries em Simulcast</li>
                    <li>Calendário de Lançamentos</li>
                    <li>Notícias</li>
                    <li>Jogos</li>
                </ul>
                <ul className="Contatos">
                    <h3>Contate-nos</h3>
                    <li><FaYoutube /> YouTube</li>
                    <li><FaFacebook /> Facebook</li>
                    <li><FaSquareXTwitter/> Twitter</li>
                    <li><FaInstagram /> Instagram</li>
                    <li><FaTiktok /> TikTok</li>
                </ul>
                <ul className="crunchyroll">
                    <h3>Crunchyroll</h3>
                    <li className={style.FreeTrial}> <FaCrown /> Comece um Teste Gratuito</li>
                    <li>Sobre</li>
                    <li>Ajuda/FAQ</li>
                    <li>Termos de Uso</li>
                    <li>Politica de Privacidade</li>
                    <li>Ferramenta de Consentimento de Cookies</li>
                    <li>Solicitações de Impresa</li>
                    <li>Baixe o App</li>
                    <li>Resgatar Código</li>
                    <li>Vagas</li>
                </ul>
                <ul className="conta">
                    <h3>Conta</h3>
                    <li>Criar Conta</li>
                    <li>Login</li>
                </ul>
            </nav>

            <hr className={style.Divisorline}/>

            <div className={style.imgSonny}>
                <img src={pictureSony} alt="Picture Sony Logo" />
                <h4>© Crunchyroll, LLC</h4>
            </div>
        </footer>
    )
}

export default Footer