import React from 'react';
import PropTypes from 'prop-types';

export default function CareerBox(props){

  const box = {
    color: 'grey',
    padding: '20px',
    fontSize: '150%',
    border: '1px solid grey'
  }
  return(
    <div style={box}>
      <p>{props.openings}</p>
      <p>{props.field}</p>
      <p>{props.location}</p>
    </div>
  );
}

CareerBox.propTypes = {
  openings: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}
