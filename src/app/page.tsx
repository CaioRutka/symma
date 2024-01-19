"use client"; 
import NavBar from '@/components/NavBar';
import MainSection from '@/components/MainSection';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { isMobile } from 'react-device-detect';

export default function Home() {
  return (
    <div className="overlay">     
      
      <div className="overlay">   
        <NavBar/>
        <MainSection/>
        <AboutSection/>
        <SolutionsSection/>
        <ContactSection/>
        <Footer/>
      </div>

      <div className="moving-background-4">
        <div className='opac-background'>{isMobile} </div>
      </div>
      
    </div>  
  )
}
