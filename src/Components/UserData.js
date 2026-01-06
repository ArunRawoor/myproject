
// import React, { useState, useEffect } from "react";

// function UserData() {
//   const [users, setUsers] = useState([]);   // array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         return response.json();
//       })
//       .then(data => {
//         setUsers(data);
//       })
//       .catch(err => {
//         setError(err.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []); // run once

//   if (loading) return <div>Loading users...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h2>All Users</h2>
//       {users.map(UserOne => (
//         <div key={UserOne.name} style={{ marginBottom: "10px" }}>
//           <h4>{UserOne.name}</h4>
//           <p>Email: {UserOne.email}</p>
//           <p>Website: {UserOne.website}</p>

//         </div>
//       ))}
//     </div>
//   );
// }

// export default UserData;









import React, { useState, useEffect } from 'react';

function UserData({userId}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    
    const fetchUser = async () => { 
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Only update state if component is still mounted
        setUser(data);
        setError(null);
        
      } catch (err) {

      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
    
  }, [userId]);
  
  if (loading) return <div>Loading user {userId}...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data found</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company?.name}</p>
    </div>
  );
}

export default UserData;