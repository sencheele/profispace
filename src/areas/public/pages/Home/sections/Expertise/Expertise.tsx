import ExpertiseCard from './components/ExpertiseCard'
import styles from './Expertise.module.scss'

export type ExpertiseItemData = {
    id: number,
    title: string,
    description: string,
}

const Expertise = () => {
    const expertiseList: ExpertiseItemData[] = [
        {
            id: 1,
            title: 'Название деятельности',
            description: 'Какое-то краткое описание деятельности',
        },
        {
            id: 2,
            title: 'Website Development',
            description: 'Создаю современные веб-интерфейсы и приложения с использованием React и TypeScript. Продумываю структуру компонентов, состояние приложения и взаимодействие пользователя с интерфейсом, уделяя внимание производительности, адаптивности и удобству использования. Работаю над проектами от реализации отдельных интерфейсов и функциональных компонентов до создания полноценных клиентских приложений.',
        },
        {
            id: 3,
            title: 'Frontend Development. Какое-то длинное название в две строки',
            description: 'Создание интерфейсов и веб-приложений.',
        },
    ]
    return (
        <section className={`section ${styles.expertise}`}>
            <div className='container'>
                <div className={styles.expertise__wrapper}>
                    <h2 className={`section__title ${styles.expertise__title}`}>
                        Чем я занимаюсь?
                    </h2>

                    <div className={styles.expertise__list}>
                        {expertiseList.map(item => (
                            <ExpertiseCard
                                item={item}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise
