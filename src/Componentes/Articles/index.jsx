import "./Articles.css"
import faceIcon from "../assets/face.svg"
import instaIcon from "../assets/insta.svg"
import twitertIcon from "../assets/twitter.svg"
import marsImg from "../assets/mars.png"
import venusImg from "../assets/venus.png"
import uranusImg from "../assets/uranus.png"
import ExtraLink from "../ExtraLink"

const Articles = ({subTittle, tittle, desc}) =>{
  return(
    <div class="content">
      <div class="intro">
        <p>{subTittle}</p>
        <h1>{tittle}</h1>
      </div>
      <div class="desc">
        <h3>{desc}</h3>
        <button className="articleButton">Discover More</button>
        <div>
          <img className="imglink" src={faceIcon} alt="facebook"/>
          <img className="imglink" src={instaIcon} alt="instagram"/>
          <img className="imglink" src={twitertIcon} alt="twitter"/>
        </div>
      </div>
      <div class="div2">
        <h2><span>+46K</span> Enjoy travel with us.</h2>
        <p>For anyone interessed in exploring space travel</p>
        <div className="followUps">
          <img src="https://pbs.twimg.com/media/F83W0lLXsAArFpM.jpg"/>
          <img src="https://i.redd.it/471m7l6n67pd1.jpeg"/>
          <img src="https://media.tenor.com/jwLrx8_AgrwAAAAM/crying-cat.gif"/>
          <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/30900.png"/>
          <a href="https://www.youtube.com/watch?v=0CR9fNB9fds" target="_blank">More</a>
        </div>
      </div>
      <div class="div4">
        <ExtraLink src={marsImg}   tittle='Journey to the Red Planet'               link={'https://www.youtube.com/watch?v=xvFZjo5PgG0'}/>
        <ExtraLink src={venusImg}  tittle='Unleash Your Inner Astronaut'            link={'https://www.youtube.com/watch?v=xvFZjo5PgG0'}/>
        <ExtraLink src={uranusImg} tittle='Ultimate Guide to Interplanetary Travel' link={'https://www.youtube.com/watch?v=xvFZjo5PgG0'}/>
      </div>
    </div>
  )
}

export default Articles