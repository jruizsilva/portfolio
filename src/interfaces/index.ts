export interface Project {
  id: string
  title: string
  description: string
  projectImage: string
  subtitle: string
  stack: Stack[]
  github: {
    frontend: string
    backend: string
  }
  deploy: string
}
type Stack =
  | 'Typescript'
  | 'React.js'
  | 'Zustand'
  | 'TanStack Query'
  | 'Web Sockets'
  | 'Chakra UI'
  | 'Spring Boot 3'
  | 'H2'
  | 'PostgreSQL'
