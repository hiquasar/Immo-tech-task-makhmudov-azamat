import React from 'react'
import styles from './Header.module.css'
import global from '../../App.module.css'

import { data } from '../../data'

import logo from '../../assets/logo.png'

const Header = () => {

    let { phone, formattedPhone, time } = data.header

    return (
        <header>
            <div className={styles.headerTopWrapper}>
                <div className={global.container}>

                    <div className={styles.headerTop}>

                        <div className={styles.logo}>
                            <img src={logo} alt="logo"/>
                        </div>

                        <div className={styles.contact}>
                            <a className={styles.contactPhone} href={`tel:${phone}`}>{formattedPhone}</a>
                            <div className={styles.contactTime}>до {time}</div>
                            <button className={global.btn}>Бесплатная консультация</button>
                        </div>

                        <div className={styles.headerBtn}>
                            <a className={styles.headerBtnLink} href="/#">Мой Заказ</a>
                        </div>
                    </div>

                </div>
            </div>

            <div className={global.container}>
                <nav className={styles.headerNav}>
                    <ul className={styles.menu}>
                        <li className={styles.menuItem}><a href="/#">Проекты</a></li>
                        <li className={styles.menuItem}><a href="/#">Услуги</a></li>
                        <li className={styles.menuItem}><a href="/#">Галерея</a></li>
                        <li className={styles.menuItem}><a href="/#">Контакты</a></li>
                        <li className={styles.menuItem}><a href="/#">О нас</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header