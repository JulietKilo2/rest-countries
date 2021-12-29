import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const history = useHistory();
  const [detailsInfo, setDetailsInfo] = useState(null);
  const [langs, setLangs] = useState(null);
  const [curr, setCurr] = useState(null);
  const [border, setBorder] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetailsInfo(data[0]);
      });
  }, [id]);

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

  useEffect(() => {
    if (detailsInfo) {
      if (detailsInfo.borders) {
        let list = detailsInfo.borders.map((item) => item).join(",");
        fetch(`https://restcountries.com/v3.1/alpha?codes=${list}`)
          .then((res) => res.json())
          .then((data) => {
            setBorder(data);
          });
      }
      return;
    }
    return;
  }, [detailsInfo]);

  return (
    <div className="details">
      <button
        className="details-back-btn"
        onClick={() => {
          history.goBack();
        }}
      >
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
            {border && (
              <div className="details-border">
                <span className="border-title">Border Countries: </span>
                {border.map((item) => {
                  return (
                    <Link
                      to={`/details/${item.cca3}`}
                      style={{ textDecoration: "none", color: "black" }}
                      key={item.cca3}
                    >
                      <span className="border-country" key={item.cca3}>
                        {item.name.common}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
