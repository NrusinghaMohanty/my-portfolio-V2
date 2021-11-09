import React from 'react'
import styles from "./projectSection.module.css"
const projectSection = () => {
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
                    <div className={styles.projectDetails}>
                        <p>Currently I am working on videolibrary. It is built using React, HTML and CSS</p>
                        <button>Live Demo</button>
                        <a href="https://github.com/NrusinghaMohanty/Video-library" target="_blank"><button>Source code</button></a>
                    </div>
                    <div className={styles.projectImage}>
                        <img src="https://res.cloudinary.com/djc1o48j7/image/upload/v1636447030/portfolio-image/video-library_qwpnlo.jpg" alt="error not found" />
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
            </div>
        </>
    )
}

export default projectSection
