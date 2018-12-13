import React from 'react';

const CowDescription = (props) => (
  <li>name: {props.cow.name} description: {props.cow.description}</li>
)

export default CowDescription;