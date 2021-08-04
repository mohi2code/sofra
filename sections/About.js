import Container from '../components/Container'

import { PrimaryButton } from '../components/Button'
import styles from './About.module.css'

export default function About() {
    return (
        <Container id={styles.about}>
            <div className={styles.image}></div>
            <div className={styles.text}>
                <h3>About</h3>
                <h1>Who are we ?</h1>
                <p>We Believe the key to our success is through our customers thats why quality and satisfaction is our daily strive; looking forward to have you as our guest.</p>
                <strong><p>established since 1970</p></strong>
                <PrimaryButton>Learn more</PrimaryButton>
            </div>
        </Container>
    )
}