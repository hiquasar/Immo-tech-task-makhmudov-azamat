import React from 'react'
import styles from './Breadcrumbs.module.css'
import global from '../../App.module.css'

const Breadcrumbs = () => {


    return (
        <div className={styles.wrapper}>
            <div className={global.container}>

                <nav className={styles.menu}>
                    <ul className={styles.navigation}>

                        <li className={styles.navigationItem}>
                            <a className={styles.navigationLink} href="/#">Золотое сечение</a>
                        </li>

                        <li className={styles.navigationItem}>
                            <i className="fas fa-chevron-right"></i>
                        </li>

                        <li className={styles.navigationItem}>
                            <a className={styles.navigationLink} href="/#">Акции</a>
                        </li>

                    </ul>
                </nav>

                <h2 className={styles.mainHeaderTitle}>
                    Индивидуальный проект дома бесплатно
                </h2>
            </div>
        </div>
    )
}

export default Breadcrumbs