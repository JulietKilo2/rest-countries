import React from "react";
import Card from "./Card";

export default function List({ displayedList }) {
  return (
    <div>
      <main>
        {displayedList.map((country) => {
          return (
            <Card
              key={country.cca3}
              id={country.cca3}
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
