import Project from "./Project"

const Projects = ({projects}) => {
  return (
    <section className="section-container last-projects">
      <h2>Últimos proyectos</h2>
      <div className="content-wrapper">
       {
        projects && projects.map(project => (
          <Project 
            key={project.id}
            name={project.name}
            detail={project.detail}
            image={project.image}
          />
        ))
       }
      </div>
    </section>
  )
}

export default Projects