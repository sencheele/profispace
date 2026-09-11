import { NavLink } from 'react-router-dom'
import styles from './ProjectCard.module.scss'
import type { TestData } from '../ProjectList/ProjectList'

type Props = {
    projectData: TestData,
}

const ProjectCard = ( props:Props ) => {
    const {
        projectData,
    } = props

    return (
        <NavLink
            className={styles['project-card']}
            to=''
        >
            <h3 className={styles['project-card__title']}>
                {projectData.title}
            </h3>

            <ul className={styles['project-card__stacks']}>
                {projectData.techStack.map(item => (
                    <li
                        className={styles['project-card__stack']}
                        key={item}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <svg className={styles['project-card__icon']}>
                <use href='/sprite.svg#arrow-right' />
            </svg>
        </NavLink>
    )
}

export default ProjectCard
