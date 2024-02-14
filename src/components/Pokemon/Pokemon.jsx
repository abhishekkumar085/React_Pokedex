import React from 'react';
import './Pokemon.css';
import { Link } from 'react-router-dom';
const Pokemon = ({ name, image, id }) => {
  console.log(id);
  console.log('name', name);
  return (
    <div className="pokemon">
      <Link to={`/pokemon/${id}`}>
        <div className="pokemon-name">{name}</div>
        <div>
          <img className="pokemon-image" src={image} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Pokemon;
