import { useRouter } from 'next/router'
import Container from '../components/Container'
import NavbarSection from './NavbarSection'
import { PrimaryButton } from '../components/Button'
import styles from './Hero.module.css'

export default function Hero() {

    const router = useRouter()

    return (
        <Container id={styles.hero}>
            <NavbarSection />

            <div className={styles.showcase}>
                <div className={styles.text}>
                    <h1>Where taste meets the myth</h1>
                    <p>We are looking forward to having you as our guest</p>
                    <PrimaryButton onClick={() => router.push("/menu")}>View menu</PrimaryButton>
                </div>
                <div className={styles.images}>
                    <div className={styles.image1}></div>
                    <div className={styles.image2}></div>
                </div>
            </div>
        </Container>
    )
}