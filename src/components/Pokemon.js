import React from 'react';

const Pokemon = (props) => {

    return(
        
        <li className="pokemonList__pokemon">
            <div className="pokemonList__pokemon-info">
                <h2>{props.pokemonName}</h2>
                <img src={props.imgSrc} alt={props.pokemonName}/>
                <ul className="types">
                  {/*Aquí recibo por props el array que voy a iterar que contiene los tipos de pokemon*/}
                  {props.pokemonTypes.map((typePokemon,index) => 
                    <li key={index}>
                      {typePokemon}
                    </li>
                    )}
                    </ul>
                  </div>
                </li>
              )
            }
            






export default Pokemon;