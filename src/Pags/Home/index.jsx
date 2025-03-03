import Articles from "../../Componentes/Articles"
import Header from "../../Componentes/Header"
import Post from "../../Componentes/Post"
import banner from "../../Componentes/assets/post1.jpg"
import banner2 from "../../Componentes/assets/post2.jpg"
import './Home.css'

const Home = () =>{
  return(<>
    <div className="container">
      <Header/>
      <div className="bannerDeco"></div>
    </div>
    <div className="feed">
      <Articles
        subTittle='Cosmic Connections'
        tittle='Bridging the Gap Between Earth and Space'
        desc='it offers a wide range of content related to space tourism, including articles, videos and guides'
      />
      <section className="PostSection">
        <Post 
          id='01'
          img={banner}
          desc='Best Anime Fr Fr'
          nome='TTGL'
        />
        <Post 
          id='02'
          img={banner2}
          desc='Absolute Cinema'
          nome='TTGL'
        />
      </section>
    </div>
  </>)
}

export default Home