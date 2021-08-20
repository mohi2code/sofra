import Head from 'next/head'
import About from '../sections/About'
import EmailList from '../sections/EmailList'
import GallerySection from '../sections/GallerySection'
import ContactSection from '../sections/Contact'
import Footer from '../sections/Footer'
import Hero from '../sections/Hero'
import Menu from '../sections/Menu'

import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Welcome to Sofra</title>
                <meta name="description" content="NextJs restaurant template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main id={styles.main}>
                <Hero />
                <About />
                <EmailList />
                <Menu />
                <GallerySection />
                <ContactSection />
                <Footer />
            </main>
        </div>
    )
}