import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function Details() {
  const country = useParams();
  const history = useHistory();
  const [detailsInfo, setDetailsInfo] = useState(null);
  const [langs, setLangs] = useState(null);
  const [curr, setCurr] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${country.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setDetailsInfo(data[0]);
      });
  }, []);

  useEffect(() => {
    if (detailsInfo) {
      let arr = [];
      for (let x in detailsInfo.languages) {
        arr.push(detailsInfo.languages[x]);
      }
      setLangs(arr);
      setCurr(Object.keys(detailsInfo.currencies));
    }
    return;
  }, [detailsInfo]);

  return (
    <div className="details">
      <button className="details-back-btn" onClick={() => history.goBack()}>
        <i className="fas fa-long-arrow-alt-left"></i>
        Back
      </button>
      {detailsInfo && (
        <div className="details-container">
          <img
            src={detailsInfo.flags.png}
            alt={`flag of ${detailsInfo.name.common}`}
          />
          <div className="details-info">
            <div className="details-text-container">
              <h3>
                <span>{detailsInfo.name.common}</span>
              </h3>
              <p className="details-text">
                Official Name: <span>{detailsInfo.name.official}</span>
              </p>
              <p className="details-text">
                Population:{" "}
                <span>{detailsInfo.population.toLocaleString()}</span>
              </p>
              <p className="details-text">
                Region: <span>{detailsInfo.region}</span>
              </p>
              <p className="details-text">
                Sub Region: <span>{detailsInfo.subregion}</span>
              </p>
              <p className="details-text">
                Capital: <span>{detailsInfo.capital}</span>
              </p>
              <p className="details-text">
                Top Level Domain: <span>{detailsInfo.tld}</span>
              </p>
              <p className="details-text">
                Currencies: <span>{curr && curr.join(", ")}</span>
              </p>
              <p className="details-text">
                Languages: <span>{langs && langs.join(", ")}</span>
              </p>
            </div>
            <div className="details-border">
              <p>Border Countries:</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
