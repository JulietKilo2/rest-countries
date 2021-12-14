import "./App.css";

function App() {
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
      <main></main>
    </div>
  );
}

export default App;
