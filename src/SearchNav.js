import React from "react";

export default function SearchNav({
  query,
  setQuery,
  region,
  setRegion,
  fetchQuery,
}) {
  return (
    <div>
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
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    </div>
  );
}
