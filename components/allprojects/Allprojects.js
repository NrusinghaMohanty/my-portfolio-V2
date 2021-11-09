import React from 'react'
import styles from "./allprojects.module.css"


const Allprojects = () => {
    return (
        <>
            <div className={styles.projectsectionContainer}>
                <h1>Projects:</h1>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <img src="https://res.cloudinary.com/djc1o48j7/image/upload/v1636439978/portfolio-image/e-commerce_glr8r4.jpg" alt="error not found" />
                    </div>
                    <div className={styles.projectDetails}>
                        <p>An Ecommerce Store built using React, HTML and CSS. Using this app you can check the products, add them to cart and wishlist, sort them according to price,etc.
                           <br/> Upcoming features - authentication and checkout section</p>
                        <a href="https://shoppingo.netlify.app/" target="_blank"><button>Live Demo</button></a>
                        <a href="https://github.com/NrusinghaMohanty/E-commerce" target="_blank"><button>Source code</button></a>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <img src="https://res.cloudinary.com/djc1o48j7/image/upload/v1636447030/portfolio-image/video-library_qwpnlo.jpg" alt="error not found" />
                    </div>
                    <div className={styles.projectDetails}>
                        <p>Currently I am working on videolibrary. It is built using React, HTML and CSS</p>
                        <button>Live Demo</button>
                        <a href="https://github.com/NrusinghaMohanty/Video-library" target="_blank"><button>Source code</button></a>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <img src="https://res.cloudinary.com/djc1o48j7/image/upload/v1636440314/portfolio-image/css-library_rgnilq.jpg" alt="error not found" />
                    </div>
                    <div className={styles.projectDetails}>
                        <p>A Component Library built using HTML and CSS. It provides ready to use frontend components like buttons, toast, avatar, alerts, input, card,modals,etc</p>
                        <a href="https://css-wizardry.netlify.app/" target="_blank"><button>Live Demo</button></a>
                        <a href="https://github.com/NrusinghaMohanty/CSS_Wizardry_Component_Library" target="_blank"><button>Source code</button></a>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <img src="https://res.cloudinary.com/djc1o48j7/image/upload/v1636443644/portfolio-image/word-game_sgbknb.jpg" alt="error not found" />
                    </div>
                    <div className={styles.projectDetails}>
                        <p>A word play game.It is a fun project which is made using HTML,CSS and Javascript</p>
                        <a href="https://wordplayy.netlify.app/" target="_blank"><button>Live Demo</button></a>
                        <a href="https://github.com/NrusinghaMohanty/Word_Play" target="_blank"><button>Source code</button></a>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <img src="https://res.cloudinary.com/djc1o48j7/image/upload/v1636443796/portfolio-image/cash-register_oowzem.jpg" alt="error not found" />
                    </div>
                    <div className={styles.projectDetails}>
                        <p>A cash register app used for cash management,made using HTML, CSS and Javascript</p>
                        <a href="https://cashregisterr.netlify.app/" target="_blank"><button>Live Demo</button></a>
                        <a href="https://github.com/NrusinghaMohanty/Cash_Register" target="_blank"><button>Source code</button></a>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <img src="https://res.cloudinary.com/djc1o48j7/image/upload/v1636444019/portfolio-image/birthdaycheck_uozhsh.jpg" alt="error not found" />
                    </div>
                    <div className={styles.projectDetails}>
                        <p>An app to findout whether your birthday is leap year or not and your birthday is prime number or not. It is made using HTML, CSS  and Javascript</p>
                        <a href="https://birthdaynumbercheck.netlify.app/" target="_blank"><button>Live Demo</button></a>
                        <a href="https://github.com/NrusinghaMohanty/Leapyear-primenumberGUI" target="_blank"><button>Source code</button></a>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <img src="https://res.cloudinary.com/djc1o48j7/image/upload/v1636444341/portfolio-image/transalation_lxrndg.jpg" alt="error not found" />
                    </div>
                    <div className={styles.projectDetails}>
                        <p>A translator that converts one language to a different language. It is made using HTML, CSS  and Javascript</p>
                        <a href="https://translationapp.netlify.app/" target="_blank"><button>Live Demo</button></a>
                        <a href="https://github.com/NrusinghaMohanty/Translationapp" target="_blank"><button>Source code</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Allprojects
