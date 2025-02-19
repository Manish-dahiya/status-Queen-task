import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { useTheme } from '@emotion/react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StatusIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import ImageIcon from '@mui/icons-material/InsertPhoto';
import CakeIcon from '@mui/icons-material/Cake';
import CreateIcon from '@mui/icons-material/Create';



function Sidebar({setIsDark} ) {
    const [personName, setPersonName] = useState([]);
    const theme = useTheme();
    const [isStatusOpen, setIsStatusOpen] = useState(false); // State for Status section
    const [isWallpapersOpen, setIsWallpapersOpen] = useState(false); // State for Wallpapers section


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            value
        );
    }

   
    const toggleStatus = () => {
        setIsStatusOpen(!isStatusOpen);
        if (isWallpapersOpen) {
            setIsWallpapersOpen(false); // Close wallpapers section if it's open
        }
    };

    const toggleWallpapers = () => {
        setIsWallpapersOpen(!isWallpapersOpen);
        if (isStatusOpen) {
            setIsStatusOpen(false); // Close status section if it's open
        }
    };

    return (
        <div className='w-96   h-[100vh] fixed z-[999]  bg-[color:var(--background-secondary-color)] px-10 py-3  font-semibold '>
            <div>
                <div className='flex gap-10' >
                     <a href='/' ><HomeIcon />Home </a> 
                     <span onClick={()=>setIsDark((prev)=>!prev)} >Mode</span> 
                </div> 

            
              
                        </div>
            <div className='border-1 border-gray-700 my-7'></div>

            <div onClick={toggleStatus} className='cursor-pointer'> 
                <StatusIcon /> status

                { isStatusOpen && <ul id="options" className='flex flex-col gap-7 mt-14' >
                    <li> <a href="/dp-images"> <ImageIcon/> DP IMAGES   </a> </li>
                    <li> <a href="/image-status"> <ImageIcon/>  IMAGE STATUS  </a>  </li>
                    <li> <a href="/english-status"> <CreateIcon/> ENGLISH STATUS </a>  </li>
                    <li> <a href="/hindi-status"> <CreateIcon/> HINDI STATUS </a>  </li>
                    <li> <a href="/punjabi-status"> <CreateIcon/> PUNJABI STATUS  </a> </li>
                </ul>}

            </div>
            
            <div className='border-1 border-gray-700 my-7'></div>
            <div onClick={toggleWallpapers}  className='cursor-pointer'> 
                    <ImageIcon/> Wallpapers 

                    { isWallpapersOpen && <ul id="options" className='flex flex-col gap-7 mt-14' >
                    <li> <a href="/mobile"> <ImageIcon/> MOBILE </a> </li>
                    <li> <a href="/desktop">  <ImageIcon/>  DESKTOP  </a>  </li>
                   
                </ul>}

            </div>
            <div className='border-1 border-gray-700 my-7'></div>
            <a> <CakeIcon /> Birthday Wishes</a>
            <div className='border-1 border-gray-700 my-7'></div>



        </div>
    )
}

export default Sidebar
