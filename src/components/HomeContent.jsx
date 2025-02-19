import React from 'react'
import HeroBackground from '../assets/heroBackground.webp'
import CategoryCard from './CategoryCard'
import CakeIcon from '@mui/icons-material/Cake';
import WallpaperIcon from '@mui/icons-material/InsertPhoto';
import FestivalIcon from '@mui/icons-material/Festival';
import QuotesIcon from '@mui/icons-material/FormatQuote';
import StatusMessageCard from './StatusMessageCard';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import dpImage1 from '../assets/dpImage1.jpg'
import dpImage2 from '../assets/dpImage2.jpg'
import dpImage3 from '../assets/dpImage3.jpg'
import dpImage4 from '../assets/dpImage4.jpg'
import dpImage5 from '../assets/dpImage5.jpg'
import dpImage6 from '../assets/dpImage6.jpg'
import dpImage7 from '../assets/dpImage7.jpg'
import dpImage8 from '../assets/dpImage8.jpg'
import dpImage9 from '../assets/dpImage9.jpg'

const categoryCards=[
    {icon: WallpaperIcon , cardText:"DP IMAGES" , cardBgColour:"linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)" , url:"/whatsapp-dp"  },
    {icon: WallpaperIcon , cardText:"IMAGE STATUS" , cardBgColour:"linear-gradient(120deg, #c4ef65 0%, #96e6a1 100%)" ,url:"/whatsapp-image-status"},
    {icon: WallpaperIcon , cardText:"TEXT STATUS" , cardBgColour:"linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)" ,url:"/whatsapp-status" },
    {icon: CakeIcon , cardText:"BIRTHDAY WISHES" , cardBgColour:"linear-gradient(-225deg, #ffe29f 0%, #ffa99f 48%, #ff719a 100%)" , url:"/birthday-wishes" } ,
    {icon: QuotesIcon , cardText:"Quotes" , cardBgColour:"linear-gradient(-225deg, #5271c4 0%, #b19fff 48%, #eca1fe 100%)" ,url:"/english"  },
    {icon: WallpaperIcon , cardText:"MOBILE WALLPAPERS" , cardBgColour:"linear-gradient(-225deg, #9efbd3 0%, #57e9f2 48%, #45d4fb 100%)" ,url:"/mobile-wallpapers" },
    {icon: WallpaperIcon , cardText:"DESKTOP WALLPAPERS" , cardBgColour:" linear-gradient(to top, #209cff 0%, #68e0cf 100%)" ,url:"/desktop-wallpapers" },
    {icon: FestivalIcon , cardText:"FESTIVAL WISHES" , cardBgColour:"linear-gradient(to top,#e6b980 0%,#eacda3 100%)" ,url:"/festival-wishes" },
]

const statusMessages=[
    {message: "choose peope who chooses you" },
    {message: "just a year ago,things were so different" },
    { message: "Trust the timing of your life." },
    { message: "What's meant for you will always find its way." },
    { message: "Your energy introduces you before you even speak." },
    { message: "Growth is uncomfortable because you've never been here before." },
    { message: "The best things happen unexpectedly." },
    { message: "If it's real, it'll never be forced." },
    { message: "Sometimes, silence is the best response." },
    { message: "Stay patient. The best things take time." },
    { message: "Your vibe attracts your tribe." },
    { message: "The best revenge is no revenge. Move on, be happy." },
    { message: "You glow differently when you're at peace." },
    { message: "Don't chase, attract. What belongs to you will find you." },
    { message: "The strongest hearts have the most scars." },
    { message: "Happiness looks good on you." },
    
]

const dpImages=[
    dpImage1,dpImage2,dpImage3,dpImage4,dpImage5,dpImage6,dpImage7,dpImage8,dpImage9
]
function HomeContent() {
  return (
    <div className='bg-[color : var(bg-secondary-color)]'>
       <section id='hero' style={{backgroundImage: `url(${HeroBackground})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='relative h-[75vh] w-full overflow-visible'>
    
    <div className='bg-black opacity-25 absolute inset-0 w-full h-full'></div>

    <div className='relative z-20 grid  lg:gap-5 gap-5 lg:px-40 px-10 items-center lg:grid-cols-4 grid-cols-2 w-full h-[70%]  pt-2'>
        {
            categoryCards.map((item,index)=>{
                return <CategoryCard key={index} CardIcon={item.icon} cardText={item.cardText} cardBgColour={item.cardBgColour} url={item.url} />
            })
        }
    </div>
</section>

<section id='latest-whatsapp-status' className='rounded-lg relative lg:mx-10 mx-2 mt-[-5vh] z-30 bg-[color:var(--background-secondary-color)] text-center h-auto   p-5 shadow-xl shadow-gray-900'> 
    <h3>latest Whatsapp Wallpapers</h3>

    <div className='grid grid-cols-2 gap-6 lg:grid-cols-4 '>
        {
            statusMessages.map((item,index)=>{
                return <StatusMessageCard key={index} message={item.message}  />
            })
        }
    </div>
</section>

<section id='latest-dp-images' className='mt-16 lg:mx-10 mx-2 lg:p-4 p-1 text-center rounded-lg  shadow-xl shadow-[#131212]'>
    <h3>Latest DP IMAGES</h3>

    <div className='grid grid-cols-2 justify-center items-center gap-2 lg:gap-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3  '>
        {dpImages.map((item,index)=>(
            <img src={item} alt="dp-image" />
        ))}
    </div>

</section>
<section id='latest-dp-images' className='mt-16 lg:mx-10 mx-2 lg:p-4 p-1 text-center rounded-lg bg-[color:var(--background-secondary-color)]  shadow-xl shadow-[#131212]'>
        <div className='m-2 p-3 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-[color:var(--background-color)]'>
            <ul>
                <li className=' mt-2'><a href="" className='hover:text-pink-500   ' >Latest whatsapp Status</a></li>
                <li className='mt-2'><a href="" className='hover:text-pink-500 my-3'>Hindi Status for Whatsapp</a></li>
                <li className='mt-2'><a href="" className='hover:text-pink-500 my-3'>Punjabi Status for Whatsapp</a></li>
                <li className='mt-2'><a href="" className='hover:text-pink-500 my-3'>English Status for Whatsapp</a></li>
            </ul>
            <ul>
                <li className='mt-2'><a href="" className='hover:text-pink-500'>Love Status in Hindi</a></li>
                <li className='mt-2'><a href="" className='hover:text-pink-500'>Hindi Status for Whatsapp</a></li>
                <li className='mt-2'><a href="" className='hover:text-pink-500'>Punjabi Status for Whatsapp</a></li>
                <li className='mt-2'><a href="" className='hover:text-pink-500'>English Status for Whatsapp</a></li>
            </ul>
            <ul>
                <li className='mt-2'><a href="" className='hover:text-pink-500'>Love DP Pictures</a></li>
                <li className='mt-2'><a href="" className='hover:text-pink-500'>Sad DP Pictures</a></li>
                <li className='mt-2'><a href="" className='hover:text-pink-500'>Alone Dp Pictures</a></li>
                <li className='mt-2'><a href="" className='hover:text-pink-500'>Religous DP Pictures </a></li>
            </ul>
            <ul>
                <li className='mt-2'><a href="" className='hover:text-pink-500'>Best Whatsapp DP</a></li>
                <li className='mt-2'><a href="" className='hover:text-pink-500'>Latest Best Ringtone</a></li>
                <li className='mt-2'><a href="" className='hover:text-pink-500'>HD 4k Mobile wallpapers</a></li>
                <li className='mt-2'><a href="" className='hover:text-pink-500'>UHD  Desktop wallpapers </a></li>
            </ul>
        </div>
</section>

        <footer className='mt-10  py-1  flex justify-around bg-[color:var(background-color)] '>
            <div className='flex justify-evenly gap-4'>   
                <h4>PRIVACY POLICY</h4>
                <h4>SITE MAP</h4>
                <h4>CONTACT US</h4>
            </div>

            <div id='socials flex justify-evenly  w-auto'>
                 <a href=""> <TwitterIcon className='text-pink-400 mx-4'/>   </a>
                 <a href=""> <FacebookIcon className='text-pink-400 mx-4'/>   </a>
                 <a href=""> <PinterestIcon className='text-pink-400 mx-4'/>   </a>
            </div>

        </footer>
      
    </div>  
  )
}

export default HomeContent
