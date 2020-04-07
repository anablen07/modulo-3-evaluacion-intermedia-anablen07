import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
    return (
        <ul>
            <h1>Mi lista de Pokemon</h1>
            {props.dataList.map((pokemonObject, index) =>
                <Pokemon key={index}
                    imgSrc={pokemonObject.url}
                    pokemonName={pokemonObject.name}
                    pokemonTypes={pokemonObject.types}
                />
            )}
        </ul>
    )
}

export default PokeList;