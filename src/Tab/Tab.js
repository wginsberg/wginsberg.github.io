import React from 'react';
import classnames from 'classnames';
import classes from './Tab.module.css';

const Tab = (props) => {
  const { album: { images: [{ url: imageURL }] } } = props.track;
  const { url } = props;
  const { title } = props.tab;
  const { name: artistName } = props.tab.artist;

  const siteName = new URL(url).hostname;

  return (
    <div className={classnames([classes.Tab, 'max-w-sm rounded overflow-hidden shadow-lg'])}>
      <a href={url}>
        <img alt={siteName} src={imageURL} className="w-full" />
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="font-light text-xl mb-2">{artistName}</div>
      </a>
    </div>
  );
};

export default Tab;
