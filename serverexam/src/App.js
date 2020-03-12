import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {DataForm} from './DataForm'

const App=()=> {
  const[data,setData]=useState([]);
  console.log(data);
  data.length===0 &&
  
   fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response=>response.json())
    .then(responsedata=>setData(responsedata));
    
return <DataForm data={data}></DataForm>
}
export default App
