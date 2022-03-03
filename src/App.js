import React, { useState, useEffect } from 'react'
import MainComp from './components/main/Main'
import './App.css'
import employees from './employees.json'

function App() {

  const [data, setData] = useState(employees);

  useEffect(() => {
    // fetch("/members").then(
    //   res => res.json()
    // ).then(
    //   data => {
    //     setData(data)
    //     console.log(data);
        // data.employes.map((item)=>{
        //   return console.log(item)
        // })
    //   }
    // )
    console.log(data.employees)
  }, [])


  return (
 
    <>
    <div className='header'></div>
    <MainComp data={data}/>
    <div className='bottom'> </div>
    </>  
  );

}

export default App