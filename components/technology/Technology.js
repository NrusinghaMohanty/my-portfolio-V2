import React from 'react'
import styles from "./technology.module.css"

const Technology = () => {
    return (
        <>
            <div className={styles.techContainer}>
                <h2>Technology I know</h2>
            <div className={styles.techImage}>
                <img src="https://img.icons8.com/office/50/000000/react.png"/>
                <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
                <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
                <img src="https://img.icons8.com/color/48/000000/git.png"/>
                <img src="https://img.icons8.com/color/48/000000/linux.png"/>
                </div>
            </div>
        </>
    )
}

export default Technology
