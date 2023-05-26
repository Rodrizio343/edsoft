import Project from '@/components/Projects/Project';
import Head from 'next/head';

const Projects = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Proyectos</title>
      </Head>
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
    </>
  )
}

export async function getServerSideProps() {
  
  const resp = await fetch('http://edsoft-mu.vercel.app/api/projects');
  const projects = await resp.json();
  
  return {
    props: {
      projects
    }
  }
}

export default Projects