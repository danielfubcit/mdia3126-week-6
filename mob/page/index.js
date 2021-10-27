import styled from 'styled-components/native';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Card from '../comps/Card';


const Cont = styled.ScrollView`
`

const CardWrpper = styled.TouchableOpacity`
  margin: 10px;
`

// movie_banner
// title
// descroption

const fakeData = [{
  id:1,
  title:"Test Title 1",
  description: "Test DESC 1",
  movie_banner:"https://placekitten.com/1000/1000",
},{
  id:2,
  title:"Test Title 2",
  description: "Test DESC 2",
  movie_banner:"https://placekitten.com/1200/1200",
}]

export default function Home({navigation}) {
  const [films, setFlims] = useState(fakeData);

  useEffect(()=>{
    const GetFilms = async()=>{
      const result = await axios.get("https://ghibliapi.herokuapp.com/films");
      console.log(result);
      //data from result will provide an array of films
      setFlims(result.data);
    }

    GetFilms();
  },[])


  return (
    <Cont>
      {
        films.map((o,i,)=>(
          <CardWrpper onPress={()=>navigation.navigate("Film", {id:o.id})} key={i}>
            <Card id={o.id} title={o.title} description={o.description} movie_banner={o.movie_banner}/>
          </CardWrpper>
        )
      )
    }
    </Cont>
  )
}
