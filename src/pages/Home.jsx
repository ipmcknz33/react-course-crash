import React, { useEffect, useState } from "react";
import { axios } from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    console.log(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 500);
  }, []);

  return (
    <div style={{border: '1px solid black'}}>
        <div>Id</div>
        <div>Name</div>   
        <div>Username</div>
        <div>Email</div>
    </div>
  );
}
export default Home;
