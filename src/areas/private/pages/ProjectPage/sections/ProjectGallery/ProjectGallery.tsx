import styles from './ProjectGallery.module.scss'

import testImage1 from '@/assets/images/test-gallery-1.png'
import testImage2 from '@/assets/images/test-gallery-2.gif'
import testImage3 from '@/assets/images/test-gallery-3.jpg'
import testImage4 from '@/assets/images/test-gallery-4.jpg'

const ProjectGallery = () => {
    return (
        <section className={`section ${styles['project-gallery']}`}>
            <div className='container'>
                <div className={styles['project-gallery__wrapper']}>
                    <div className={styles['project-gallery__image']}>
                        <img
                            src={testImage1}
                            alt=''
                        />
                    </div>

                    <div className={styles['project-gallery__image']}>
                        <img
                            src={testImage2}
                            alt=''
                        />
                    </div>

                    <div className={styles['project-gallery__image']}>
                        <img
                            src={testImage3}
                            alt=''
                        />
                    </div>

                    <div className={styles['project-gallery__image']}>
                        <img
                            src={testImage4}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectGallery
