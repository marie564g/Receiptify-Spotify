import React, { useEffect, useState } from 'react';
import './Receipt.css';

function Receipt() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // Here you would fetch data from the Spotify API
    const sampleTracks = [
      'Track 1',
      'Track 2',
      'Track 3',
    ];
    setTracks(sampleTracks);
  }, []);

  return (
    <div className="receipt">
      <h2>Your Spotify Receipt</h2>
      {tracks.map((track, index) => (
        <div key={index} className="receipt-item">
          {track}
        </div>
      ))}
    </div>
  );
}

export default Receipt;
