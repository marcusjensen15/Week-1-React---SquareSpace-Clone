import React from 'react';
import CareerBox from './CareerBox';
import PropTypes from 'prop-types'

export default function Careers(){
  const wrapper = {
  display: 'grid',
  gridTemplateColumns: '25% 25% 25%',
  gridGap: '20px',
  backgroundColor: '#fff',
  color: '#444'
}

const outerContainer = {
  height: '100%',
  backgroundColor: 'red',
  marginLeft: '25%',
  marginRight: '5%'
}
  return(
    <div style={outerContainer}>
      <div style={wrapper}>
        <CareerBox
          openings='9'
          field="Creative & Design"
          location="New York"/>
        <CareerBox
          openings='2'
          field="Customer Operations"
          location="Dublin"/>
        <CareerBox
          openings='20'
          field="Engineering"
          location="New York / Dublin / Portland"/>
        <CareerBox
          openings='4'
          field="Finance"
          location="New York"/>
        <CareerBox
          openings='0'
          field="Legal"
          location="Learn More"/>
        <CareerBox
          openings='5'
          field="Marketing"
          location="New York"/>
        <CareerBox
          openings='6'
          field="People"
          location="New York"/>
        <CareerBox
          openings='3'
          field="Product"
          location="New York"/>
        <CareerBox
          openings='2'
          field="Security"
          location="New York"/>
      </div>
    </div>
  );
}
