import ProjectCard from '@/components/ProjectCard'
import styles from './ProjectList.module.scss'

export type TestData = {
    id: number,
    title: string,
    techStack: string[],
}

const ProjectList = () => {
    const testData: TestData[] = [
        {
            id: 1,
            title: 'Task management application with drag & drop',
            techStack: [
                'React',
                'TypeScript',
                'Router',
            ],
        },
        {
            id: 2,
            title: 'Kanban',
            techStack: [
                'React',
                'TypeScript',
                'Router',
            ],
        },
        {
            id: 3,
            title: 'Mini-shop application',
            techStack: [
                'React',
                'TypeScript',
                'Router',
            ],
        },
    ]

    return (
        <div className={styles['project-list']}>
            {testData.map(item => (
                <ProjectCard
                    projectData={item}
                    key={item.id}
                />
            ))}
        </div>
    )
}

export default ProjectList
