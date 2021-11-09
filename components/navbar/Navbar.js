import React from 'react'
import styles from "./Navbar.module.css"
import Link from 'next/link'
import Image from "next/image"
import {FaTwitter,FaLinkedin} from "react-icons/fa"

const Navbar = () => {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <div className={styles.nav}>
            <div className={styles.profile}>
                <Image loader={myLoader} src="https://res.cloudinary.com/djc1o48j7/image/upload/v1636464699/portfolio-image/profilePic_jdmx3x.jpg"  height={300} width={300} className={styles.profilePicture}/>
            </div>
            <div className={styles.socialIcon}>
                <Link href="https://twitter.com/Nrusingha__" passHref>
                    <FaTwitter className={styles.socialIcon}/>
                 </Link>
                <Link href="https://www.linkedin.com/in/nrusingha-mohanty/" passHref>
                    <FaLinkedin className={styles.socialIcon}/> 
                </Link>
            </div>
            <div className={styles.sub}>
                <Link href="/">
                    <button className={styles.navLink}>Home</button>
                </Link>
                <Link href="https://drive.google.com/file/d/1dXSxg8aJOnPuabo0bIWSNO_UTQVF1UyO/view?usp=sharing" className={styles.navlinkbtn} passHref>
                    <button className={styles.navLink}>My cv </button>
                </Link>
                <Link href="/Projects">
                    <button className={styles.navLink}>Projects</button>
                </Link>
                <Link href="https://github.com/NrusinghaMohanty" className={styles.navlinkBtn} passHref>
                    <button className={styles.navLink}>Github</button> 
                </Link>
            </div>
        </div>
    )
}

export default Navbar
