import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import Search from "../pages/SearchBar"
import '../index.css';
export default function Navigation() {
  const [data,setData]=useState([])
  const searchItem=async(name)=>{
    const response =await fetch(`http://localhost:8000/api/instagrams/name/${name}`)
    const res = await response.json();
    console.log(res)
    
    // return(
    //   <div>
 
					
				
    //       <img  className="avatar" src={res.avatar}  alt="avatar"/>
    //       <h3> {res.name} {res.username}</h3>	 
    //   </div>
    // )
  };
  return (
    <div>
<nav className='Nav'>
<NavLink className='Nav-link' activeClassName='is-active' exact to='/'>Home</NavLink>

<NavLink className='Nav-link' activeClassName='is-active' to='/MyPage'>my page</NavLink>

</nav>
<div className="search"> 
<Search className="search" handleSearch={searchItem}/> 
</div>
</div>
  )
}


