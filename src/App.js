import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Details from "./Details";
import useFetch from "./useFetch";

function App() {
  const [countryList, setCountryList] = useState([]);
  const [displayedList, setDisplayedList] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  const fetchAll = async () => {
    const baseUrl = "https://restcountries.com/v3.1/";
    const response = await fetch(`${baseUrl}/all`);
    const data = await response.json();
    setCountryList(data);
    setDisplayedList(data);
  };

  const fetchQuery = (e) => {
    e.preventDefault();
    setRegion("");
    const result = countryList.filter((country) => {
      const altSpells = country.altSpellings.map((item) => {
        return item.toLocaleLowerCase();
      });
      if (
        country.name.common.toLowerCase().includes(query.toLocaleLowerCase()) ||
        altSpells.includes(query.toLocaleLowerCase())
      ) {
        return country;
      }
    });
    setDisplayedList(result);
  };

  const fetchRegion = () => {
    if (region.length >= 1) {
      const newList = countryList.filter((country) => {
        return country.region === region;
      });
      setDisplayedList(newList);
    }
    return;
  };

  const resetList = () => {
    setDisplayedList(countryList);
    setQuery("");
    setRegion("");
  };

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    setQuery("");
    fetchRegion();
  }, [region]);

  return (
    <div className="app">
      <header>
        <h1 onClick={resetList}>Where in the world?</h1>
        <div className="darkmode-container">
          <span>
            <i className="far fa-moon"></i>
          </span>
          <span>Dark Mode</span>
        </div>
      </header>
      <section>
        <div className="search-input">
          <form
            onSubmit={(e) => {
              fetchQuery(e);
            }}
          >
            <button className="search-input-btn">
              <i className="fas fa-search"></i>
            </button>
            <input
              type="text"
              placeholder="Search for a country..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
        <div className="filter-input">
          <select
            name=""
            id=""
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
      <main>
        {displayedList.map((country) => {
          return (
            <Card
              key={country.cca3}
              name={country.name.common}
              population={country.population}
              region={country.continents[0]}
              capital={country.capital}
              imgSrc={country.flags.png}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
