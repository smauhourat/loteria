import React from 'react';

import './Result.css';

const result = (props) => (
    <article key={props.id} className="Result" onClick={props.clicked}>
        <h1>{props.lotteryName}</h1>
        <div className="Info">
            <h1>{props.lotteryNumber}</h1>
            Serie: {props.lotterySerie}
            <div className="Author">Sorteo: {props.lotteryDrawNumber}</div>
            <div className="Author">{props.lotteryDate} {props.lotteryTime} hs</div>
        </div>
    </article>
);
export default result;