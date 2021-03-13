import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { CharContainer } from "./Styled";

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

const Home = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    window
      .fetch("/api/character")
      .then((response) => response.json())
      .then(({ data }) => {
        setCharacterList(data);
      });
  }, []);

  return (
    <CharContainer>
      <h1>Hi everyone!</h1>
      {characterList.map((character, id) => (
        <Link key={id} href={`/character/${id}`} passHref>
          <Card
            image={character.image}
            header={character.name}
            meta={character.species}
            description={character.gender}
          />
        </Link>
      ))}
    </CharContainer>
  );
};

export default Home;
