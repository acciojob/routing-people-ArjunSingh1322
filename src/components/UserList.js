// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setUsers(data))
//       .catch(err => console.error("Failed to fetch users", err));
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             <Link to={`/users/${user.id}`}>{user.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err));
  }, []); 

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map((val) => (
          <li key={val.id}>
            <Link to={`/users/${val.id}`}>{val.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
