// import Image from 'next/image'
import Head from "next/head";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.css";
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ACOMO</title>
      </Head>
      <Navbar />
      <Carousel />
      <Main />
      <Footer />
    </div>
  );
}
