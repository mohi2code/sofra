import classNames from 'classnames'
import styles from './Container.module.css'

const Container = ({ children, className, ...props }) => (
    <div
        className={classNames(styles.container, className)}
        { ...props }
    >
        {children}
    </div>
)

export default Container