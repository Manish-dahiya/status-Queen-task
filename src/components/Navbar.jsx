import React, { useEffect, useState } from 'react'
import logo from '../assets/statusqueen-logo.png'
// import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HomeIcon from '@mui/icons-material/Home';
import StatusIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import WallpaperIcon from '@mui/icons-material/InsertPhoto';
import CakeIcon from '@mui/icons-material/Cake';
import Sidebar from './Sidebar';
import SunIcon from '@mui/icons-material/WbSunny';
import MoonIcon from '@mui/icons-material/Bedtime';

const status = [
  'whatsapp status',
  'English status',
  'Hindi status',
  'Punjabi status',
];



function Navbar( {setIsDark  ,isDark}) {
 

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [isSidebar,setIsSidebar]= useState(true);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      value
    );
  }






  return (
    <>
    <div className="flex justify-around items-center gap-5   shadow-md">
      {/* //home icon ayega gayab krke */}
      <div className='s'>
        <img src={logo} alt="logo" className='h-14 lg:block hidden' />
        <span className='lg:hidden block '><HomeIcon   /></span>
      </div>

      {/* //gayab krdo -> hamburger*/}

      <div className=' justify-center  hidden lg:flex '>
        <ul className='flex justify-center items-center gap-7 mt-2   text  '>
          <li className='flex' > <HomeIcon className='mb-2' />  HOME  </li>
          <li id='status' className='w-20'>
          <FormControl sx={{  border:"none", borderRadius:"3px" ,outline:"none" }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span  style={{ color: isDark ? "white" : "black" }}> <StatusIcon className=''/>  Status</span>;
            }
            return selected.join(', ');
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            
            "& .MuiOutlinedInput-notchedOutline": { border: 'none' }, // Remove the border
          }}
        >
          
          {status.map((name) => (
            <MenuItem
              key={name}
              value={name}
              // style={getStyles(name, personName, theme)}
              sx={{
                "&:hover": { backgroundColor: "pink" }, // Change background color to pink on hover
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

          </li>

          <li id='wallpapers' className='w-32'>
          <FormControl sx={{  border:"none", borderRadius:"3px" ,outline:"none" }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span  style={{ color: isDark ? "white" : "black" }}> <WallpaperIcon className=''/>  Wallpaper</span>;
            }
            return selected.join(', ');
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": { border: 'none' }, // Remove the border
          }}
        >
          
          {status.map((name) => (
            <MenuItem
              key={name}
              value={name}
              // style={getStyles(name, personName, theme)}
              sx={{
                "&:hover": { backgroundColor: "pink" }, // Change background color to pink on hover
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          </li>
          <li> <CakeIcon className='mb-2 '  />  BirthdayWishes</li>
          <li  className='cursor-pointer'  onClick={()=>setIsDark((prev)=>!prev)} >Mode  {isDark? <SunIcon/> : <MoonIcon className='font-medium'/>   } </li>
    

        </ul>
      </div>
      
      <div onClick={() => setIsSidebar(prev => !prev)} className={`cursor-pointer relative lg:hidden  transition-all duration-300 ease-in-out  ${
        isSidebar ? 'right-30' : 'right-0'
      } `} > {!isSidebar ? <span> &#9776;</span>:" X" }


      </div>

    </div>
    {
       <div   className={`fixed top-0 right-0 lg:hidden  h-full w-64 px-4 transition-all duration-300 ease-in-out ${
        isSidebar ? 'right-0' : 'right-[-300px]'
      }`}   >
           <Sidebar  setIsDark={setIsDark} />
        </div>

      }
    </>
  )
}

export default Navbar
