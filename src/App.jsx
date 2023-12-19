import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

export const App = () => {
const [users , setusers]=useState([])



const handleFormSubmit =(data)=>{
  setusers([...users , data])
}

const handleRemove = (id)=>{
   setusers(()=>users.filter((item,index)=>index !=id  ))
}




  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
    <div className="container mx-auto ">
      <Cards handleRemove = {handleRemove} users={users}/>
      <Form handleFormSubmit ={handleFormSubmit}/>  
      </div>
    </div>
  );
};

export default App;
