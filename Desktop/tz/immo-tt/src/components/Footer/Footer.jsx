import React, { useRef } from 'react'
import styles from './Footer.module.css'
import global from '../../App.module.css'

import peach from '../../assets/peach.png'

import { data } from '../../data'

const Footer = () => {

    let { copyright, phones, mail } = data.footer

    const inputRef = useRef(null)

    const handleClick = (e) => {
        inputRef.current.focus()
    }

    return (
        <footer className={styles.footer}>
            <div className={global.container}>
                <div className={styles.wrapper}>

                    <div className={styles.footerLeft}>

                        <div className={styles.copyright}>
                            <div>{copyright}</div>
                            <div>Золотое сечение</div>
                        </div>

                        <div className={styles.phones}>
                            {
                                phones.map((item, index) => (
                                    <a key={index} href={`tel:${item.phone}`}>{item.formattedPhone}</a>
                                ))
                            }
                            <div>Заказать звонок</div>
                        </div>

                        <div className={styles.mail}>
                            <a href={`mailto:${mail}`}>{mail}</a>
                        </div>

                    </div>

                    <div className={styles.menu}>
                        <div className={styles.menuLeft}>
                            <ul>
                                <li><a href="/#">О нас</a></li>
                                <li><a href="/#">Услуги</a></li>
                                <li><a href="/#">Готовые проекты</a></li>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li><a href="/#">Продукция</a></li>
                                <li><a href="/#">Участки</a></li>
                                <li><a href="/#">Контакты</a></li>
                            </ul>
                        </div>

                    </div>


                    <div className={styles.footerRight}>

                        <div className={styles.socials}>
                            <div>Мы в соц сетях</div>
                            <div>
                                <a className={styles.socialsLink} href="/#"><i className="fab fa-vk"></i></a>
                                <a className={styles.socialsLink} href="/#"><i className="fab fa-facebook-f"></i></a>
                            </div>
                        </div>

                        <div className={styles.inputField}>
                            <button
                                onClick={handleClick}
                                type="button"
                            >
                                <i className="fas fa-search"></i>
                            </button>

                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Поиск по сайту"
                            />
                        </div>

                        <div className={styles.authors}>
                            <span>Сделано в студии</span>
                            <a href="/#"><img src={peach} alt="logo"/></a>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer