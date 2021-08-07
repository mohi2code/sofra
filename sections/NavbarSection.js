import Image from 'next/image'
import { Navbar, NavHeader, NavMenu, NavItem } from '../components/Navbar'

export default function NavbarSection () {
    return (
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
    )
}