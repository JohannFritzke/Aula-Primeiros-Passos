import React from "react";
import { TimerBox } from "./TimerBox";
import './Timer.css'

export function Timer(props) {
    return (
        <div className="timer"> 
            <h3>{props.menssage}</h3>
            <div className="timer-content">
                <TimerBox title="Ano" value={props.year} />
                <TimerBox title="Mes" value={props.month} />
                <TimerBox title="Dia" value={props.day} />
                <TimerBox title="Hora" value={props.hour} />
                <TimerBox title="Minuto" value={props.minutes} />
                <TimerBox title="Segundo" value={props.seconds} />
            </div>
        </div>
    )
}