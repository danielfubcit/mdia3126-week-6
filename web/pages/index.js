import styled from 'styled-components';
import axios from 'axios'
import Card from '@/comps/Card';
import { useState, useEffect } from 'react';


const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CardWrpper = styled.div`
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

export default function Home() {
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
          <CardWrpper key={i}>
            <Card id={o.id} title={o.title} description={o.description} movie_banner={o.movie_banner}/>
          </CardWrpper>
        )
      )
    }
    </Cont>
  )
}
