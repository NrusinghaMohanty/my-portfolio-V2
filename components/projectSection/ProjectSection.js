import React from 'react'
import styles from "./projectSection.module.css"
import Link from "next/link"
import Image from "next/image"

const projectSection = () => {

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
                    {/* https://res.cloudinary.com/djc1o48j7/image/upload/v1636439978/portfolio-image/e-commerce_glr8r4.jpg */}
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
                        <p>Currently I am working on videolibrary. It is built using React, HTML and CSS</p>
                        <button>Live Demo</button>
                        <Link href="https://github.com/NrusinghaMohanty/Video-library" passHref><button>Source code</button></Link>
                    </div>
                </div>
                <div className={styles.projectDiv}>
                    <div className={styles.projectImage}>
                        <Image loader={myLoader} src="v1636440314/portfolio-image/css-library_rgnilq.jpg" width={500} height={300} alt="error not found" />     
                    </div>
                    <div className={styles.projectDetails}>
                        <p>A Component Library built using HTML and CSS. It provides ready to use frontend components like buttons, toast, avatar, alerts, input, card,modals,etc</p>
                        <Link href="https://css-wizardry.netlify.app/" passHref><button>Live Demo</button></Link>
                        <Link href="https://github.com/NrusinghaMohanty/CSS_Wizardry_Component_Library" passHref><button>Source code</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default projectSection
