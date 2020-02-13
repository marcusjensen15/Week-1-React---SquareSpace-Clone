import React from 'react';
import PropTypes from 'prop-types';

export default function Profile(props){
  var profileTextStyle = {
    fontSize: '16px',
    float: 'right',
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%'
  }
  var imageStyles = {

    height: '30vh',
    float: 'left',
    paddingRight: '5%'

  }

  return(
    <div>
      <div style={profileTextStyle}>
        <img style={imageStyles} src={props.image}></img>
        <h3>{props.name}</h3>
        <h4>{props.jobTitle}</h4>
        <p>{props.bio}</p>

      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.element
}
