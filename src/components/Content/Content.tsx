import React from 'react'
import s from './Content.module.scss'
import redBallSmall from '../../assets/img/red-ball-small.svg'
import dashLine from '../../assets/img/dash-line.svg'
import redLight from '../../assets/img/red-light.svg'

export const Content = () => {
  return (
    <div className={s.main}>
      <div className={s.container}>
        <div className={s.main__wrapper}>
          <div className={s.main__slogan}>
            <h1>
              Зарабатывайте больше <span>с WELBEX</span>
            </h1>
            <p>Развиваем и контролируем продажи за вас</p>
            <img className={s.main__redLight} src={redLight} alt="red light" />
          </div>
          <div className={s.main__advice}>
            <h3 className={s.main__title}>
              Вместе с <span>бесплатной </span>
              <span>консультацией </span>
              мы дарим:
            </h3>
            <div className={s.main__layout}>
              <div className={s.main__widgets}>
                <h3>Виджеты</h3>
                <p>30 готовых решений</p>
              </div>
              <div className={s.main__widgets}>
                <h3>Dashboard</h3>
                <p>с показателями вашего бизнеса</p>
              </div>
              <div className={s.main__widgets}>
                <h3>Skype Аудит</h3>
                <p>отдела продаж и CRM системы</p>
              </div>
              <div className={s.main__widgets}>
                <h3>35 дней</h3>
                <p>использования CRM</p>
              </div>
            </div>
            <div className={s.main__layoutMobile}>
              <div>
                <img src={dashLine} alt="dash" className={s.main__line}/>
                <span>Skype аудит</span>
              </div>
              <div>
                <img src={dashLine} alt="dash" className={s.main__line}/>
                <span>30 виджетов</span>
              </div>
              <div>
                <img src={dashLine} alt="dash" className={s.main__line}/>
                <span>Dashboard</span>
              </div>
              <div>
                <img src={dashLine} alt="dash" className={s.main__line}/>
                <span>Месяц аmoCRM</span>
              </div>
            </div>
            <button className={s.main__button}>Получить консультацию</button>
            <img className={s.main__redBall} src={redBallSmall} alt="red ball small"/>
          </div>
        </div>
      </div>
    </div>
  )
}
