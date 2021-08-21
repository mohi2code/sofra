import Container from '../components/Container'
import Banner from '../sections/Banner'
import ImageText from '../sections/ImageText'
import NavbarSection from '../sections/NavbarSection'
import Staff from '../sections/Staff'
import Footer from '../sections/Footer'
import Head from 'next/head'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div id={styles.about}>
            <Head>
                <title>Welcome to Sofra</title>
                <meta name="description" content="NextJs restaurant template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <NavbarSection />
            </Container>
            <Banner id={styles.banner} background="/restaurant-bg.png" text="About us"/>
            <Container className={styles.spacing}>
                <ImageText variant="ltr" background="/about-bg.jpg">
                    <h3>Quality</h3>
                    <h1>Our standards</h1>
                    <p>Bacon ipsum dolor amet alcatra tongue pork belly, corned beef pork loin flank biltong. Landjaeger ham hock filet mignon, jerky shank fatback pastrami andouille short ribs ham. Leberkas ground round fatback beef biltong, short ribs chislic ham hock beef ribs venison kevin flank burgdoggen ham. Jowl hamburger rump, pork pork belly beef ribs sausage ball tip capicola alcatra shank pork chop pancetta bresaola. Buffalo sirloin strip steak prosciutto ham hock doner chuck hamburger. Pork shank sirloin ground round bacon buffalo brisket. Brisket pork loin landjaeger cupim, fatback ham boudin beef ball tip beef ribs t-bone andouille flank tail.</p>
                </ImageText>
                <ImageText variant="rtl" background="/about-bg.jpg">
                    <h3>fresh</h3>
                    <h1>Out of the oven</h1>
                    <p>Bacon ipsum dolor amet alcatra tongue pork belly, corned beef pork loin flank biltong. Landjaeger ham hock filet mignon, jerky shank fatback pastrami andouille short ribs ham. Leberkas ground round fatback beef biltong, short ribs chislic ham hock beef ribs venison kevin flank burgdoggen ham. Jowl hamburger rump, pork pork belly beef ribs sausage ball tip capicola alcatra shank pork chop pancetta bresaola. Buffalo sirloin strip steak prosciutto ham hock doner chuck hamburger. Pork shank sirloin ground round bacon buffalo brisket. Brisket pork loin landjaeger cupim, fatback ham boudin beef ball tip beef ribs t-bone andouille flank tail.</p>
                </ImageText>
                <Staff />
                <Footer />
            </Container>
        </div>
    )
}