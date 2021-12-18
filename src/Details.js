import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";

function Details({ detailsInfo }) {
  const history = useHistory();
  return (
    <div className="details">
      <button onClick={() => history.goBack()}>Back</button>
      <div className="details-container">
        <img src="" alt="" />
        <div className="details-info">
          <h3>{detailsInfo.name.common}</h3>
          <p>Official Name: {detailsInfo.name.official}</p>
          <p>Population: {detailsInfo.population.toLocaleString()}</p>
          <p>Region: {detailsInfo.region}</p>
          <p>Sub Region: {detailsInfo.subregion}</p>
          <p>Capital: {detailsInfo.capital}</p>
          <p>Top Level Domain: </p>
          <p>Currencies: </p>
          <p>Languages: </p>
          <div className="details-border">
            <p>Border Countries:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
