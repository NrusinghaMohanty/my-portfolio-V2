import React from 'react'
import styles from "./allprojects.module.css"
import Link from "next/link"
import Image from "next/image"


const Allprojects = () => {

    const myLoader = ({ src, width, quality }) => {
        return `https://res.cloudinary.com/djc1o48j7/image/upload/${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <>
            <div className={styles.projectsectionContainer}>
                <h1>Projects:</h1>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <Image loader={myLoader} src="v1636439978/portfolio-image/e-commerce_glr8r4.jpg" width={590} height={350} alt="error not found" />
                    </div>
                    <div className={styles.projectDetails}>
                        <p>An Ecommerce Store built using React, HTML and CSS. Using this app you can check the products, add them to cart and wishlist, sort them according to price,etc.
                            <br /> Upcoming features - authentication and checkout section</p>
                        <Link href="https://shoppingo.netlify.app/" passHref><button>Live Demo</button></Link>
                        <Link href="https://github.com/NrusinghaMohanty/E-commerce" passHref><button>Source code</button></Link>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <Image loader={myLoader} src="v1636447030/portfolio-image/video-library_qwpnlo.jpg" width={500} height={300} alt="error not found" />                                                
                    </div>
                    <div className={styles.projectDetails}>
                        <p>A Video library built using React, HTML and CSS. Using this app you can see different travel vlogs.</p>
                        <Link href="https://travel-tubee.netlify.app/" passHref><button>Live Demo</button></Link>
                        <Link href="https://github.com/NrusinghaMohanty/shop-tube-frontend" passHref><button>Source code</button></Link>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <Image loader={myLoader} src="v1636440314/portfolio-image/css-library_rgnilq.jpg" width={500} height={300} alt="error not found" />     
                    </div>
                    <div className={styles.projectDetails}>
                        <p>A Component Library built using HTML and CSS. It provides ready to use frontend components like buttons, toast, avatar, alerts, input, card,modals,etc</p>
                        <Link href="https://css-wizardry.netlify.app/"  passHref><button>Live Demo</button></Link>
                        <Link href="https://github.com/NrusinghaMohanty/CSS_Wizardry_Component_Library"  passHref><button>Source code</button></Link>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <Image loader={myLoader} src="v1636443644/portfolio-image/word-game_sgbknb.jpg" width={500} height={300} alt="error not found" />     
                    </div>
                    <div className={styles.projectDetails}>
                        <p>A word play game.It is a fun project which is made using HTML,CSS and Javascript</p>
                        <Link href="https://wordplayy.netlify.app/"  passHref><button>Live Demo</button></Link>
                        <Link href="https://github.com/NrusinghaMohanty/Word_Play" passHref ><button>Source code</button></Link>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <Image loader={myLoader} src="v1636443796/portfolio-image/cash-register_oowzem.jpg" width={500} height={300} alt="error not found" />   
                    </div>
                    <div className={styles.projectDetails}>
                        <p>A cash register app used for cash management,made using HTML, CSS and Javascript</p>
                        <Link href="https://cashregisterr.netlify.app/"  passHref><button>Live Demo</button></Link>
                        <Link href="https://github.com/NrusinghaMohanty/Cash_Register"  passHref><button>Source code</button></Link>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <Image loader={myLoader} src="v1636444019/portfolio-image/birthdaycheck_uozhsh.jpg" width={500} height={300} alt="error not found" /> 
                    </div>
                    <div className={styles.projectDetails}>
                        <p>An app to findout whether your birthday is leap year or not and your birthday is prime number or not. It is made using HTML, CSS  and Javascript</p>
                        <Link href="https://birthdaynumbercheck.netlify.app/"  passHref><button>Live Demo</button></Link>
                        <Link href="https://github.com/NrusinghaMohanty/Leapyear-primenumberGUI" passHref ><button>Source code</button></Link>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <Image loader={myLoader} src="v1636444341/portfolio-image/transalation_lxrndg.jpg" width={500} height={300} alt="error not found" /> 
                    </div>
                    <div className={styles.projectDetails}>
                        <p>A translator that converts one language to a different language. It is made using HTML, CSS  and Javascript</p>
                        <Link href="https://translationapp.netlify.app/" passHref ><button>Live Demo</button></Link>
                        <Link href="https://github.com/NrusinghaMohanty/Translationapp" passHref ><button>Source code</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Allprojects
