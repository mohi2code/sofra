import { useRouter } from 'next/router'
import Container from '../components/Container'
import NavbarSection from './NavbarSection'
import { PrimaryButton } from '../components/Button'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {

    const router = useRouter()

    return (
        <Container id={styles.hero}>
            <NavbarSection />

            <motion.div 
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{ stiffness: 10000, delayChildren: .1, staggerChildren: .25 }}
                className={styles.showcase}
            >
                <motion.div className={styles.text} variants={variants}>
                    <h1>Where taste meets the myth</h1>
                    <p>We are looking forward to having you as our guest</p>
                    <PrimaryButton onClick={() => router.push("/menu")}>View menu</PrimaryButton>
                </motion.div>
                <motion.div className={styles.images} variants={variants}>
                    <div className={styles.image1}></div>
                    <div className={styles.image2}></div>
                </motion.div>
            </motion.div>
        </Container>
    )
}

const variants= {
    initial: { opacity: 0, transform: "translateY(-50px)" },
    animate: { opacity: 1, transform: "translateY(0px)",  }
}