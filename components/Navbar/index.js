import Link from 'next/link'
import classNames from 'classnames'
import styles from './Navbar.module.css'

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

const NavMenu = ({ children, className, ...props }) => (
    <ul 
        className={classNames(styles['nav-menu'], className)}
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

export { Navbar, NavHeader, NavMenu, NavItem }