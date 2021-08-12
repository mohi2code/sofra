import { PrimaryButton } from '../components/Button'
import { TextInput } from '../components/Input'
import styles from './EmailList.module.css'

export default function EmailList() {
    return (
        <div id={styles.email}>
            <h2>Get notified with our deals & offers</h2>
            <div className={styles['input-group']}>
                <TextInput placeholder="Enter your email" />
                <PrimaryButton>Subscribe</PrimaryButton>
            </div>
        </div>
    )
}