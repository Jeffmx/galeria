import styled from 'styled-components'

const PostBanner = styled.div`
 background-image: ${props => `url(${props.$img})`};
 background-position: center;
 height: min(25svh,200px);
 background-size: cover;
 border-radius: 1.5vw;
 width: 100%;
`

const PostGrid = styled.div`
 display: grid;
 grid-template-columns: 33% 33% 33%;
 grid-template-rows: min(25svh,200px);
 justify-items: center;
 align-items: end;
 color: white;

 .postDetails{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  height: 80%;

  div{
    display: flex;
    width: 70px;
    padding: 5px 0;
    justify-content: center;

    border-radius: 3vw;
    border: 3px solid black;
    background-color: white;
    color: black;
  }
 }

 .postTittle{
  display: flex;
  width: min(8svw, 150px);
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 5vw;
  backdrop-filter: blur(10px);
 }
`

const Post = ({img, id, desc, nome}) =>{
  return(
    <PostBanner $img={img}>
      <PostGrid>
        <div className='postDetails'>
          <h2>{id}</h2>
          <h2>{desc}</h2>
          <div>More</div>
        </div>
        <div>
          <h2 className='postTittle'>{nome}</h2>
        </div>
      </PostGrid>
    </PostBanner>
  )
}

export default Post