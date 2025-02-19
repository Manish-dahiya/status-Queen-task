import React from 'react'
import CakeIcon from '@mui/icons-material/Cake';


function CategoryCard({ CardIcon, cardText, cardBgColour ,url}) {
    return (
        <a href={`${url}`} className='lg:h-42 h-32 w-auto  rounded-lg flex flex-col justify-center items-center' style={{ background: `${cardBgColour} `}} >
            {CardIcon && <CardIcon fontSize="large" />}
            <h4 className='text-center'>{cardText}</h4>
        </a>
    )
}

export default CategoryCard
