import React from "react"
import Header from "./component/Header"
import bgDeskto from "../src/images/bg-pattern-intro-desktop.svg"
import Hero from "./component/Hero"
import Future from "./component/Future"
import '../src/index.css'
import Art from "./component/Art"
import Last from "./component/Last"
import Footer from "./component/Footer"

const App:React.FC = ()=>{


  return(
    <>
      <div 
         style = {{backgroundImage: `url(${bgDeskto})`}}
          className="bg-Lightred w-full px-[5%] rounded-bl-[100px] h-[550px] lg:h-[400px] bg-no-repeat bg-cover bg-center"
      >
        <Header/>
        <Hero/>
      </div>

      <div className="overflow-hidden w-full no-scroll-bar lg:mt-6">
          <Future/>
      </div>

      <Art/>
      <Last/>

      <Footer/>
    

    </>
  )
}
export default App
