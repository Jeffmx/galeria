import './ExtraLink.css'
import linked from "../assets/linked.svg"

const ExtraLink =({src, tittle, link}) =>{
  return(
    <div className="extraLink">
      <h2>
        <img className="extraImg" src={src}/>
        {tittle}
        <a className="linkBait" href={link} target='blank'>
          <img src={linked}/>
        </a>
      </h2>
    </div>
  )
}

export default ExtraLink