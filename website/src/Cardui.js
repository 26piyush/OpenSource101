import React from "react";
import "./cardui.css";

function Cardui({ name, game, lang, color }) {
  const url = `https://github.com/${name}`;
  return (
    <div className="fadein">
      <div className="card card1" >
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="container">
            <img
              className="imgc"
              src={`https://avatars.githubusercontent.com/${name}`}
              alt={`of ${name}`}
            />
          </div>
          <div className="details">
            <h3>{name}</h3>
            <h4>Favorites:</h4>
            <p>
            Game : {game} </p>
             <p> Language : {lang} </p>
             <p> Color : {color} &nbsp;{" "}
              <span style={{ backgroundColor: `${color}`, color: `${color}`}}>
                Oo
              </span>
            </p>
            {/* <CustomizedDialogs title = {heading} codepenhash = {codepenhash}/> */}
          </div>
        </a>
      </div>
    </div>
  );
}

export default Cardui;
