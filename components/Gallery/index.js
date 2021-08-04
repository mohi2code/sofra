import Image from 'next/image'
import classNames from 'classnames'
import styles from './Gallery.module.css'

const Gallery = ({ className, ...props }) => (
    <div className={classNames(styles.gallery, className)} {...props}>
        <div className={styles.left}>
            <div className={styles.upper}></div>
            <div className={styles.lower}>
                <div className={styles.one}></div>
                <div className={styles.two}></div>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.upper}>
                <div className={styles.one}></div>
                <div className={styles.two}></div>
            </div>
            <div className={styles.lower}></div>
        </div>
    </div>
)

export default Gallery