import React from 'react';
import styles from './DrumKit.module.css';
import DrumPad from '../DrumPad/DrumPad';
import crnch from '../../sounds/crnch.mp3';
import hh from '../../sounds/hh.mp3';
import kiiiick from '../../sounds/kiiiick.mp3';
import kik from '../../sounds/kik.mp3';
import snare from '../../sounds/snare.mp3';

const DrumKit = (props) => (
    <div className={styles.drumKit}>
        <DrumPad source={kik} playSound={props.playSound} playing={false} inst="kick"/>
        <DrumPad source={snare} playSound={props.playSound} playing={false} inst="snare"/>
        <DrumPad source={hh} playSound={props.playSound} playing={false} inst="hat"/>
        <DrumPad source={crnch} playSound={props.playSound} playing={false} inst="crunch"/>
    </div>
)

export default DrumKit;