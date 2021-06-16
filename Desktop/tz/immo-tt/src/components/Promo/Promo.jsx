import React from 'react'
import styles from './Promo.module.css'
import global from '../../App.module.css'

import { data } from '../../data'
import yellowCheck from '../../assets/yellow-check.png'
import darkCheck from '../../assets/dark-check.png'


const Promo = ({ children }) => {
    let { lightPromo, darkPromo } = data.promos

    return (
        <div className={styles.promosWrapper}>
            <div className={global.container}>

                <div className={styles.blocksWrapper}>

                    <div className={styles.lightPromo}>
                        <div className={`${styles.title} ${styles.bgYellow}`}>
                            {lightPromo.title}
                        </div>

                        <ul className={styles.list}>
                            {
                                lightPromo.list.map((item, index, arr) => (

                                    <li className={styles.listItem} key={index}>
                                        <img src={yellowCheck} alt="check-mark"/>
                                        {
                                            index === arr.length - 1 ?
                                                <div className={styles.text}>{item} <span>*</span></div> :
                                                <div className={styles.text}>{item}</div>
                                        }

                                    </li>
                                ))
                            }
                            {children}
                        </ul>

                    </div>


                    <div className={styles.darkPromo}>
                        <div className={`${styles.title} ${styles.bgBlack}`}>
                            {darkPromo.title}
                        </div>

                        <ul className={styles.list}>
                            {
                                darkPromo.list.map((item, index) => (

                                    <li className={styles.listItem} key={index}>
                                        <img src={darkCheck} alt="check-mark"/>
                                        <div className={styles.text}>{item}</div>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Promo