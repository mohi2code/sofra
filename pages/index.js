import Head from 'next/head'
import Image from 'next/image'
import Hero from '../sections/Hero'

import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Welcome to Sofra</title>
                <meta name="description" content="NextJs restaurant template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main id={styles.main} className="container">
                <Hero/>
                <h1>Test</h1>
            </main>
        </div>
    )
}