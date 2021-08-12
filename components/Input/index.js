import classNames from 'classnames'
import styles from './Input.module.css'

const TextInput = ({ children, className, ...props }) => (
    <input className={classNames(styles['input'], className)} type="text" {...props} />
)

export { TextInput }