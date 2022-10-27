// import Head from 'next/head'
// import Image from 'next/image'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import Main from '../Components/Main'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Navbar/>
    <Carousel/>
    <Main/>
    <Footer/>
    </div>
  )
}
