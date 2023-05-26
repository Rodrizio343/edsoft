import Project from '@/components/Projects/Project';

const Projects = ({ projects }) => {
  return (
    <section className="projects-section section-container">
      <h1>Nuestros Proyectos</h1>
      <div className="content-wrapper">
        {
          projects && projects.map(project => (
            <Project key={project.id} project= {project}/>
          ))
        }
      </div>
    </section>
  )
}

export async function getStaticProps() {
  
  const resp = await fetch('http://localhost:4050/projects');
  const projects = await resp.json();
  
  return {
    props: {
      projects
    }
  }
}

export default Projects