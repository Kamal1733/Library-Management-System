import React, { useEffect, useState } from "react";
import "./ProductList.css";

import { Link } from "react-router-dom";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products", {
      headers: {
        authorization:`bearer ${JSON.parse(localStorage.getItem('token')) }`,
      },
    });
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
      headers: {
        authorization:`bearer ${JSON.parse(localStorage.getItem('token')) }`,
      },
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };






  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`,{
        headers: {
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))
       }`,
      }});
      result = await result.json();
      setProducts(result);
    } else {
      getProducts();
    }
  };
  return (
    <div className="list">
      <h3>Product List</h3>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search Product"
        onChange={searchHandle}
      />
      <ul className="list-item">
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Delete/Update</li>
      </ul>

      {products.length > 0 ? (
        products.map((item, index) => (
          <ul className="list-item">
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>${item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <button
                className="dlt-btn"
                onClick={() => deleteProduct(item._id)}
              >
                Delete
              </button>
              <Link to={"/update/" + item._id}>Update</Link>
            </li>
          </ul>
        ))
      ) : (
        <h3>No data found</h3>
      )}
    </div>
  );
};

export default ProductList;
