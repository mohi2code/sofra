import Container from "../components/Container";
import { motion } from "framer-motion";
import VisibilitySensor from 'react-visibility-sensor'
import { useState } from "react";

const AnimatedContainer = motion(Container)

const MotionContainer = ({ children, className, ...props }) => {

    const [canAnimate, setCanAnimate] = useState(false)

    return (
        <VisibilitySensor onChange={isVisible => console.log(isVisible)}>
            {({ isVisible }) => 
                <AnimatedContainer
                    variants={{
                        initial: { opacity: 0, transform: "translateY(30px)" },
                        animate: { opacity: 1, transform: "translateY(0px)" }
                    }}
                    initial="initial"
                    animate={ canAnimate ? "animate": "initial"}
                    transition={{ stiffness: 1000 }}
                    { ...props }
                >
                    { children }
                </AnimatedContainer>
            }
        </VisibilitySensor>
    )
}

export default MotionContainer
