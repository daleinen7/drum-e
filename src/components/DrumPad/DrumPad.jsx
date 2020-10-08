import React from 'react';
import styles from './DrumPad.module.css';

const DrumPad = (props) => (
    <div
        className = {styles.drumPad}
    >
        {props.inst}
    </div>
)

export default DrumPad;