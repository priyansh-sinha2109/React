import React from "react";
import Card from "./components/Card";

const App = () => {
  let myObj = {
    username: "sohit" , 
    age : 21
  }

  let newArr = [1 , 2 , 3]
  return (
    <div>
      <h1 className="bg-green-500 text-black
       p-4 rounded-2xl">Hello</h1>
     <Card username="Code and Code" someObj = {newArr}   btntext = {"Visit me"}/>
     <Card/>
    </div>
  );
};

export default App;
