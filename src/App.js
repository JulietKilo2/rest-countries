import { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import List from "./List";
import Details from "./Details";
import "./App.css";
import SearchNav from "./SearchNav";

function App() {
  const [countryList, setCountryList] = useState(null);
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
    // This function does:
    // 1. looks for countries that includes the query value in their 'common' names.
    // 2. checks if the query value also matches some of the 'alternative' names.
    // *'common' and 'alternative' values are preset values of REST countries API.*
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
    // This function changes the list of countries to be displayed based on region.
    if (region === "All") {
      setDisplayedList(countryList);
    } else if (region.length >= 1) {
      const newList = countryList.filter((country) => {
        return country.region === region;
      });
      setDisplayedList(newList);
    }
    return;
  };

  const resetList = () => {
    // This function gets triggered when user clicks on the title.
    setDisplayedList(countryList);
    setQuery("");
    setRegion("");
  };

  useEffect(() => {
    // This useEffect fetches all data as the app runs for the first time.
    if (!countryList) {
      fetchAll();
    }
    return;
  }, []);

  useEffect(() => {
    // This useEffect is triggered when user changes regional filter.
    // It regets query and triggers the function that changes the list of countries based on filter result.
    setQuery("");
    fetchRegion();
  }, [region]);

  return (
    <div className="app">
      <header>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1 className="site-title" onClick={resetList}>
            Where in the world?
          </h1>
        </Link>
        {/* <div className="darkmode-container">
          <i className="far fa-moon"></i>
          Dark Mode
        </div> */}
      </header>
      <Switch>
        <Route exact path="/">
          <SearchNav
            query={query}
            setQuery={setQuery}
            region={region}
            setRegion={setRegion}
            fetchQuery={fetchQuery}
          />
          <List displayedList={displayedList} />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
