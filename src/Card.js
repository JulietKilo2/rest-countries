import React from "react";

function Card({ name, population, region, capital, imgSrc }) {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={`${name} national flag image`} />
      <div className="card-info">
        <h2>{name}</h2>
        <br />
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
}

export default Card;
