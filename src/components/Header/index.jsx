import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderArea = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: crimson;
    gap: 20px;
    font-weight: bold;
    color: white;
    padding: 20px;
    margin-bottom: 20px;
    
    a{
        text-decoration: none;
    }

    .active{
        color: white;
    }

    a:hover{
        color: white;
    }
`


const Header = () => {
    return (
        <HeaderArea>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Carrinho</NavLink>
        </HeaderArea>
    )
}
export default Header