import React, { createRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';

export default function Try() {
  const refAudio = createRef();
  console.log(refAudio);
  return (
    <div>
      <AudioPlayer
        ref={refAudio}
        autoPlay
        src="https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/8"
        onPlay={(e) => console.log(refAudio)}
      />
      <div>
        <button onClick={(e) => refAudio.current.togglePlay(e)}>Play</button>
      </div>
    </div>
  );
}
