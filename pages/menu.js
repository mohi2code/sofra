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
                    <MenuCard className={styles.card}>
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
                </div>
                <div id={styles.cards}>
                    <MenuCard className={styles.card}>
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
                    <MenuCard className={styles.card}>
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
                </div>
                <Footer />
            </Container>
        </div>
    )
}