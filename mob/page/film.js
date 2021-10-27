import React, { useState, useEffect } from "react";
import Details from "../comps/Details";
import axios from "axios";
import styled from "styled-components/native";

const FilmCont = styled.ScrollView`
    padding: 5px;
`

const fakeData = {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "movie_banner":"https://placekitten.com/500/500",
    "title": "Castle in the Sky",
    "original_title": "天空の城ラピュタ",
    "original_title_romanised": "Tenkū no shiro Rapyuta",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "running_time": "124",
    "rt_score": "95",
    "people": [
      "https://ghibliapi.herokuapp.com/people/"
    ],
    "species": [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
    ],
    "locations": [
      "https://ghibliapi.herokuapp.com/locations/"
    ],
    "vehicles": [
      "https://ghibliapi.herokuapp.com/vehicles/"
    ],
    "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
  }

export default function Film({ route, navigation }){

    const {id} = route.params;  //named id
    const [film, setFilm] = useState(fakeData);
    
    useEffect(()=>{
        if(id){  //if this id exist
            const GetFilmsById = async()=>{
                const result = await axios.get("https://ghibliapi.herokuapp.com/films/" + id)
                console.group(result);
                setFilm(result.data)
            }
            GetFilmsById();
        }
    }, [id])  //pass the id to the useEffect

    return <FilmCont>
        <Details
            movie_banner={film.movie_banner}
            title= {film.title}
            description = {film.description}
            original_title = {film.original_title}
            original_title_romanised = {film.original_title_romanised}
            director = {film.director}
        />
    </FilmCont>
}