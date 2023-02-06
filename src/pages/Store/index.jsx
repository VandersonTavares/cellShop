import React, { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";

import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { setItem, getItem } from "../../services/LocalStorage";
import Alert from "../../components/Alert";

const Container = styled.div`
  margin-left: 60px;

  h1{
    padding: 20px;
  }
  
`

const StoreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 30px;
  margin-bottom: 60px;
  justify-content: center;
  align-items: center;

  div {
    height: 320px;
    width: 250px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  button {
    font-size: 20px;
    width: 30px;
    
    
  }
`;

function Store() {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState(getItem("carrinho") || []);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.mercadolibre.com/sites/MLB/search?q=celular")
      .then((response) => {
        console.log(response.data.results);
        setList(response.data.results);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handleClick = (obj) => {
    const element = cart.find((item) => item.id === obj.id);

    if (element) {
      const arrFilter = cart.filter((item) => item.id !== obj.id);
      setCart(arrFilter);
      setItem("carrinho", arrFilter);

      setIsRemoved(true);

      setTimeout(function () {
        setIsRemoved(false);
      }, 1000);
    } else {
      setCart([...cart, obj]);
      setItem("carrinho", [...cart, obj]);
    }
  };

  return (
    <Container>
      {isRemoved && <Alert />}
      <h1>Página Stores</h1>
      
      <hr />
      <StoreContainer>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <h4>{item.title}</h4>
              <img src={item.thumbnail} alt="img-pic" />
              <h4>
                R$
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h4>
              <button
                onClick={() => {
                  handleClick(item);
                }}
              >
                {cart.some((itemCart) => itemCart.id === item.id) ? (
                  <BsFillCartCheckFill />
                ) : (
                  <BsFillCartPlusFill />
                )}
              </button>
            </div>
          );
        })}
      </StoreContainer>
    </Container>
  );
}
export default Store;
