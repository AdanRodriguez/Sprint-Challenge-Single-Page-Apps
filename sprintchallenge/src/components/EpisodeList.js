import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

const EpisodeList = () => {
  
    const [state, setState] = useState([]);
    
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode/")
    .then(res => {
      console.log(res.data.results)
        setState(res.data.results);
    })
    .catch(err =>
        console.log(err))
  }, []);

  return (
    <section className="episode-list grid-view">
      <div>
          {state.map((episode) =>{
              return <EpisodeCard key={episode.id}
                                    name={episode.name}
                                    episode={episode.name}
                                    date={episode.air_date}
                      />
          })}
      </div>
    </section>
  );
};

export default EpisodeList;