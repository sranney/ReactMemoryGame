import React, { Component } from "react";
import CharacterCard from "./components/characterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters
  };
  score=0;
  maxScore=0;
  Clicked = id => {    
    const characters = this.state.characters.map(character => {
      if (character.id===id){
        if(character.clicked===false){  //new character card clicked
          character.clicked=true;
          this.score++;
          if(this.score>this.maxScore){
            this.maxScore=this.score;
          }
        } else {//character card that was clicked is clicked again - reset score
          this.resetGame();
        }
      }
      return character;
    });
    // Set this.state.characters equal to the new characters array
    this.setState({ characters });
  };

  resetGame = () =>{//for resetting game when the player has clicked a card they already clicked in a game
    this.score = 0;
    const characters = this.state.characters.map(character =>{
      character.clicked=false;
      return character;
    })
  }

  shuffle = (array)=> {//Fisher-Yates shuffle - for shuffling cards whenever characters are re-rendered to screen
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Map over this.state.characters and render a CharacterCard component for each character object
  //note that the App class's Clicked function is passed as a props param
  render() {
    return (
      <div>
      <Title>Current Game Score: {this.score} | Max Score: {this.maxScore}</Title>
      <Wrapper>
        {this.shuffle(this.state.characters).map(character => (
          <CharacterCard
            Clicked={this.Clicked}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
