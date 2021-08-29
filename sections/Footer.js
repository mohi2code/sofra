import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <Image alt="logo" src="/sofra.png" width="160" height="160"/>
            <h1>Sofra</h1>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            <div className={styles.social}>
                <FaFacebook style={{ color: "var(--text-gray)" }} size={28} />
                <AiFillInstagram style={{ color: "var(--text-gray)" }} size={28} />
                <FaYoutube style={{ color: "var(--text-gray)" }} size={28} />
            </div>
        </footer>
    )
}