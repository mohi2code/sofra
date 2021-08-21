import Container from '../components/Container'
import Banner from '../sections/Banner'
import NavbarSection from '../sections/NavbarSection'
import Footer from '../sections/Footer'
import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { FaEnvelope } from 'react-icons/fa'
import { TextAreaInputLabel, TextInputLabel } from '../components/Input'
import { PrimaryButton } from '../components/Button'

export default function About() {
    return (
        <div id={styles.contact}>
            <Head>
                <title>Welcome to Sofra</title>
                <meta name="description" content="NextJs restaurant template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <NavbarSection />
            </Container>
            <Banner id={styles.banner} background="/restaurant-bg.png" text="Contact Us"/>
            <Container id={styles.form}>
                <div className={styles.subheader}>
                    <h2>Get in touch</h2>
                    <p>Contact us for reservations and inquiries</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.cell}>
                        <HiLocationMarker size={28} />
                        <p>102 Street 2274 Don</p>
                    </div>
                    <div className={styles.cell}>
                        <AiFillPhone size={28} />
                        <p>+01 1234 567</p>
                    </div>
                    <div className={styles.cell}>
                        <FaEnvelope size={28} />
                        <p>info@sofra.com</p>
                    </div>
                </div>
                <form>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <TextInputLabel type="text" label="Name" />
                            <TextInputLabel type="email" label="Email" />
                            <TextInputLabel type="text" label="Phone" />
                        </div>
                        <div className={styles.right}>
                            <TextAreaInputLabel label="Message" rows="6">
                            </TextAreaInputLabel>
                        </div>
                    </div>
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
                <Footer />
            </Container>
        </div>
    )
}
