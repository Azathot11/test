import React from 'react'
import Banner from '../components/Banner'
import GalleryOne from '../components/GalleryOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/Sectionfour'
import BannerTwo from '../components/BannerTwo'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
     <Banner />
     <GalleryOne/>
     <SectionTwo/>
     <SectionThree/>
     <SectionFour/>
     <BannerTwo/>
     <Footer/>
    </>
  )
}

export default Home