import React from 'react'
import styles from './Cover.module.css'
import global from '../../App.module.css'

import { data } from '../../data'

import image from '../../assets/image.jpg'


const Cover = () => {

    let { text } = data.cover

    return (
        <div className={styles.wrapper}>
            <div className={global.container}>
                <div className={styles.imageWrapper}>
                    <img className={styles.image} src={image} alt="house" />
                    <div className={styles.text}>
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover

