
import { useParams } from "react-router-dom";
import React, { useState, useEffect }from "react";

function Users() {
    const { username } = useParams();

    useEffect(() => {
        
        console.log("User component mounted with username:", username);
    }, [username]);
    console.log(username);
        return <h1>{username}</h1>;
 
}   
export default Users;