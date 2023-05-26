import AboutUs from '@/components/Home/AboutUs'
import Banner from '@/components/Home/Banner'
import Jobs from '@/components/Home/Jobs'
import Projects from '@/components/Home/Projects'
import Services from '@/components/Home/Services'
import Head from 'next/head'


export default function Home({services, projects}) {
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <main>
        <Banner />
        <Services services={services} />
        <AboutUs />
        <Projects projects={projects}/>
        <Jobs />
      </main>
    </>
  )
}

export async function getStaticProps() {
  
  const resp = await fetch('http://edsoft-rem.vercel.app/api/services');
  const services = await resp.json();
  const resp1 = await fetch('http://edsoft-rem.vercel.app/api/projects');
  const projects = await resp1.json();
  
  return {
    props: {
      services,
      projects
    }
  }
}