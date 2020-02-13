import React from 'react';
import Profile from './Profile';

// Images
import AnthonyCasalena from './../images/anthony-casalena.jpg';
import NicoleAnasenes from './../images/NicoleAnasenes.jpg';
import AndrewBartholomew from './../images/AndrewBartholomew.jpg';
import JohnColton from './../images/JohnColton.jpg';
import RaphaelFontes from './../images/RaphaelFontes.jpg';

export default function TeamProfile(){

  const textCenter = {
    textAlign: 'center'
  }
  
  return(
    <div>
      <h1 style={textCenter}>Executive Team</h1>
      <Profile
        name= "Anthony Casalena"
        jobTitle= "FOUNDER & CHIEF EXECUTIVE OFFICER"
        bio= "Anthony Casalena is the Founder and CEO of Squarespace, which he started from his dorm room in 2003. During the company’s early years, Anthony acted as the sole engineer, designer, and support representative for the entire Squarespace platform. In addition to running the company and setting overall product strategy, he remains actively involved in many departments of the company that he had previously run himself. Anthony holds a Bachelor of Science in Computer Science from the University of Maryland."
        image={AnthonyCasalena}
        />
      <Profile
        name= "Nicole Anasenes"
        jobTitle= "CHIEF FINANCIAL OFFICER & CHIEF OPERATING OFFICER"
        bio= "Nicole brings to Squarespace 20 years of experience building new businesses and transforming legacy business models. Most recently, she served as Chief Financial Officer at Infor, one of the largest providers of enterprise applications in the world. Prior to Infor, Nicole spent 17 years in various operational and financial leadership positions within IBM’s Cloud Computing, Global Services, and Software organizations. She holds an MBA from The Wharton School of the University of Pennsylvania and a Bachelor’s degree from New York University."
        image={NicoleAnasenes}
        />
      <Profile
        name= "Andrew Bartholomew"
        jobTitle= "SENIOR VICE PRESIDENT, STRATEGY"
        bio= "As the leader of Squarespace’s Strategy division, Andrew is responsible for developing the analytical frameworks that shape the company’s business. Since joining Squarespace, he has grown the division into a team that covers everything from business strategy and customer insights to analytics and data science. Prior to Squarespace, Andrew worked at the New York County District Attorney’s Office helping to shape the office’s new data-driven approach to fighting crime. Andrew graduated from Yale, where he majored in Psychology and was an editor at the Yale Daily News."
        image={AndrewBartholomew}
        />
      <Profile
        name= "John Colton"
        jobTitle= "SENIOR VICE PRESIDENT, ENGINEERING"
        bio= "John Colton, SVP of Engineering, oversees Squarespace’s vast engineering organization which drives the core programming for the company. Before joining Squarespace, John served in senior leadership roles at a number of organizations including database security vendor Application Security, business and service assurance vendor Micromuse, and videoconferencing vendor VisualScape. John began his engineering career at Cap Gemini America where he developed network management products for AT&T Network Systems. He received his B.S. in Computer Engineering from Lehigh University."
        image={JohnColton}
        />
      <Profile
        name= "Raphael Fontes"
        jobTitle= "VICE PRESIDENT, CUSTOMER OPERATIONS"
        bio= "Rapha leads Squarespace Ireland and oversees the company’s global Customer Operations teams that support millions of Squarespace users. Prior to this role, Raphael spent eight years at Google developing and managing different operations teams in Brazil, Argentina, Poland and Ireland. A Brazil native, he has 20+ years of experience in the tech world, working in a number of marketing and strategy positions in multinational companies such as FCBi, BellSouth, and Realmedia 24/7. Raphael is a mechanical engineer by trade with an MBA in Marketing."
        image={RaphaelFontes}
        />
    </div>
  );
}
