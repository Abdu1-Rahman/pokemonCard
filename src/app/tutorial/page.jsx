// "use client"
// import React from 'react'
// import { useEffect, useState } from 'react';

// data = [
//   {
//     "id": 1,
//     "name": "John Doe",
//     "age": 28,
//     "email": "john.doe@example.com"
//   },
//   {
//     "id": 2,
//     "name": "Jane Smith",
//     "age": 25,
//     "email": "jane.smith@example.com"
//   }
// ]

// const page = () => {

//     const [name, setName] = useState("")

//  useEffect(() => {
//   localStorage.setItem("userName", "John Doe");
//   const storedName = localStorage.getItem("userName");
//   setName(storedName);

//   // Remove after 2 seconds
//   setTimeout(() => {
//     localStorage.removeItem("userName");
//   }, 2000);
// }, []);

//   return (
//     <div>
//        <h2>{name}</h2>
//     </div>
//   )
// }

// export default page

"use client";
import React, { useEffect, useState } from "react";

const jsonData = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    email: "jane.smith@example.com",
  },
];

const Page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(jsonData));
    const storedData = localStorage.getItem("users");

    if (storedData) {
      setUsers(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      {users.map((data) => (
        
          <div key={data.id}>
            <p>Name:{data.name}</p>
            <p></p>
          </div>
        
      ))}
    </div>
  );
};

export default Page;
