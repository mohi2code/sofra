import classNames from 'classnames'
import styles from './ImageText.module.css'

export default function ImageText({ children, variant, background }) {
    return (
        <div 
            className={classNames(
                styles['image-text'], variant=="ltr" && styles.ltr || variant=="rtl" && styles.rtl
            )}
        >
            <div
                className={styles.image}
                style={{ background: `url("${background}") no-repeat center center / cover` }}
            ></div>
            <div className={styles.text}>
                { children }
            </div>
        </div>
    ) 
}