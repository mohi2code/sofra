import classNames from "classnames"
import styles from './Button.module.css'

const PrimaryButton = ({ children, className, ...props }) => (
    <button
        className={classNames(styles.btn, className)}
        {...props}
    >
        { children }
    </button>
)

export { PrimaryButton }