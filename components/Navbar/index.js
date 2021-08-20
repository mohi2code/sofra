import { forwardRef } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
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

const ResponsiveNavMenu = forwardRef(({ children, className, ...props }, ref) => (
    <ul
        className={classNames(styles['nav-menu-responsive'], className)}
        ref={ref}
        { ...props }
    >
        { children }
    </ul>
))
ResponsiveNavMenu.displayName="ResponsiveNavMenu"
const MotionResponsiveNavMenu = motion(ResponsiveNavMenu)

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

export { 
    Navbar, 
    NavHeader, 
    NavMenu,
    ResponsiveNavMenu, 
    MotionResponsiveNavMenu, 
    NavItem, 
    Toggle 
}