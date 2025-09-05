import React from 'react'
import * as Tone from 'tone'

const ToneWrapper = () => {

    const synth = new Tone.Synth().toDestination();

    const playKey = (e) => {
        e.preventDefault;
        synth.triggerAttackRelease("C4", "8n");
    }

    return (
        <button onClick={playKey}>TONE ZONE</button>
    )
}

export default ToneWrapper


