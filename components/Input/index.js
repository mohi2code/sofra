import classNames from 'classnames'
import styles from './Input.module.css'

const TextInput = ({ children, className, ...props }) => (
    <input className={classNames(styles['input'], className)} {...props} />
)

const TextInputLabel = ({ children, className, label, ...props }) => (
    <div className={styles['input-label']}>
        <label>{label}</label>
        <input className={classNames(styles.input, className)} {...props} />
    </div>
)

const TextAreaInput = ({ children, className, ...props }) => (
    <textarea className={classNames(styles.input, className)} { ...props }>
        { children }
    </textarea>
)

const TextAreaInputLabel = ({ children, className, label, ...props }) => (
    <div className={styles['input-label']}>
        <label>{label}</label>
        <textarea
            className={classNames(styles.input, className)} {...props}
        >
            {children}
        </textarea>
    </div>
)

export { TextInput, TextInputLabel, TextAreaInput, TextAreaInputLabel }