import React, { useEffect, useState } from "react";
import cards_data from "../assets/cards/Cards_data";
import ScrollContainer from "react-indiana-drag-scroll";
import axios from "axios";

const TitleCards = ({ title, category}) => {

  const [apiData, setApiData] = useState([])

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWUwYzIxODIxYjg1MjhlNWI5ZTQ0ZmY5YjMyMTlmZiIsIm5iZiI6MTc4Mjk3MjcyNC4zNDQsInN1YiI6IjZhNDYwMTM0MGQ3MzZhOGM4YTVlYzk5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKQcRaOAmKVbLdlt38vkPMeFusDDLKWcwr_NjxVnsow'
  }
};



useEffect(() => {
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
}, [])

  return (
    <>
      <div className="mt-12 mb-8">
        <h2 className="mb-2 font-semibold text-xl">{title ? title : "Popular on Netflix"}</h2>
        <ScrollContainer className="flex gap-4 overflow-x-scroll scrollbar-none">
          {apiData.map((item, index) => (
            <div className="relative shrink-0" key={index}>
              <img
                className="w-60 rounded-sm cursor-pointer"
                src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path}
                alt={item.original_title}
              />
              <p className="absolute bottom-2 right-2 font-medium">
                {item.original_title}
              </p>
            </div>
          ))}
        </ScrollContainer>
      </div>
    </>
  );
};

export default TitleCards;
