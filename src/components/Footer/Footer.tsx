import React from 'react'
import s from './Footer.module.scss'
import telegramIcon from '../../assets/img/telegram-icon.svg'
import viberIcon from '../../assets/img/viber-icon.svg'
import whatsappIcon from '../../assets/img/whatsapp-icon.svg'

export const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.footer}>
        <div className={s.footer__wrapper}>
          <div className={s.footer__company}>
            <p className={s.footer__title}>О компании</p>
            <div className={s.footer__companyItems}>
              <a href="/">Партнёрская программа</a>
              <a href="/">Вакансии</a>
            </div>
          </div>
          <div className={s.footer__menu}>
            <p className={s.footer__title}>Меню</p>
            <div className={s.footer__menuWrapper}>
              <div className={s.footer__menuLeft}>
                <a href="/">Расчёт стоимости</a>
                <a href="/">Услуги</a>
                <a href="/">Виджеты</a>
                <a href="/">Интеграции</a>
                <a href="/">Наши клиенты</a>
              </div>
              <div className={s.footer__menuRight}>
                <a href="/"> Благодарность клиентов</a>
                <a href="/">Кейсы</a>
                <a href="/">Благодарственные письма</a>
                <a href="/">Сертификаты</a>
                <a href="/">Блог на Youtube</a>
                <a href="/">Вопрос / Ответ</a>
              </div>
            </div>
          </div>
          <div className={s.footer__contacts}>
            <p className={s.footer__title}>Контакты</p>
            <div className={s.footer__contactsWrapper}>
              <a className={s.footer__contactsViber} href="tel:+75555555555">
                +7 555 555-55-55
              </a>
              <div className={s.footer__icons}>
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
              <a href="/">
                Москва, Путевой проезд 3с1, к 902
              </a>
            </div>
          </div>
        </div>
        <p className={s.footer__regulations}>
          ©WELBEX 2022. Все права защищены.
          <br />
          <a href="/">Политика конфиденциальности</a>
        </p>
      </div>
    </div>
  )
}