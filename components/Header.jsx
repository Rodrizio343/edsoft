import MainMenu from './MainMenu'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="main-header">
        <div className="content-wrapper">
          <Logo />
          <span id="open-menu-button" className="jam jam-menu"></span>
          <MainMenu />
        </div>
      </header>
  )
}

export default Header