import React, { FunctionComponent } from "react";
import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";
const Character = () => {
  const { id } = useParams();
  const { error, data, loading } = useCharacter(id);

  console.log({ data, error, loading });

  const renderCharacterData = (): JSX.Element => {
    return (
      <div>
        <img src={data.character.image} alt={data.character.name} />
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        {renderCharacterEpisodes()}
      </div>
    );
  };

  const renderCharacterEpisodes = (): JSX.Element[] => {
    return data.character.episode.map((episode: any) => {
      return (
        <React.Fragment key={episode.episode}>
          <div>
            {episode.name} - <b>{episode.episode}</b>
          </div>
        </React.Fragment>
      );
    });
  };

  if (error) return <div>Something went wrong</div>;
  if (loading) return <div>Spinner</div>;
  return <div>{renderCharacterData()}</div>;
};

export default Character;
