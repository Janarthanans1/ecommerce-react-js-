import React, { useState } from "react";
import axios from "axios";

const Products = () => {
  const [lists, setList] = useState([]);
  const productsList = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    console.log(res.data.products);
    setList(res.data.products);
  };
  return (
    <div>
      <button onClick={() => productsList()}>get</button>
      {lists.map((list) => (
        <div key={list.id}>
          <p>{list.category}</p>
          <img src={list.thumbnail} alt="" width="200px" height="200px" />
        </div>
      ))}
    </div>
  );
};

export default Products;
