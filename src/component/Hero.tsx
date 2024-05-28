import React from "react"
const Hero:React.FC = ()=>{

    return(
        <div className="flex flex-col items-center w-full my-20 lg:my-10">
            <h1 className="text-text text-4xl lg:text-5xl font-medium text-center">A modern publishing platform</h1>
            <p className="text-center text-base text-footertext p-4">Grow your audience and build your online brand</p>

            <div className="flex gap-4 items-center my-4">
                <a href="" className="py-2 px-4 rounded-3xl bg-text font-medium text-Lightred">Start for Free</a>
                <a href="" className="text-text py-1.5 px-4 rounded-3xl border font-medium">Learn More</a>
            </div>
        </div>
    )
}

export default Hero