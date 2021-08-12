import Image from 'next/image'
import { useState } from 'react'
import { Navbar, NavHeader, NavMenu, NavItem, Toggle } from '../components/Navbar'

export default function NavbarSection () {

    const [hide, setHide] = useState(false)

    return (
        <Navbar>
            <NavHeader href="/">
                <Image alt="logo" src="/sofra.png" width="60" height="60"/>
                <h1>Sofra</h1>
            </NavHeader>
            <NavMenu hide={hide}>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/about">About</NavItem>
                <NavItem href="/menu">Menu</NavItem>
            </NavMenu>
            <Toggle hide={hide} onClick={()=>setHide(!hide)}/>
        </Navbar>
    )
}