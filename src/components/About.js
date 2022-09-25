import React from "react";
import Links from './Links';
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>Put the bio in here</p> */}
     {/* if(props.bio){
      
       <p>{props.bio}</p>
     }else{
      null
     } */}
       {props.bio ? <p>{props.bio}</p> : null}
      {/* add your <Links /> component here */}
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    
    </div>
  );
}

export default About;
