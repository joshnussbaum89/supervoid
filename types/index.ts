export interface ProjectProps {
  id: number
  project: string
  musicVideo?: boolean
  client: string
  description: string
  gif: string
}

export interface ModalProps {
  id: number
  gif: string | null
  client: string | null
  project: string | null
  description: string | null
}
