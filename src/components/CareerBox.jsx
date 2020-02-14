import React from 'react';
import PropTypes from 'prop-types';

export default function CareerBox(props){

  const box = {
    color: 'grey',
    padding: '20px',
    fontSize: '150%',
    border: '1px solid grey'
  }

  const openingStyle = {
    fontSize: '70px',
    color: 'rgb(227, 230, 228)'
  }

  const careerField = {
    color: 'black'
  }

  const location = {
    fontSize: '14px',
    color: 'rgb(115, 115, 115)'
  }

  return(
    <div style={box}>
      <p style={openingStyle}>{props.openings}</p>
      <p style={careerField}>{props.field}</p>
      <p style={location}>{props.location}</p>
    </div>
  );
}

CareerBox.propTypes = {
  openings: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}
