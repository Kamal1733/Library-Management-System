import "./Signup.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const collectData = async () => {
    console.warn(name, email, password);
    let  result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result.result))
    localStorage.setItem("token", JSON.stringify(result.auth))
      navigate('/');
  
  };
  return (
    <div className="form">
      <h1  style={{color:"white"}}  >   Register</h1>
      <div>
        <input
          className="inp"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="inp"
          type="text"
          placeholder="Email id"
        />{" "}
        <br />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="inp"
          type="password"
          placeholder="Password"
        />
      </div>
      <button onClick={collectData} type="button">
        SIgn Up
      </button>
    </div>
  );
};
export default Signup;
