import React from "react";

function Card({ id, name, population, region, capital, imgSrc, findCountry }) {
  return (
    <div className="card-container" onClick={() => findCountry(id)}>
      <img src={imgSrc} alt={`${name} national flag image`} />
      <div className="card-info">
        <h2>{name}</h2>
        <br />
        <p>
          Population:{" "}
          <span className="info-font"> {population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span className="info-font"> {region}</span>
        </p>
        <p>
          Capital: <span className="info-font">{capital}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
