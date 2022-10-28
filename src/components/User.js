import React from 'react'

export default function User({name, picture, id, location, nat, email, cell, dob}) {
  return (
    <>
      <div className="user--card" key={cell}>
                <img
                  src={picture.thumbnail}
                  alt="profile img"
                  className="user--image"
                />

                <h2 className="user--title">
                  {name.title} {name.first} {name.last}
                </h2>
                <div className="user--info">
                  <p>
                    <span>Age: </span>
                    {dob.age}
                  </p>
                  <p>
                    <span>Cell: </span>
                    {cell}
                  </p>
                  <p>
                    <span>Email: </span>
                    {email}
                  </p>
                  <p>
                    <span>Location: </span> {location.city}, {location.country}
                  </p>
                  <p>
                    <span>Nationality: </span> {nat}
                  </p>
                </div>
              </div>
    </>
  )
}