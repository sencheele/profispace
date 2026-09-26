export type ContactType =
    | 'phone'
    | 'email'
    | 'telegram'
    | 'whatsapp'

export type ProfessionalLinkType =
    | 'github'
    | 'gitlab'
    | 'website'
    | 'linkedin'
    | 'hh'

export interface Contact {
    type: ContactType
    value: string
}

export interface ProfessionalLink {
    type: ProfessionalLinkType
    value: string
}

export interface Profile {
    surname?: string
    name?: string
    profession?: string
    location?: string
    contacts: Contact[]
    professionalLinks: ProfessionalLink[]
}
