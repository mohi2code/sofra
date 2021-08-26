import { useRouter } from 'next/router'
import Image from 'next/image'
import Container from '../components/Container'
import { PrimaryButton } from '../components/Button'
import { MenuCard, MenuHeader, MenuItem } from '../components/MenuCard'
import styles from './Menu.module.css'

export default function Menu() {

    const router = useRouter()

    return (
        <Container id={styles.menu}>
            <h3>Menu</h3>
            <h1>What would you like to eat ?</h1>
            <MenuCard>
                <MenuHeader>
                    <h2>Pizza</h2>
                    <Image alt="pizza-icon" src="/pizza-icon.png" width="80px" height="80px"/>
                </MenuHeader>
                <MenuItem 
                    title="Meatza"
                    description="Beef, Sausage, Canadian Bacon, Pepperoni Baked with 
                    Red Sauce and Mozzarella Cheese."
                    price="12.99"
                />
                <MenuItem 
                    title="Club"
                    description="Ham, bacon, chicken, Debonairs sauce."
                    price="11.99"
                />
                <MenuItem 
                    title="Four Seasons"
                    description="Pepperoni, mushroom, olives, green pepper, onion"
                    price="10.99"
                />
                <MenuItem 
                    title="3 Cheese"
                    description="Mozzarella, cheddar, feta, sweet bell pepper, spring onion"
                    price="10.99"
                />
                <MenuItem 
                    title="Margherita"
                    description="Special blend of tomato & herb pizza sauce & mozzarella cheese"
                    price="9.99"
                />
            </MenuCard>
            <PrimaryButton onClick={()=>router.push("/menu")}>View full menu</PrimaryButton>
        </Container>
    )
}