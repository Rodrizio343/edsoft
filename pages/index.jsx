import AboutUs from '@/components/Home/AboutUs'
import Banner from '@/components/Home/Banner'
import Jobs from '@/components/Home/Jobs'
import Projects from '@/components/Home/Projects'
import Services from '@/components/Home/Services'


export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <AboutUs />
      <Projects />
      <Jobs />
    </main>
  )
}
