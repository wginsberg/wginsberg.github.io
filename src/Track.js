import React from 'react';

const Track = props => {
    const artistName = props.track.artists.map(artist => artist.name).join(', ');
    return <p>
        {props.track.name} - {artistName}
    </p>
}

export default Track;
