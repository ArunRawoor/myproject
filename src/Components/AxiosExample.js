import React, { useState, useEffect } from "react";
import axios from "axios";
export default function AxiosExample() {
  const [album, setalbums] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      setalbums(res.data);
    });
  }, []);
  return (
    <div>
      <ul key={album.id}>
        {album.map((album) => (
          <table border="1">
            <tr>
                                 <td> Album Name</td>                   
              <td>Album Email</td>                   {" "}
            </tr>
                               {" "}
            <tr>
                                 <td> {album.name}</td>                   
              <td>{album.email}                   </td>                   {" "}
            </tr>
                               {" "}
          </table>
        ))}
                   {" "}
      </ul>
                  <h1> Just For Testing</h1>       {" "}
    </div>
  );
}
