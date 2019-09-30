import React from 'react';

const Tab = props => {
    const href = `http://www.songsterr.com/a/wa/song?id=${props.tab.id}`;

    return <a href={href}>
        {props.tab.title} - {props.tab.artist.name}
    </a>
}

export default Tab;
