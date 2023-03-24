import React from 'react'
import bannerImage from '../assets/17.svg'
import { generalPadding } from '../utils/generalStyles'


const BannerTwo = () => {
  return (
    <div
    className={`w-full h-[700px]  flex flex-col justify-end pb-16`}
    style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
        <div className={`w-full  ${generalPadding} flex flex-col  gap-y-2`} >
            <h1>OWN THE DAY</h1>
            <p className='text-6xl font-extrabold px-5'>TACHEN 19</p>
            <div className='mt-4 bg-black w-48 h-8 p-1 text-sm flex justify-center items-center text-white'>SHOP COLLECTION</div>
        </div>
    </div>
  )
}

export default BannerTwo