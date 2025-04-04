import Logo from "./Logo"
import Menu from "./Menu"
import menu from '../data/menu.json'



function Header() {

  return (
    <header>
      <div className="container">

        <Logo />

        <Menu data={menu} />

      </div>
    </header>

  )

}

export default Header