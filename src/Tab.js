import React from 'react';

const Tab = (props) => (
  <a href={props.url}>
    <h3>{props.title}</h3>
    <img src={props.imageURL} />
    <span>{props.description}</span>
  </a>
);

export default Tab;
