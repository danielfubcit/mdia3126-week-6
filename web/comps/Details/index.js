import styled from 'styled-components';

const DetailsCont = styled.div`
  display:flex;
`;

const LeftCont = styled.div`
  flex:1;
  padding:10px;
`;

const MovieImg = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:10px;
`;

const RightCont = styled.div`
  flex:2;
  display:flex;
  flex-direction:column;
`;

const TextCont = styled.div`
  display:flex;
  flex-direction:column;
  margin:10px;
`;

const Header = styled.span`
  font-size:24px;
`;

const SubHeader = styled.span`
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
      <MovieImg src={movie_banner} />
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