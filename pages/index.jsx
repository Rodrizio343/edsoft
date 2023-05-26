import AboutUs from '@/components/Home/AboutUs'
import Banner from '@/components/Home/Banner'
import Jobs from '@/components/Home/Jobs'
import Projects from '@/components/Home/Projects'
import Services from '@/components/Home/Services'


export default function Home({services, projects}) {
  return (
    <main>
      <Banner />
      <Services services={services} />
      <AboutUs />
      <Projects projects={projects}/>
      <Jobs />
    </main>
  )
}

export async function getStaticProps() {
  
  const resp = await fetch('http://localhost:4050/services');
  const services = await resp.json();
  const resp1 = await fetch('http://localhost:4050/projects');
  const projects = await resp1.json();
  
  return {
    props: {
      services,
      projects
    }
  }
}