import React from 'react';

const Tab = (props) => {
  const { album: { images: [{ url: imageURL }] } } = props.track;
  const {
    url, title: description, site_name: siteName,
  } = props.openGraphData.openGraph;
  const { title } = props.tab;
  const { name: artistName } = props.tab.artist;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <a href={url}>
        <img alt={siteName} src={imageURL} className="w-full" />
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="font-light text-xl mb-2">{artistName}</div>
        <span>{description}</span>
      </a>
    </div>
  );
};

export default Tab;
