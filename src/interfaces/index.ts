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
  | 'Javascript'
  | 'React.js'
  | 'Node.js'
  | 'Express.js'
  | 'Sequelize'
  | 'PostgreSQL'
