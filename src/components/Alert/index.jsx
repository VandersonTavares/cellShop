import React from "react";

import "./styles.css";

import { MdRemoveShoppingCart } from "react-icons/md"

const Alert = () => {
  return (
    <div className="alert"><span><MdRemoveShoppingCart/> Item Removido</span></div>
  );
};
export default Alert;
