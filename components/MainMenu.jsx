import Link from 'next/link'

const MainMenu = () => {
  return (
    <nav id="main-menu" className="main-menu">
      <span id="close-menu-button" className="jam jam-close"></span>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/quienes-somos.html">¿Quiénes somos?</Link>
        </li>
        <li>
          <Link href="/proyectos.html">Proyectos</Link>
        </li>
        <li>
          <Link href="/contacto.html">Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu