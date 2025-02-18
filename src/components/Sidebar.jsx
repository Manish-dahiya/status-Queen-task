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
        <div className='w-96 border-2 h-[100vh] absolute z-10 text-gray-700  px-10 py-3  font-semibold '>
            <div><span> <HomeIcon /> Home </span> <span onClick={()=>setIsDark((prev)=>!prev)} >Mode</span>

            
              
                        </div>
            <div className='border-1 border-gray-700 my-7'></div>

            <div onClick={toggleStatus} className='cursor-pointer'> 
                <StatusIcon /> status

                { isStatusOpen && <ul id="options" className='flex flex-col gap-7 mt-14' >
                    <li> <ImageIcon/> DP IMAGES </li>
                    <li><ImageIcon/>  IMAGE STATUS </li>
                    <li> <CreateIcon/> ENGLISH STATUS</li>
                    <li><CreateIcon/> HINDI STATUS </li>
                    <li><CreateIcon/> PUNJABI STATUS </li>
                </ul>}

            </div>
            
            <div className='border-1 border-gray-700 my-7'></div>
            <div onClick={toggleWallpapers}  className='cursor-pointer'> 
                    <ImageIcon/> Wallpapers 

                    { isWallpapersOpen && <ul id="options" className='flex flex-col gap-7 mt-14' >
                    <li> <ImageIcon/> MOBILE </li>
                    <li><ImageIcon/>  DESKTOP </li>
                   
                </ul>}

            </div>
            <div className='border-1 border-gray-700 my-7'></div>
            <div> <HomeIcon /> Home</div>
            <div className='border-1 border-gray-700 my-7'></div>



        </div>
    )
}

export default Sidebar
