import "./Header.css"
import settingsIcon from "../assets/settings.svg"
import logoutIcon   from "../assets/logout.svg"
import searchIcon   from "../assets/search.svg"
import guestIcon    from "../assets/guest.png"
import menuIcon     from "../assets/menu.svg"
import langIcon     from "../assets/lang.svg"
import downIcon     from "../assets/down.svg"

const Header = () =>{
  return(
    <header>
      <div className="HeaderContainer_L">
        <div className="menuDropDown">
          <span>Menu</span>
          <img className="menu" src={menuIcon}/>
          <div className="menuDropDownContent">
            <h2>About Us</h2>
            <h2>Articles</h2>
            <h2>News</h2>
          </div>
        </div>
        <div className="Language">
          <img className="icon" src={langIcon}/>
          <a >BR</a>
          <a className="active">EN</a>
        </div>
      </div>

      <div className="HeaderContainer_R">
        <div className="Search">
          <input placeholder="Pesquisar"></input>
          <img className="icon" src={searchIcon}/>
        </div>
        <div className="Login">
          <img className="icon" src={guestIcon}/>
          Guest
          <img className="loginMore" src={downIcon}/>
          <div className="LoginDropDown">
            <img src={settingsIcon}/>
            <img src={logoutIcon}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header