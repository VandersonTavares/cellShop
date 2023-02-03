import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { setItem, getItem } from "../../services/LocalStorage";

const Store = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem('carinho') || []);

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

  function handleClick(obj){
    const element = cart.find((e)=> e.id === obj.id )
    if(element){
        const arrFilter = cart.filter((e)=> e.id !== obj.id)
        setCart(arrFilter);
        setItem('carrinho', arrFilter);
    }else{
        setCart([...cart, obj])
        setItem('carrinho', [...cart, obj]);
    }
  }

  return (
    <div>
      <h1>Store</h1>
      <hr />
      <div>
        {data.map((e) => {
          return (
            <div key={e.id}>
              <h4>{e.title}</h4>
              <img src={e.thumbnail} alt="celphone-pic" />
              <h4>R${e.price}</h4>
              <button onClick={()=> handleClick(e)}>
                {cart.some((itemCart) => itemCart.id === e.id) ? (
                  <BsFillCartCheckFill />
                ) : (
                  <BsFillCartPlusFill />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
