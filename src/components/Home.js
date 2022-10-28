import React, { useState, useEffect } from "react";
import User from './User.js'
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home({ data, loading }) {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  console.log(loading);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = data.filter((val) => {
    if (search.length < 2) {
      return false;
    } else if (
      val.name.first.toLowerCase().includes(search.toLowerCase()) ||
      val.name.last.toLowerCase().includes(search.toLowerCase())
    ) {
      return val;
    } else return false;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (filtered.length) {
      setShowSearch(true);
    } else setShowSearch(false);
  };

  useEffect(() => {
    if (search === "") {
      setShowSearch(false);
    }
  }, [search]);

  return (
    <>
      <section className="home">
        <h1 className="home--title">Number one online user search platform </h1>
        <p className="home--text">
          Search from our online database for all users
        </p>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="search"
            value={search}
            onChange={handleChange}
            name="search"
            placeholder="Search name"
            className="input"
          />
          <button className="home--btn">
            {loading ? <span>loading...</span> : <FaSearch />}
          </button>
        </form>

        <div className="searchresult">

          {showSearch &&
            <div className="user">
            {filtered.map(
              ({ name, picture, id, location, nat, email, cell, dob }) => {
                return (   
                    <User 
                    name= {name}
                    picture={picture}
                    id={id}
                    location={location}
                    nat={nat}
                    email={email}
                    cell={cell}
                    dob={dob}
                    />                  
                );
              }
            )}
            
            </div>
           }

            <p className="home-end--text">
              Didn't find a user? View all our current
              <span className="home-link--btn">
                <Link to="/Users" className="home-link--text">
                  Users
                </Link>
              </span>
            </p>
          
        </div>
      </section>
    </>
  );
}

export default Home;
