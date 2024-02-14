import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PokemonDetails.css';
function PokemonDetails() {
  const [pokemon, setPokemon] = useState({});

  let { id } = useParams();
  console.log(id, 'it is come from pokemon details page');

  async function downloadPokemonDetails() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`); //'https://pokeapi.co/api/v2/pokemon/2'
    console.log(response.data);
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.front_default,
      weight: response.data.weight,
      height: response.data.height,
      types: response.data.types.map((t) => t.type.name),
    });
  }

  useEffect(() => {
    downloadPokemonDetails();
  }, []);

  return (
    <div className="pokemon-details-wrapper">
      <img className="pokemon-details-image" src={pokemon.image} />
      <div className="pokemon-details-name">
        <span>{pokemon.name}</span>
      </div>
      <div className="pokemon-details-height">height:{pokemon.height}</div>
      <div className="pokemon-details-weight">weight:{pokemon.weight}</div>
      <div className="pokemon-details-types">
        {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
      </div>
    </div>
  );
}

export default PokemonDetails;
