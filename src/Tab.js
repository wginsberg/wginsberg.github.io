import React from 'react';

const Tab = props => {
    const href = `http://www.songsterr.com/a/wa/song?id=${props.tab.id}`;

    return <p>
        <a href={href}>
            {props.tab.title} - {props.tab.artist.name}
        </a>
    </p>
}

export default Tab;
