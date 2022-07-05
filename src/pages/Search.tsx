import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;
const Search = () => {
  const [name, setName] = useState("");
  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  console.log({ called, loading, error, data });

  const renderLocations = (): JSX.Element[] => {
    return data?.characters.results.map((character: any, index: number) => {
      return <li key={index}>{character.location.name}</li>;
    });
  };
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}> Search</button>
      {loading && <div>Spinner</div>}
      {error && <div>Something went wrong...</div>}
      {renderLocations()}
    </div>
  );
};

export default Search;
