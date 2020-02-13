import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  const navLinks = {
    textAlign: 'center',
    paddingTop: '3%'
  }

  const hrStyle = {
    marginTop: "5%"
  }

  return(
      <div style={navLinks}>
        <p> <Link to='/aboutus'>About Us | <Link to='/careers'>Careers</Link> | </Link> <Link to='/'>Our Team</Link> | <Link to='/locations'>Locations</Link> <hr style={hrStyle}/></p>
      </div>
  );
}
