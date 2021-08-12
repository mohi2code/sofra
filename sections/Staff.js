import Image from 'next/image'
import { CardImage } from '../components/Card'
import styles from './Staff.module.css'

export default function Staff() {
    return (
        <div id={styles.staff}>
            <h3>Our chefs</h3>
            <h1>Staff</h1>
            <div className={styles.cards}>
                <CardImage>
                    <Image alt="" src="/john-doe.png" width="150" height="150"/>
                    <h1>John Doe</h1>
                    <h3>Chef</h3>
                </CardImage>
                <CardImage>
                    <Image alt="" src="/john-doe.png" width="150" height="150"/>
                    <h1>John Doe</h1>
                    <h3>Chef</h3>
                </CardImage>
                <CardImage>
                    <Image alt="" src="/john-doe.png" width="150" height="150"/>
                    <h1>John Doe</h1>
                    <h3>Chef</h3>
                </CardImage>
                <CardImage>
                    <Image alt="" src="/john-doe.png" width="150" height="150"/>
                    <h1>John Doe</h1>
                    <h3>Chef</h3>
                </CardImage>
            </div>
        </div>
    )
}