import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const UserDetails = (props) => {
    const {asdf}=useParams();
    const [userD,setUserD]=useState([])
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(req=>req.json())
    .then(data=>{
        setUserD(data.find(x=>x.id==asdf))
    })
  },[])
    const {name,username,email,website,address,phone,company}=userD;
    return (
        <div style={{margin:"50px",padding:"50px",border: "5px solid red"}}>
        <h1>Details - of {name}</h1>
            <p>Name : {name}</p>
            <p>Username : {username}</p>
            <p>email : {email}</p>
            <p>website : {website}</p>
            <p>address : City - {address?.city} & street - {address?.street} && zipcode - {address?.zipcode}</p>
            <p>Phone : {phone}</p>                   
            <p>Company : {company?.name}</p>
            <Link to="/users"><button>Back to All</button></Link>
        </div>
    );
};

export default UserDetails;