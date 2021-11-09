import React from 'react'
import styles from "./technology.module.css"
import Image from "next/image"
import {FaReact,FaHtml5,FaCss3,FaNodeJs,FaGitSquare,FaLinux} from "react-icons/fa"
import {SiJavascript} from "react-icons/si"

const Technology = () => {
    return (
        <>
            <div className={styles.techContainer}>
                <h2>Technology I know</h2>
            <div className={styles.techImage}>
                <FaHtml5 className={styles.techIconimg}/>
                <FaCss3 className={styles.techIconimg}/>
                <SiJavascript className={styles.techIconimg}/>
                <FaReact className={styles.techIconimg}/>
                <FaNodeJs className={styles.techIconimg}/>
                <FaGitSquare className={styles.techIconimg}/>
                <FaLinux className={styles.techIconimg}/>
            </div>
            </div>
        </>
    )
}

export default Technology
