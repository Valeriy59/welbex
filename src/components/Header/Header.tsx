import React from 'react'
import s from './Header.module.scss'
import telegramIcon from '../../assets/img/telegram-icon.svg'
import viberIcon from '../../assets/img/viber-icon.svg'
import whatsappIcon from '../../assets/img/whatsapp-icon.svg'
import welbexLogo from '../../assets/img/welbex-logo.svg'
import purpleLight from '../../assets/img/purple-light.svg'
import purpleBall from '../../assets/img/purple-ball.svg'
import redBall from '../../assets/img/red-ball.svg'

export const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <img src={welbexLogo} alt="Logo: Welbex" className={s.logo} />
        <p className={s.header__description}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        <div className={s.header__navbar}>
          <a href="/" className={s.header__items}>
            Услуги
          </a>
          <a href="/" className={s.header__items}>
            Виджеты
          </a>
          <a href="/" className={s.header__items}>
            Интеграции
          </a>
          <img src={redBall} alt="red ball" className={s.header__redBall} />
          <a href="/" className="header__items">
            Кейсы
          </a>
          <img src={purpleLight} alt="purple light" className={s.header__purpleLight} />
          <img src={purpleBall} alt="purple ball" className={s.header__purpleBall} />
          <a href="/" className={s.header__items}>
            Сертификаты
          </a>
        </div>
        <div className={s.header__contacts}>
          <a href="tel:+75555555555">+7 555 555-55-55</a>
          <a href="/">
            <img src={telegramIcon} alt="Telegram" />
          </a>
          <a href="/">
            <img src={viberIcon} alt="Viber" />
          </a>
          <a href="/">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>
  )
}
