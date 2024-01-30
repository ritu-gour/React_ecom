import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Testings = () => {
  const [inputList, setinputList]= useState([{firstName:'', lastName:''}]);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);

  }
 
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, { firstName:'', lastName:''}]);
  }
  return (
    <div>
      
    </div>
  )
}

export default Testings


