import Image from 'next/image'
import { useState } from 'react'
import { Navbar, NavHeader, NavItem, NavMenu, Toggle } from '../components/Navbar'
import styles from './Hero.module.css'

export default function Hero() {

    const [toggle, setToggle] = useState(false)

    return (
        <section id={styles.hero}>
            <Navbar>
                <NavHeader href="/">
                    <Image alt="logo" src="/sofra.png" width="60" height="60"/>
                    <h1>Sofra</h1>
                </NavHeader>
                <NavMenu toggled={toggle}>
                    <NavItem>Home</NavItem>
                    <NavItem>About</NavItem>
                    <NavItem>Menu</NavItem>
                </NavMenu>
                <Toggle toggled={toggle} onClick={()=>setToggle(!toggle)}/>
            </Navbar>
        </section>
    )
}