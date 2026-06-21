import React from 'react'

const PokemonAbility = ({ abilityName, isHidden = false }) => (
  <div className="pokemon-ability">
    <div className="pokemon-ability-type">
      {isHidden ? 'Hidden ability' : 'Ability'}
    </div>
    <div className="pokemon-ability-name">
      {abilityName}
    </div>
  </div>
)

export default PokemonAbility
