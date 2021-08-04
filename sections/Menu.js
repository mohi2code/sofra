import Image from 'next/image'
import Container from '../components/Container'
import { PrimaryButton } from '../components/Button'
import { MenuCard, MenuHeader, MenuItem } from '../components/MenuCard'
import styles from './Menu.module.css'

export default function Menu() {
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
                    price="18.99"
                />
                <MenuItem 
                    title="Meatza"
                    description="Beef, Sausage, Canadian Bacon, Pepperoni Baked with 
                    Red Sauce and Mozzarella Cheese."
                    price="18.99"
                />
                <MenuItem 
                    title="Meatza"
                    description="Beef, Sausage, Canadian Bacon, Pepperoni Baked with 
                    Red Sauce and Mozzarella Cheese."
                    price="18.99"
                />
                <MenuItem 
                    title="Meatza"
                    description="Beef, Sausage, Canadian Bacon, Pepperoni Baked with 
                    Red Sauce and Mozzarella Cheese."
                    price="18.99"
                />
                <MenuItem 
                    title="Meatza"
                    description="Beef, Sausage, Canadian Bacon, Pepperoni Baked with 
                    Red Sauce and Mozzarella Cheese."
                    price="18.99"
                />
            </MenuCard>
            <PrimaryButton>View full menu</PrimaryButton>
        </Container>
    )
}