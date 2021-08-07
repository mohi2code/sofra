import classNames from 'classnames'
import styles from './Card.module.css'

const CardImage = ({ children, className, ...props }) => (
    <div 
        className={classNames(className, styles['card-image'])}
        {...props}
    >
        {children}
    </div>
)

export { CardImage }
