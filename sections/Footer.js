import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <Image alt="logo" src="/sofra.png" width="160" height="160"/>
            <h1>Sofra</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
            </ul>
        </footer>
    )
}