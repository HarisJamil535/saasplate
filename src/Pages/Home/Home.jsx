import React from 'react'
import Hero from '../../Components/Hero/Hero'
import OnlineShop from '../../Components/OnlineShop/OnlineShop'
import Faqs from '../../Components/Faqs/Faqs'
import HowitWorks from '../../Components/HowItWorks/HowitWorks'
import PricingPlan from '../../Components/PricingPlan/PricingPlan'
import Gallery from '../../Components/Gallery/Gallery'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Footer from '../../Components/Footer/Footer'
import Chart from '../../Components/Chart/Chart'
// import BarChart from '../../Components/Chart/Chart'



const Home = () => {
  return (
    <>
    <Hero/>
    <OnlineShop/>
    <Chart/>
    <Faqs/>
    <HowitWorks/>
    <PricingPlan/>
    <Gallery/>
    <WhyChooseUs/>
    <NewsLetter/>
    <ContactForm/>
    <Footer/>
   
    </>
  )
}

export default Home