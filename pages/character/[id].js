import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { InformationContainer, ContainerCharacter } from "./styled";
import { Card } from "semantic-ui-react";

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
  }, [query.id]);
  console.log(character);

  return (
    <ContainerCharacter>
      <InformationContainer>
        <img src={character.image} />
        <Card
          link
          header={character.name}
          meta={character.species}
          description={[
            "Type: ",
            character.type,
            <br />,
            "Gender: ",
            character.gender,
            <br />,
            "Status: ",
            character.status,
          ]}
        />
      </InformationContainer>
    </ContainerCharacter>
  );
};

export default CharacterPage;
