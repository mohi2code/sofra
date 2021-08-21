import { forwardRef } from 'react'
import classNames from 'classnames'
import styles from './Container.module.css'

const Container = forwardRef(({ children, className, ...props }, ref) => (
    <div
        ref={ref}
        className={classNames(styles.container, className)}
        { ...props }
    >
        {children}
    </div>
))
Container.displayName="Container"

export default Container