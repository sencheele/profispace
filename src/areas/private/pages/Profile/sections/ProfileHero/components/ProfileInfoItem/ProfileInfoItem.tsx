import Icon from '@/components/Icon'
import styles from './ProfileInfoItem.module.scss'
import type { ContactType, ProfessionalLinkType } from '@/types/profile'
import type { ReactNode } from 'react'

interface Props {
    icon: ContactType | ProfessionalLinkType
    children: ReactNode
}

const ProfileInfoItem = ( props: Props ) => {
    const {
        icon,
        children
    } = props

    return (
        <div className={styles['profile-info-item']}>
            <Icon name={icon} />

            <div className={styles['profile-info-item__text']}>
                {children}
            </div>
        </div>
    )
}

export default ProfileInfoItem

