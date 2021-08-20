import { PrimaryButton } from '../components/Button'
import Container from '../components/Container'
import { TextInput } from '../components/Input'
import styles from './Contact.module.css'

export default function ContactSection() {
    return (
        <Container id={styles['contact-us']}>
            <h1>Contact Us</h1>
            <div className={styles.fields}>
                <TextInput type="text" placeholder="Name" />
                <TextInput type="email" placeholder="Email" />
                <TextInput type="text" placeholder="Message" />
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </Container>
    )
}