import React, { useEffect, useState } from "react";
import Users from "./components/Users";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Logo from "./Images/Logo.png";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [bars, setBars] = useState(false);
  const [loading, setLoading] = useState()

  
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=50";
    try {
      setLoading(true)
       const getDatas = async() => {
        const res = await fetch(url);
        const data = await res.json();
        setData(data.results)
        setLoading(false)
        console.log("effect run")
      }
        getDatas()
    }
    catch(err) {
      setLoading(false)
      console.log(err.message)
    }
  },[])

  const handleClick = () => {
    setBars(prev => !prev)
  }
  
  return (
    <>
      <nav className="nav">
        <img src={Logo} alt="logo" className="logo" />
        <ul className= {`nav--list ${bars ? "active" : ""}`}>
          <li className="nav--item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="nav--item">
            <Link to="/Users" className="link">
              Users
            </Link>
          </li>
        </ul>
        <div onClick = {handleClick} className="m-icon">
          { bars ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
        </div>  
      </nav>

      <Routes>
        <Route path="/" element={<Home data={data} loading={loading}/>} />
        <Route path="/Users" element={<Users data={data} loading={loading}/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
