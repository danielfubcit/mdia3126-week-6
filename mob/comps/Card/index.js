import styled from 'styled-components/native';
import React from 'react';

const CardCont = styled.View`
  min-width:200px;
  max-width: 350px;
  flex-direction:column;
`;

const HeaderCont = styled.View`
  background-color:#eeeeee;
  position:relative;
  min-height:200px;
`

const HeaderImg = styled.Image`
  width:100%;
  height:100%;
  resize-mode:cover;
  position:absolute;
  left:0;
  top:0;
  z-index:0;
`;

const CardHeader = styled.Text`
  font-size:24px;
  z-index:999;
  position:relative;
  padding:10px;
  background-color:#FFFFFF;
`

const CardBody = styled.Text`
  font-size:18px;
  padding:10px;
`;

const Card = ({
  title= "Title",
  description= "lorum ipsum",
  movie_banner="https://placekitten.com/500/500",
  id=1,
}) => {
  return <CardCont>
    <HeaderCont>
      <HeaderImg source={{uri:movie_banner}} />
      <CardHeader>{title}</CardHeader>
    </HeaderCont>
    <CardBody>
      {description.substr(0,200)} ...
    </CardBody>
  </CardCont>
}

export default Card;
