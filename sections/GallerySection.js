import Container from '../components/Container'
import Gallery from '../components/Gallery'
import styles from './GallerySection.module.css'

export default function GallerySection() {
    return (
        <Container id={styles.gallery}>
            <h3>Gallery</h3>
            <h1>Top pics</h1>
            <Gallery id={styles.images}/>
        </Container>
    )
}