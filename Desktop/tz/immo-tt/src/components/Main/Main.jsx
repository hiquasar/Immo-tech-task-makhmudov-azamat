import React from 'react'
import styles from './Main.module.css'
import global from '../../App.module.css'

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Cover from '../Cover/Cover'
import Promo from '../Promo/Promo'

import star from '../../assets/star.png'

const Main = () => {

    return (
        <main>
            <div className={global.container}>
                <Breadcrumbs />
                <Cover />
                <Promo>
                    <div className={styles.wrapper}>


                        <div className={styles.promoBtn}>
                            <button className={global.btn}>Получить проект дома бесплатно</button>
                        </div>
                        <div className={styles.promoInfo}>
                            <img src={star} alt="star"/>
                            <div className={styles.text}>
                                Проектируем бесплатно только тем, у кого есть намерение
                                начать строить дом из газобетона в этом сезоне и в Московской области.
                            </div>
                        </div>
                    </div>
                </Promo>
            </div>
        </main>
    )
}

export default Main