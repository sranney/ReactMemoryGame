import React from "react";

const CharacterCard = props => (
  //onClick is assigned the function passed from App to CharacterCard and has as the data passed, the id for the particular card
  <div onClick={() => props.Clicked(props.id)} className="character card center-align blue lighten-4">
    <div className="img-container">
      <img className="responsive-img" alt={props.name} src={props.image} />
    </div>
  </div>
);

export default CharacterCard;
