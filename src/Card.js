import React from "react";
import { Link } from "react-router-dom";

function Card({ id, name, population, region, capital, imgSrc }) {
  return (
    <div className="card-container">
      <Link
        to={`/details/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
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
      </Link>
    </div>
  );
}

export default Card;
