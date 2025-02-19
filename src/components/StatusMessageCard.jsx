import React, { useState } from 'react'
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import LikeFilledIcon from '@mui/icons-material/Favorite';

function StatusMessageCard({message}) {

    const [isLiked,setIsLiked]= useState(false);
    const [isCopied,setIsCopied]= useState(false);

    const handleCopy=()=>{
        setIsCopied(true);
        navigator.clipboard.writeText(message);
    }

  return (
    <div className='lg:h-36 h-28 w-auto lg:p-7 p-2 border-2 text-start rounded-lg  '>
        <h4>{message}</h4>

        <div className='flex justify-between mt-3 lg:mt-7'>
            <button style={{backgroundImage:`linear-gradient(to right,#f78ca0 0%,#f9748f 19%,#fd868c 60%,#fe9a8b 100%)`} } className='px-3 py-1 rounded-full hover:scale-105 cursor-pointer ' onClick={handleCopy}  >  {!isCopied ? "copy" : "copied"}    </button>
          { !isLiked?<LikeIcon onClick={()=> setIsLiked((prev)=>!prev)} className='cursor-pointer   text-pink-400 '/> : <LikeFilledIcon onClick={()=> setIsLiked((prev)=>!prev)}   className='cursor-pointer text-pink-400'/> }
        </div>  

    </div>
  )
}

export default StatusMessageCard
