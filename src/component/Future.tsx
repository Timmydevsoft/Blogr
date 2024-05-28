import React from "react"
import { futureItems } from "../constant"
import mobileIluustration from "../images/illustration-editor-mobile.svg"
import illustration from "../images/illustration-editor-desktop.svg"
const Future: React.FC = ()=>{
    
    const[width,setWidth] = React.useState<number>(window.innerWidth)

    React.useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setWidth(window.innerWidth);
        })

       

        return  window.removeEventListener("scroll", ()=>{
            setWidth(window.innerWidth);
        })
    },[width])

    return(
        <div className={`lg:mt-24 w-full bg-[]`}>
            <h2 className="text-Verydarkblue text-2xl font-medium text-center ">
               Designed for the future
            </h2>

            <div className=" flex flex-col-reverse p-[5%] lg:pl-[10%] items-center lg:p-0 lg:items-baseline w-full h-auto my-16 lg:flex-row relative">
               <div className="flex flex-col w-full lg:w-[60%]">
                    {
                        futureItems.map((items,index)=>(
                            <div key={index} className="w-full">
                                <h2 className="text-2xl text-center w-full lg:text-left text-Verydarkblue font-medium py-4">{items.title}</h2>
                                <p className="text-center lg:text-left w-full text-footertext text-base font-normal">{items.body}</p>
                            </div>
                        ))
                    }
               </div>

               <div className="w-full relative" >

                    <img 
                        className=" w-[100%] lg:w-[95%] lg:absolute lg:right-[-27%] lg:top-[-12rem]"  
                        src={ width < 648 ? mobileIluustration : illustration} 
                        alt="ilustration editor" 
                    />

               </div>

            </div>
        </div>
    )
}

export default Future