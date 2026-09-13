import styles from './Home.module.scss'
import Hero from './sections/Hero'
import FeaturedProjects from './sections/FeaturedProjects'
import Expertise from './sections/Expertise'

const Home = () => {
    return (
        <div className={styles.home}>
            <Hero />
            <FeaturedProjects />
            <Expertise />
        </div>
    )
}

export default Home
