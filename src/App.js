import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Details from "./Details";

function App() {
  const [countryList, setCountryList] = useState([]);

  const fetchData = async () => {
    const baseUrl = "https://restcountries.com/v3.1/";
    const response = await fetch(`${baseUrl}/all`);
    const data = await response.json();
    setCountryList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Where in the world?</h1>
        <div className="darkmode-container">
          <span>
            <i className="far fa-moon"></i>
          </span>
          <span>Dark Mode</span>
        </div>
      </header>
      <section>
        <div className="search-input">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div className="filter-input">
          <select name="" id="">
            <option value="">Filter by Region</option>
            <option value="">Africa</option>
            <option value="">America</option>
            <option value="">Asia</option>
            <option value="">Europe</option>
            <option value="">Oceania</option>
          </select>
        </div>
      </section>
      <main>
        {countryList.map((country) => {
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
