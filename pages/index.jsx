import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>

      <main>

        <section className="main-banner section-container">
          <div className="content-wrapper content">
            <div className="container">
              <h1 className="title">Bienvenidos a EDsoft</h1>
              <p className="subtitle">Necesitas acesoramiento urgente!!! Nosotros te podemos ayudar en la construcción de tu sitio web.</p>
              <div>
                <Link className="button white" href="/contacto.html">Escríbenos ya mismo!</Link>
              </div>
            </div>
            <div className="container">
              <img className="image" src="/images/computer.svg" alt="Computadora EDsoft" />
            </div>
          </div>
        </section>

        <section className="services-section section-container">
          <h2>Nuestros servicios</h2>
          <div className="content-wrapper">
            <article className="service-item">
              <span className="jam jam-phone"></span>
              <h3>Servicio 1</h3>
              <p>Diseñamos tu presencia en internet con apariencia profesional</p>
            </article>
            <article className="service-item">
              <span className="jam jam-computer"></span>
              <h3>Servicio 2</h3>
              <p>Diseñamos tu presencia en internet con apariencia profesional</p>
            </article>
            <article className="service-item">
              <span className="jam jam-keyboard"></span>
              <h3>Servicio 3</h3>
              <p>Diseñamos tu presencia en internet con apariencia profesional</p>
            </article>
          </div>
        </section>

        <section className="section-container about-section">
          <div className="content-wrapper">
            <h2 className="title">Sobre nosotros</h2>
            <p>Este es el sitio web de nuestra agencia de desarrollo.</p>
            <Link href="/proyectos.html" className="button white ghost">Ver experiencia</Link>
          </div>
          <img className="background" src="/images/bg-section.jpg" alt="Alumnos estudiando" />
        </section>

        <section className="section-container last-projects">
          <h2>Últimos proyectos</h2>
          <div className="content-wrapper">
            <Link href="#" className="project-item">
              <article>
                <div>
                  <h4>Titulo proyecto</h4>
                  <p>Descripción proyecto</p>
                </div>
                <div className="image-container">
                  <img src="/images/project-1.jpg" alt="Proyecto 1" />
                </div>
              </article>
            </Link>
            <Link href="#" className="project-item">
              <article>
                <div>
                  <h4>Titulo proyecto</h4>
                  <p>Descripción proyecto</p>
                </div>
                <div className="image-container">
                  <img src="/images/project-2.jpg" alt="Proyecto 2" />
                </div>
              </article>
            </Link>
            <Link href="#" className="project-item">
              <article>
                <div>
                  <h4>Titulo proyecto</h4>
                  <p>Descripción proyecto</p>
                </div>
                <div className="image-container">
                  <img src="/images/project-3.jpg" alt="Proyecto 3" />
                </div>
              </article>
            </Link>
            <Link href="#" className="project-item">
              <article>
                <div>
                  <h4>Titulo proyecto</h4>
                  <p>Descripción proyecto</p>
                </div>
                <div className="image-container">
                  <img src="/images/project-4.jpg" alt="Proyecto 4" />
                </div>
              </article>
            </Link>
          </div>
        </section>

        <section className="work-with-us">
          <div className="content-wrapper">
            <h2 className="title">¿Quieres trabajar con nosotros?</h2>
            <p className="subtitle">Es momento de convertir tu idea en algo real.  Puedes contactarnos en nuestras redes sociales<br/> o enviando un correo a:</p>
            <Link href="mailto:contacto@edsoft.com" className="button">contacto@edsoft.com</Link>
            <div className="social-networks">
              <Link href="#" target="_blank"><span className="jam jam-facebook"></span></Link>
              <Link href="#" target="_blank"><span className="jam jam-twitter"></span></Link>
              <Link href="#" target="_blank"><span className="jam jam-whatsapp"></span></Link>
              <Link href="#" target="_blank"><span className="jam jam-instagram"></span></Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="main-footer">
        <p>Todos los derechos reservados © 2020 | EDsoft tech labs agency</p>
      </footer>
    </>
  )
}
