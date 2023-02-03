import React, { useState } from "react";
import styled from "styled-components";
import { getItem, setItem } from "../../services/LocalStorage";

import { BsFillCartDashFill } from "react-icons/bs";


const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    gap: 30px;
    margin-bottom: 60px;
    justify-content: center;
    align-items: center;

    div{
        height: 320px;
        width: 250px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

    }
    button{
        font-size: 20px;
        /* border: none;
        background-color: transparent; */
    }
`

function Cart() {

    const [data, setData] = useState(getItem('carrinho') || []);

    const subTotal = data.reduce((acc, curr) => acc + curr.price, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    function removeItem(obj) {
        const arrFilter = data.filter((item) => item.id !== obj.id);
        setData(arrFilter);
        setItem('carrinho', arrFilter);
    }

    return (
        <div>
            <h1>Página Carrinho</h1>
            <hr />
            <h3>Subtotal: {subTotal}</h3>
            <ProductContainer>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h4>{item.title}</h4>
                            <img src={item.thumbnail} alt="img-pic" />
                            <h4>R${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
                            <button onClick={() => removeItem(item)}>
                                <BsFillCartDashFill />
                            </button>
                        </div>
                    )
                })}
            </ProductContainer>
        </div>
    )
}
export default Cart