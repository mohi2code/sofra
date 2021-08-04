import Image from 'next/image'
import Container from '../components/Container'
import { PrimaryButton } from '../components/Button'
import { Navbar, NavHeader, NavItem, NavMenu } from '../components/Navbar'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <Container id={styles.hero}>
            <Navbar>
                <NavHeader href="/">
                    <Image alt="logo" src="/sofra.png" width="60" height="60"/>
                    <h1>Sofra</h1>
                </NavHeader>
                <NavMenu>
                    <NavItem>Home</NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Menu</NavItem>
                </NavMenu>
            </Navbar>

            <div className={styles.showcase}>
                <div className={styles.text}>
                    <h1>Where taste meets the myth</h1>
                    <p>We are looking forward to having you as our guest</p>
                    <PrimaryButton>View menu</PrimaryButton>
                </div>
                <div className={styles.images}>
                    <div className={styles.image1}></div>
                    <div className={styles.image2}></div>
                </div>
            </div>
        </Container>
    )
}