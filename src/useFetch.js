import { useState, useEffect } from "react";

function useFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const baseUrl = "https://restcountries.com/v3.1/";
    fetch(`${baseUrl}/all`)
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return data;
}

export default useFetch;
