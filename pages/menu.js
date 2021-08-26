import Image from 'next/image'
import Container from '../components/Container'
import NavbarSection from '../sections/NavbarSection'
import Banner from '../sections/Banner'
import Footer from '../sections/Footer'
import { MenuCard, MenuHeader, MenuItem } from '../components/MenuCard'
import styles from '../styles/Menu.module.css'

export default function Menu() {
    return (
        <div id={styles.menu}>
            <Container>
                <NavbarSection></NavbarSection>
            </Container>
            <Banner id={styles.banner} background="/restaurant-bg.png" text="Menu" />
            <Container>
                <div id={styles.cards}>
                    <MenuCard className={styles.card}>
                        <MenuHeader>
                            <h2>Pizza</h2>
                            {/* <Image alt="pizza-icon" src="/pizza-icon.png" width="80px" height="80px"/> */}
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
                    <MenuCard className={styles.card}>
                        <MenuHeader>
                            <h2>Special</h2>
                            {/* <Image alt="pizza-icon" src="/pizza-icon.png" width="80px" height="80px"/> */}
                        </MenuHeader>
                        <MenuItem 
                            title="CRAM-DECKER"
                            description="Three layers & a crust crammed with chicken cheese grillers: our secret cream cheese, ham, spare rib, diced tomato, onion, mozzarella, tomato & herb pizza sauce, BBQ sauce, topped with Debonairs sauce, cheddar & mozzarella."
                            price="18.99"
                        />
                        <MenuItem 
                            title="TRIPLE-DECKER"
                            description="Three layers & a crust crammed with chicken cheese grillers: our secret cream cheese, chicken, mushroom, diced tomato, onion, mozzarella, tomato & herb pizza sauce, topped with Debonairs sauce, cheddar & mozzarella"
                            price="18.99"
                        />
                        <MenuItem 
                            title="CRAMMED-CRUST"
                            description="The crust crammed with chicken cheese grillers & the pizza topped with tomato & herb pizza sauce, chicken, mushroom, diced tomato, onion, Debonairs sauce, mozzarella & spring onion."
                            price="20.99"
                        />
                    </MenuCard>
                </div>
                <div id={styles.cards}>
                    <MenuCard className={styles.card}>
                        <MenuHeader>
                            <h2>Sides</h2>
                            {/* <Image alt="pizza-icon" src="/pizza-icon.png" width="80px" height="80px"/> */}
                        </MenuHeader>
                        <MenuItem 
                            title="Death By Chocolate"
                            description="Warm chocolate pudding. Serves 4."
                            price="3.99"
                        />
                        <MenuItem 
                            title="BBQ Chicken Wings"
                            description="6 Winglets per portion."
                            price="4.99"
                        />
                        <MenuItem 
                            title="Cheese & Garlic Focaccia"
                            description="Large (30cm) pizza base with garlic spread & half mozzarella cheese."
                            price="6.99"
                        />
                        <MenuItem 
                            title="Cocktail Cheese Grillers"
                            description="10 Per portion."
                            price="4.99"
                        />
                        <MenuItem 
                            title="Turn Up The Heat"
                            description="Crushed chilli in a tub."
                            price="2.99"
                        />
                    </MenuCard>
                    <MenuCard className={styles.card}>
                        <MenuHeader>
                            <h2>Drinks</h2>
                            {/* <Image alt="pizza-icon" src="/pizza-icon.png" width="80px" height="80px"/> */}
                        </MenuHeader>
                        <MenuItem 
                            title="1L Soft Drink"
                            description="Coke, Pepsi, Dr Pepper, Sprite"
                            price="1.99"
                        />
                        <MenuItem 
                            title="2L Soft Drink"
                            description="Coke, Pepsi, Dr Pepper, Sprite."
                            price="2.50"
                        />
                        <MenuItem 
                            title="250ml Play Energy Drink"
                            // description="Beef, Sausage, Canadian Bacon, Pepperoni Baked with 
                            // Red Sauce and Mozzarella Cheese."
                            price="0.99"
                        />
                        <MenuItem 
                            title="500ml Powerade"
                            // description="Beef, Sausage, Canadian Bacon, Pepperoni Baked with 
                            // Red Sauce and Mozzarella Cheese."
                            price="1.55"
                        />
                        <MenuItem 
                            title="500ml Tru Fruit Juice"
                            // description="Beef, Sausage, Canadian Bacon, Pepperoni Baked with 
                            // Red Sauce and Mozzarella Cheese."
                            price="1.55"
                        />
                    </MenuCard>
                </div>
                <Footer />
            </Container>
        </div>
    )
}