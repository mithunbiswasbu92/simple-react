import React from 'react';

const Players = (props) => {
    console.log(props);
    const {image, name, salary,} = props.player;
    const countryStyle = {border: "1px solid white", margin: "10px", padding: "10px" }
    const imageStyle= {width: "250px", height: "250px"}
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div style={countryStyle}>
            <img style={imageStyle} src={image} alt=" "/>
            <h3>Player Name: {name}</h3>
            <p>Salary: {salary}</p>
            <button onClick = {() => handleAddPlayer(props.name)}> Add Player </button>
        </div>
    );
};

export default Players;