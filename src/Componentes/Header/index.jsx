import "./Header.css"
import searchIcon from "../assets/search.svg"
import guestIcon from "../assets/guest.png"
import menuIcon from "../assets/menu.svg"
import langIcon from "../assets/lang.svg"

const Header = () =>{
  return(
    <header>
      <div className="HeaderContainer">
        <div className="menuDropDown">
          <span>Menu</span>
          <img className="menu" src={menuIcon}/>
        </div>
        <div className="Language">
          <img className="icon" src={langIcon}/>
          <a className="active">BR</a>
          <a>EN</a>
        </div>
      </div>

      <div className="HeaderContainer">
        <div className="Search">
          <input placeholder="Pesquisar"></input>
          <img className="icon" src={searchIcon}/>
        </div>
        <div className="Login">
          <img className="icon" src={guestIcon}/>
          Guest
        </div>
      </div>
    </header>
  )
}

export default Header