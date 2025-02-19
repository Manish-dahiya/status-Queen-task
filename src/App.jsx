import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomeContent from './components/HomeContent';

function App() {
  const [isDark ,setIsDark]= useState(() => {
    return localStorage.getItem("theme") === "dark";
  });


  
  
  useEffect(()=>{
  document.querySelector("body").setAttribute("data-theme",isDark?"dark":"light"); 
  localStorage.setItem("theme", isDark?"dark" :"light");
},[isDark])

  return (
    <div className='App h-full w-full'  >
    <Navbar setIsDark={setIsDark} isDark={isDark} />
    <HomeContent/>
    
    </div>
  )
}

export default App
