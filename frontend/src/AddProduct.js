import React, { useState } from "react";
import "./AddProduct.css";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [error,setError] = useState(false)

  const addProduct = async () => {


    //jab kuch data hoga toh false return karega !name
    //true tb return karega jab is input field k andar koi bhi data mnhi hoga
   if( !name || !price ){

    setError(true);
    return false;
   }
   alert("Contact Saved Successfully");

    const userId=JSON.parse(localStorage.getItem("user"))._id;
    let  result= fetch("http://localhost:5000/add-product",{
      method:"post",
      body: JSON.stringify({name,price, category,company,userId,date}),
      headers:{
      "Content-Type":"application/json",
      authorization:`bearer ${JSON.parse(localStorage.getItem('token')) }`
      }
    })
    result= await result.json();
  

   
     
  };

  return (
    <div className="prod">
      <h1 style={{color:"white"}}>create contact</h1>

      <input
        type="text"
        placeholder="Conatct name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      {error && !name  && <span  className="spn">Enter a vaild name</span>}
      <input
        type="text"
        placeholder="Phone number"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      {error && !price  && <span  className="spn">Enter a vaild Registration number</span>} 
      {/* <input
        type="text"
        placeholder="Book Category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      {error && !category  && <span  className="spn">Enter vaild category</span>}
      
     
      <input
        type="text"
        placeholder="Book Name"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      />
      {error && !company  && <span  className="spn">Enter vaild Data </span>}
      
      <label>Issue date</label>
      <input
        type="text"
        placeholder="Issue Date"
        onChange={(e) => {
          setDate(e.target.value)
          
        }}
        value={date}
        className="date"
      /> */}

      <button  style={{height :"50px"}} onClick={addProduct}>Save Contact</button>
    </div>
 
  );
};

export default AddProduct;
