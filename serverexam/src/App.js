import React, { useState, useEffect,useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import {DataForm} from './DataForm'

const App=()=> {
  const[data,setData]=useState([]);
  const[fullData,setFullData] =useState([]);
  const[search,setSearch]=useState(false);
  console.log(data)
  
  useEffect(()=> {
   fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response=>response.json())
    .then(responsedata=>setFullData(responsedata));
    },[]);


  const onSearch=useCallback(e=>{
      const{target:{value}}=e;
      const LowerCaseValue=value.toLowerCase();
      setSearch(!!LowerCaseValue);
      const arrayTmp =fullData.filter(element=>
          element.name.toLowerCase().includes(LowerCaseValue)||
          element.username.toLowerCase().includes(LowerCaseValue)||
          element.address.street.toLowerCase().includes(LowerCaseValue)||
          element.email.toLowerCase().includes(LowerCaseValue)||
          element.company.name.toLowerCase().includes(LowerCaseValue)||
          element.phone.replace('-','').includes(value.replace('-',''))||
          element.website.toLowerCase().includes(LowerCaseValue)
      );
      setData(arrayTmp);
    },[fullData]);

return (
  <div>
    <div>
      <label for="search">search</label>
<input name="search" onChange={onSearch} className="search"/>  
</div>
<DataForm data={search?data:fullData}>
</DataForm></div>)
}
export default App;
