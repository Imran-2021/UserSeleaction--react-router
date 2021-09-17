import React, { useEffect, useState } from 'react';

const Users = (props) => {
    const [user,setUser]=useState([])
    useEffect(() =>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(req=>req.json())
      .then(data=>{
        setUser(data)
      })
    },[])
    console.log(user)
    return (
        <div style={{margin:"20px"}}>
            <p style={{textAlign:"center",fontWeight:"bold"}}>Here, Total - {user.length} members</p>
            {
                user.map(x=><ALlUser user={x}/>)
            }
        </div>
    );
};

const ALlUser=(props)=>{
    const {name,username,email,website,id}=props.user;
    return(
        <div style={{margin:"10px",padding:"10px",border: "1px solid red"}}>
            <p>Id :- {id}</p>
            <p>Name :- {name}</p>
            <p>Email :-{email}</p>
        </div>
    )
}

export default Users;