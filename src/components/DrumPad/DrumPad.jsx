import React from 'react';
import styles from './DrumPad.module.css';

const DrumPad = (props) => (
    <button
        className = {styles.drumPad}
        onClick = {(e)=> props.playSound(e, props.source)}
    >
        {props.inst}
    </button>
)

export default DrumPad;