import styles from './Home.module.scss'
import Hero from './sections/Hero'

const Home = () => {
    return (
        <div className={styles.home}>
            <Hero />
        </div>
    )
}

export default Home
