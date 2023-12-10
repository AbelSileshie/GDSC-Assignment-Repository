import React from 'react';
import "./App.css";
export const Greetins = () => {
  const num = ['Abel Tesfaw ','Kebede Abebe ','gedamu ','Melkamu Abera ',' Here is how we use Map function '];
const num2x = num.map((n)=>n);
  return (
<div>
    <h1 className="Header"><br/>{num2x}</h1>
</div>
    )
}

