import React from 'react';

const PlayerInfo = (props) => {
    const selectPlayer = props.selectPlayer;
    console.log(selectPlayer);
    let totalSalary = 0;
    for (let i = 0; i < selectPlayer.length; i++) {
        const player = selectPlayer[i];
        totalSalary = totalSalary + player.salary;
    }
    return (
        <div>
            <p>Total Salary: {totalSalary}</p>
        </div>
    );
};

export default PlayerInfo;