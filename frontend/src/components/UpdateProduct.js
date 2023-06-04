
 import { useEffect, useState } from "react";

 import {useParams,useNavigate} from 'react-router-dom'
 const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const params=useParams();

  const navigate= useNavigate();
  useEffect(()=>{
    getProductDetails();
},[])


const getProductDetails =  async ()=>{
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{headers: {
      authorization:`bearer ${JSON.parse(localStorage.getItem('token')) }`,
    },})
    result = await result.json();
    console.log(result)
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
    setDate(result.date);
}
 const updateProduct =   async()=>{
    console.log(name,price,company,category)

    let result=   await fetch(`http://localhost:5000/product/${params.id}`,{
        method: 'put',
        body:JSON.stringify({
            name,price,company,category
        }),
        headers:{
            'Content-Type':"application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem('token')) }`
        }
    })
    result= await result.json();
    console.warn(result)
    navigate('/')

 }
  return (
    <div className="prod">
      <h1  style={{color:"white"}}>Update products</h1>
      <input
        type="text"
        placeholder="product name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
       
      <input
        type="text"
        placeholder="product price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      
      {/* <input
        type="text"
        placeholder="product category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      
      <input
        type="text"
        placeholder="product company"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      />

<input
        type="text"
        placeholder="product company"
        onChange={(e) => {
          setDate(date);
        }}
        value={date}
      /> */}
      <button onClick={updateProduct}>Update Contact</button>
    </div>
  );
};

export default UpdateProduct;
