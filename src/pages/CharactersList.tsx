import React, { FunctionComponent } from "react";
import { useQuery, gql } from "@apollo/client";
import useCharacters from "../hooks/useCharacters";
import { Link } from "react-router-dom";

const CharactersList: FunctionComponent = () => {
  const { error, loading, data } = useCharacters();
  console.log({ error, loading, data });
  if (loading) return <div>spinner</div>;
  if (error) return <div>Something went wrong</div>;

  const displayCharacters = (): JSX.Element[] => {
    return data.characters.results.map((character: any) => {
      return (
        <React.Fragment key={character.id}>
          <Link to={`/${character.id}`}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </Link>
        </React.Fragment>
      );
    });
  };

  return <div className="characterList">{displayCharacters()}</div>;
};

export default CharactersList;
