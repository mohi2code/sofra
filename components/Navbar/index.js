import Link from 'next/link'
import classNames from 'classnames'
import styles from './Navbar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({ children, className, ...props }) => (
    <nav 
        className={classNames(styles.navbar, className )}
        { ...props }
    >
        { children }
    </nav>
)

const NavHeader = ({ children, className, href, ...props }) => (
    <Link href={href || "#"} passHref>
        <div
            className={classNames(styles['nav-header'], classNames)}
            { ...props }
        >
            { children }
        </div>
    </Link>
)

const NavMenu = ({ children, className, hide, ...props }) => (
    <ul 
        className={classNames(styles['nav-menu'], className, {[`${styles.hide}`]: hide})}
        { ...props }
    >
        { children }
    </ul>
)

const NavItem = ({ children, className, href, ...props }) => (
    <li
        className={classNames(styles['nav-item'], className)}
        { ...props }
    >
        <Link href={href || "#"}>
            { children }
        </Link>
    </li>
)

const Toggle = ({ children, className, hide, ...props }) => (
    <div className={classNames(styles.toggle, className)} {...props}>
        { hide ? (
            <FaBars size={55} />
        ) : (
            <FaTimes size={55} />
        )}
    </div>  
) 

export { Navbar, NavHeader, NavMenu, NavItem, Toggle }