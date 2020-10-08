import React from 'react';
import styles from './DrumKit.module.css';
import DrumPad from '../DrumPad/DrumPad';

const DrumKit = (props) => (
    <div className={styles.drumKit}>
        <DrumPad inst="kick"/>
        <DrumPad inst="kick"/>
        <DrumPad inst="kick"/>
        <DrumPad inst="kick"/>
    </div>
)

export default DrumKit;