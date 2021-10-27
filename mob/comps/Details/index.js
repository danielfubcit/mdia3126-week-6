import styled from 'styled-components/native';
import React from 'react';

const DetailsCont = styled.View`
  flex-direction: column;
`;

const LeftCont = styled.View`
  flex:1;
  padding:10px;
`;

const MovieImg = styled.Image`
  width:100%;
  height:300px;
  resize-mode:cover;
  border-radius:10px;
`;

const RightCont = styled.View`
  flex:2;
  flex-direction:column;
`;

const TextCont = styled.View`
  flex-direction:column;
  margin:10px;
`;

const Header = styled.Text`
  font-size:24px;
`;

const SubHeader = styled.Text`
  font-size:18px;
`;

const Details = ({
  movie_banner="https://placekitten.com/500/500",
  title= "Actual Movie Title",
  description = "Actual Movie description",
  original_title = "original_title",
  original_title_romanised,
  director,

}) => {

  return <DetailsCont>
    <LeftCont>
      <MovieImg source={{uri:movie_banner}} />
    </LeftCont>
    <RightCont>
      <TextCont>
        <Header>Title</Header>
        <SubHeader>{title}</SubHeader>
      </TextCont>
      <TextCont>
        <Header>Description</Header>
        <SubHeader>{description}</SubHeader>
      </TextCont>
      <TextCont>
        <Header>Original Title</Header>
        <SubHeader>{original_title}</SubHeader>
        <SubHeader>{original_title_romanised}</SubHeader>
      </TextCont>
      <TextCont>
        <Header>Director</Header>
        <SubHeader>{director}</SubHeader>
      </TextCont>
    </RightCont>
  </DetailsCont>
}

export default Details;