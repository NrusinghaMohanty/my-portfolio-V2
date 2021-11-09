import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about/About'
import Namesection from '../components/name-section/Namesection'
import ProjectSection from '../components/projectSection/ProjectSection'
import Technology from '../components/technology/Technology'
import Default from '../Layout/Default'
import styles from '../styles/Home.module.css'

export default function Home() {
   return (
      <>
         <Default>
            <Namesection />
            <About />
            <Technology />
            <ProjectSection />
         </Default>
      </>
   )
}
