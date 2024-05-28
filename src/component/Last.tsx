import React from "react"
import lapdesktop from "../images/illustration-laptop-desktop.svg"
import lapmobile from "../images/illustration-laptop-mobile.svg"
import { lastSectionItems } from "../constant"

const Last:React.FC = ()=>{

    const[width,setWidth] = React.useState<number>(window.innerWidth)

    React.useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setWidth(window.innerWidth)
        })

        return window.removeEventListener("resize", ()=>{
            setWidth(window.innerWidth)
        })

    },[width])

    return(

        <div className="flex flex-col lg:flex-row justify-baseline lg:justify-between items-center w-full p-[5%] lg:p-0">
            <div className="w-full lg:w-1/2">
                <img className="relative lg:left-[-10rem]" src={width < 648 ?lapmobile : lapdesktop} alt="laptop illustraton" />
            </div>

            <div className="w-full lg:w-1/2">

                {
                    lastSectionItems.map((items, index)=>(
                        <React.Fragment key = {index}>
                            <h3 className="py-4 text-Verydarkblue text-2xl text-center lg:text-left  w-full lg:w-[80%] font-medium">{items.title}</h3>
                            <p className="text-footertext font-normal text-base text-center lg:text-left w-full lg:w-[80%]">{items.body}</p>

                        </React.Fragment>
                    ))
                }

            </div>
        </div>
    )
}

export default Last