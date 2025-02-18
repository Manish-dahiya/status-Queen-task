import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [isDark ,setIsDark]= useState(() => {
    return localStorage.getItem("theme") === "dark";
  });


  
  
  useEffect(()=>{
  document.querySelector("body").setAttribute("data-theme",isDark?"dark":"light"); 
  localStorage.setItem("theme", isDark?"dark" :"light");
  console.log(isDark);

},[isDark])

  return (
    <div className='App h-full w-full' data-theme={isDark?"dark" : "light"} >
    <Navbar setIsDark={setIsDark} isDark={isDark} />
    
    </div>
  )
}

export default App
