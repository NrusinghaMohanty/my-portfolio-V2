import React from 'react'
import styles from "./Navbar.module.css"
import Link from 'next/link'


const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.profile}>
                <img src="https://pbs.twimg.com/profile_images/1360076219320946695/lm6V1E0S_400x400.jpg" alt="error not found" />
            </div>
            <div className={styles.socialIcon}>
            <a href="https://twitter.com/Nrusingha__" target="_blank"><img src="https://img.icons8.com/color/48/000000/twitter--v2.png"/></a>
            <a href="https://www.linkedin.com/in/nrusingha-mohanty/" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a>
            </div>
            <div className={styles.sub}>
                <Link href="/"><button className={styles.navLink}>Home</button></Link>
                <a href="https://drive.google.com/file/d/1dXSxg8aJOnPuabo0bIWSNO_UTQVF1UyO/view?usp=sharing"  className={styles.navLink} target="_blank">My cv</a>
                <Link href="/Projects"><button className={styles.navLink}>Projects</button></Link>
                <a href="https://github.com/NrusinghaMohanty" className={styles.navlinkBtn} target="_blank"><button className={styles.navLink}>Github</button></a>
            </div>
    </div>
    )
}

export default Navbar
