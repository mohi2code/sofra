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
                    <Image alt="Chef" src="/john-doe2.jpg" width="120" height="180"/>
                    <h1>Darien Hansen</h1>
                    <h3>Chef</h3>
                </CardImage>
                <CardImage>
                    <Image alt="Chef" src="/john-doe3.jpg" width="120" height="180"/>
                    <h1>Terrence Cooley</h1>
                    <h3>Chef</h3>
                </CardImage>
                <CardImage>
                    <Image alt="Chef" src="/john-doe5.jpg" width="120" height="180"/>
                    <h1>Corrina Beck</h1>
                    <h3>Chef</h3>
                </CardImage>
                <CardImage>
                    <Image alt="Manager" src="/john-doe4.jpg" width="120" height="180"/>
                    <h1>Marshall Bates</h1>
                    <h3>Manager</h3>
                </CardImage>
            </div>
        </div>
    )
}