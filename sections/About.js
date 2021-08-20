import { useState } from 'react'
import { useRouter } from 'next/router'
import Container from '../components/Container'
import { PrimaryButton } from '../components/Button'
import { motion } from 'framer-motion'
import VisibilitySensor from 'react-visibility-sensor'
import styles from './About.module.css'

export default function About() {

    const [animated, setAnimated] = useState(false)

    const router = useRouter()

    return (
        <VisibilitySensor onChange={isVisible => isVisible&&setAnimated(true) }>
            {({isVisible}) =>
                <Container id={styles.about}>
                    <motion.div 
                        variants={variants1}
                        initial="initial"
                        animate={ animated ? "animate": "initial"}
                        transition={{ stiffness: 1000 }}
                        className={styles.image}
                    ></motion.div>
                    <motion.div 
                        variants={variants2}
                        initial="initial"
                        animate={ animated ? "animate": "initial"}
                        transition={{ stiffness: 1000 }}
                        className={styles.text}
                    >
                        <h3>About</h3>
                        <h1>Who are we ?</h1>
                        <p>We Believe the key to our success is through our customers thats why quality and satisfaction is our daily strive; looking forward to have you as our guest.</p>
                        <strong><p>established since 1970</p></strong>
                        <PrimaryButton onClick={()=>router.push("/about")}>Learn more</PrimaryButton>
                    </motion.div>
                </Container>
            }
        </VisibilitySensor>
    )
}

const variants1 = {
    initial: { opacity: 0, transform: "translateX(-10px)" },
    animate: { opacity: 1, transform: "translateX(0px)" },
}

const variants2 = {
    initial: { opacity: 0, transform: "translateX(10px)" },
    animate: { opacity: 1, transform: "translateX(0px)" }
}