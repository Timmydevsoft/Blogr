import React from "react"
import "../index.css"
import phone from "../images/illustration-phones.svg"
const Art:React.FC = ()=>{
    return(
        <div className="container w-full p-0 mx-0 mb-20 relative my-44 lg:my-36 h-auto">

            <div className="flex justify-center pt-[10vh] p-[5%] items-center bg-Verydarkblue rounded-bl-[5rem] rounded-tr-[5rem] h-[78vh] lg:h-[57vh] w-full circle-bg">

                <div className="flex flex-col lg:flex-row justify-center items-center">

                    <img className="w-full lg:w-1/2 absolute lg:relative top-[-27vh] lg:top-0"  src={phone} alt="phone" />

                    <div className="w-full lg:w-1/2">

                        <h2 className="text-3xl text-center w-full lg:text-left text-text font-medium py-4">
                        State of the Art Infrastructure
                        </h2>
                        <p className="text-center lg:text-left w-full text-footertext text-lg font-normal">
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Art