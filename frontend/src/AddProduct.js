import React, { useState } from "react";
import "./AddProduct.css";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error,setError] = useState(false)

  const addProduct = async () => {


    //jab kuch data hoga toh false return karega !name
    //true tb return karega jab is input field k andar koi bhi data mnhi hoga
   if( !name || !price || !category || !company){

    setError(true);
    return false;
   }

    const userId=JSON.parse(localStorage.getItem("user"))._id;
    let  result= fetch("http://localhost:5000/add-product",{
      method:"post",
      body: JSON.stringify({name,price, category,company,userId}),
      headers:{
      "Content-Type":"application/json",
      authorization:`bearer ${JSON.parse(localStorage.getItem('token')) }`
      }
    })
    result= await result.json();
    // console.warn(result)
     
  };

  return (
    <div className="prod">
      <h1>Add products</h1>
      <input
        type="text"
        placeholder="product name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      {error && !name  && <span  className="spn">Enter a vaild name</span>}
      <input
        type="text"
        placeholder="product price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      {error && !price  && <span  className="spn">Enter a vaild price</span>}
      <input
        type="text"
        placeholder="product category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      {error && !category  && <span  className="spn">Enter vaild category</span>}
      <input
        type="text"
        placeholder="product company"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      />
      {error && !company  && <span  className="spn">Enter vaild company </span>}
      <button onClick={addProduct}>Add PRODUCTS</button>
    </div>
  );
};

export default AddProduct;
