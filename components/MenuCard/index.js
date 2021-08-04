import classNames from 'classnames'
import styles from './MenuCard.module.css'

const MenuCard = ({ children, className, ...props }) => (
    <div className={classNames(styles['menu-card'], className)}
        { ...props }
    >
        { children }
    </div>
)

const MenuHeader = ({ children, className, ...props }) => (
    <div className={classNames(styles.header, className)}
        { ...props }
    >
        { children }
    </div>
)

const MenuItem = ({
    children,
    className, 
    title, 
    description, 
    price, 
    ...props
}) => (
    <div className={classNames(styles['menu-item'], className)}
        { ...props }
    >
        <div className={styles.left}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className={styles.right}>
            <p>{price}$</p>
        </div>
    </div>
)

export { MenuCard, MenuHeader, MenuItem }