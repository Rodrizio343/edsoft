import Image from "next/image"
import Link from "next/link"

const Banner = () => {
  return (
    <section className="main-banner section-container">
      <div className="content-wrapper content">
        <div className="container">
          <h1 className="title">Bienvenidos a EDsoft - 2023</h1>
          <p className="subtitle">Necesitas acesoramiento urgente!!! Nosotros te podemos ayudar en la construcción de tu sitio web.</p>
          <div>
            <Link className="button white" href="/contacto">Escríbenos ya mismo!</Link>
          </div>
        </div>
        <div className="container">
          <Image className="image" src="/images/computer.svg" alt="Computadora EDsoft" width={467} height={380} />
        </div>
      </div>
    </section>
  )
}

export default Banner