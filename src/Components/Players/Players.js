import React from 'react';
import Css from './Players.css';

const Players = (props) => {
    const {image, name, salary,} = props.player;
    const playerStyle = {border: "1px solid white", margin: "10px", padding: "10px" }
    const imageStyle= {width: "250px", height: "250px"}
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="playersDiv" style={playerStyle}>
            <img style={imageStyle} src={image} alt=" "/>
            <h3>{name}</h3>
            <p>Salary: {salary}</p>
            <button onClick = {() => handleAddPlayer(props.player)}> Add Player </button>
        </div>
    );
};

export default Players;