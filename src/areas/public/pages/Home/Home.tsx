import styles from './Home.module.scss'
import Hero from './sections/Hero'
import FeaturedProjects from './sections/FeaturedProjects'
import Expertise from './sections/Expertise'
import CollaborationCTA from '../../components/CollaborationCTA'

const Home = () => {
    return (
        <div className={styles.home}>
            <Hero />
            <FeaturedProjects />
            <Expertise />
            <CollaborationCTA />
        </div>
    )
}

export default Home
