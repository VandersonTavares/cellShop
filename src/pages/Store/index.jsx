import axios from "axios";
import React, { useEffect, useState } from "react";

const Store = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.mercadolibre.com/sites/MLB/search?q=celular")
      .then((response) => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div>
      <h1>Store</h1>
      <div>
        {data.map((e) => {
          return (
            <div key={e.id}>{e.title} <img src={e.thumbnail} alt="celphone-pic"/></div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
