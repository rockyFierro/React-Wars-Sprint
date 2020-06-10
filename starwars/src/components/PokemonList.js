import React from 'react'


/*
TODO:
-pass a destructured variable through as props ({ variable })
-loop through data with map
-pass a key on anything iterable....iterating

*/
export default function PokemonList({ pokemon }) {
    return (
        <div>
            {
                pokemon.map(el => (
                    <div key={el}>{el}</div>
                ))}
        </div>
    )
}
