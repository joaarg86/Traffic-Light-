import React, { isValidElement } from "react";
//import { render } from "react-dom/cjs/react-dom.production.min";
import { useState, useEffect } from "react";
//import "./styles.css";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [isGlow, setIsGlow] = useState(false);
  const [isLit, setIsLit] = useState(false);



  return (
    <div>
      <div className="TrafficTop"></div>

      <div className="BigBox container rounded-5">
        <div
          className={"red light selected"}
          style={{
            boxShadow: isActive ? "#f8ffcf 0px 0px 50px 20px" : "",
            background: isActive ? 'salmon' : 'red',
          }}
          onClick={()=>{setIsActive(!isActive)}} 
        ></div>

        <div
          className={"yellow light selected"}
          style={{
            boxShadow: isGlow ? "#f8ffcf 0px 0px 50px 20px" : "",
            background: isGlow ? 'yellow' : 'orange',
          }}
          onClick={()=>{setIsGlow(!isGlow)}} 
        ></div>

        <div
          className={"green light selected"}
          style={{
            boxShadow: isLit ? "#f8ffcf 0px 0px 50px 20px" : "",
            background: isLit ? '' : 'green',
          }}
          onClick={()=>{setIsLit(!isLit)}}
        ></div>
      </div>
    </div>
  );
};

export default Home;
