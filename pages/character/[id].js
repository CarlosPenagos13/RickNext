import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";

const CharacterPage = () => {
  const [character, setCharacter] = useState([]);

  const { query } = useRouter();
  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/character/${query.id}`)
        .then((response) => response.json())
        .then((data) => setCharacter(data));
    }
  }, [query]);
  console.log(character);

  return (
    <section>
      <h1>Character page: </h1>
      <div>{character.name}</div>
    </section>
  );
};

export default CharacterPage;
