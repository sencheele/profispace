import styles from './Home.module.scss'
import Hero from './sections/Hero'
import FeaturedProjects from './sections/FeaturedProjects'

const Home = () => {
    return (
        <div className={styles.home}>
            <Hero />
            <FeaturedProjects />
        </div>
    )
}

export default Home
