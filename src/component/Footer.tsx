import React from "react"
import { navItems } from "../constant"
import logo from "../images/logo.svg"

const Footer:React.FC = ()=>{
    
    return (
        <div className="m-0-auto bg-bgrayishbluebg h-auto rounded-tr-[8rem] lg:rounded-tr-[4rem] w-full mt-10 p-20 md:p-[5%]">
            <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
                <img src={logo} alt="logo" />
                {
                    navItems.map((items, index)=>(
                        <div key={index} className="flex flex-col">
                            <a href="" className="text-text text-base text-center md:text-left font-bold pt-4 md:pt-0">{items.url}</a>
                            <div className="mt-4 flex flex-col">
                                {
                                    items.items.map((list, idx)=>(
                                        <ul key ={idx} className="w-full md:w-auto">

                                            <li className="text-center md:text-left ">
                                                <a href="" className="text-footertext text-base font-medium">
                                                    {list}
                                                </a>
                                            </li>

                                        </ul>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer