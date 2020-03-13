import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {DataForm} from './DataForm'

const App=()=> {
  const[data,setData]=useState([]);
  const[dataCopy, setDataCopy]=useState(data);
  useEffect(()=> {
    setDataCopy(data);
  }, [data])
  console.log(data);
  data.length===0 &&
  fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response=>response.json())
    .then(responsedata=>setData(responsedata));
    const search=e=>{
      const{target:{value}}=e;
      const arrayTmp=[];
      data.forEach(element=>{
        if(element.name.toLowerCase().includes(value.toLowerCase())||
           element.username.toLowerCase().includes(value.toLowerCase())||
           element.address.street.toLowerCase().includes(value.toLowerCase())||
           element.company.name.toLowerCase().includes(value.toLowerCase())||
           element.phone.includes(value)||
           element.website.toLowerCase().includes(value.toLowerCase())
        )
        arrayTmp.push(element);
      })
      setDataCopy(arrayTmp);
    }
    
return (
  <div>
<input onChange={search}/>  
<DataForm data={dataCopy}>
</DataForm></div>)
}
export default App
