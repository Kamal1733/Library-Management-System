import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateComponents from "./components/PrivateComponents";
import Signup from "./components/Signup";

import Login from "./components/Login";
import AddProduct from "./AddProduct";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponents />}>
            <Route
              path="/"
              element={ <ProductList/>}
            ></Route>
            <Route path="/add" element={ <AddProduct/>}></Route>
            <Route path="/update/:id" element={<UpdateProduct/>}></Route>
            <Route path="/logout" element={<h1>logout</h1>}></Route>
            <Route path="/profile" element={<h1>profile</h1>}></Route>
          </Route>
          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
