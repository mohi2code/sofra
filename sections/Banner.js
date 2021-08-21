import styles from './Banner.module.css'

export default function Banner({ background, text, ...props }) {
    return (
        <div 
            style={{ 
                background: `url("${background}") no-repeat center center / cover`,
            }}
            className={styles.banner}
            {...props}
        >
            <h1>{text}</h1>
        </div>
    )
}