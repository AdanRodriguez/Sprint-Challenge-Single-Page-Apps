import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  
    const [state, setState] = useState([]);
    
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log(res.data.results)
        setState(res.data.results);
    })
    .catch(err =>
        console.log(err))
  }, []);

  return (
    <section className="character-list grid-view">
      <div id="cards">
          {state.map((character) =>{
              return <CharacterCard key={character.id}
                                    image={character.image}
                                    name={character.name}
                                    species={character.species}
                                    status={character.status}
                                    origin={character.origin.name}

                      />
          })}
      </div>
    </section>
  );
};

export default CharacterList;