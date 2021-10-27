import router from 'next/router';
import styled from 'styled-components';

const CardCont = styled.div`
  min-width:200px;
  max-width: 350px;
  display:flex;
  flex-direction:column;
`;

const HeaderCont = styled.div`
  background-color:#eeeeee;
  position:relative;
  min-height:200px;
`

const HeaderImg = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  position:absolute;
  left:0;
  top:0;
  z-index:0;
`;

const CardHeader = styled.span`
  font-size:24px;
  z-index:999;
  position:relative;
  padding:10px;
  background-color:#FFFFFF;
`

const CardBody = styled.div`
  font-size:18px;
  padding:10px;
`;

const Card = ({
  title= "Title",
  description= "lorum ipsum",
  movie_banner="https://placekitten.com/500/500",
  id=1,
}) => {
  return <CardCont onClick={()=>{
    //use the id to route to the proper page
    router.push("/film/" + id)
  }}>
    <HeaderCont>
      <HeaderImg src={movie_banner} />
      <CardHeader>{title}</CardHeader>
    </HeaderCont>
    <CardBody>
      {description.substr(0,200)} ...
    </CardBody>
  </CardCont>
}

export default Card;