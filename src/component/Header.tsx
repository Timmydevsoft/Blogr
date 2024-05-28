import React from "react"
import logo from "../images/logo.svg"
import hamBurger from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"
import arrowupWhite from "../images/arrowup.svg"
import arrowupRed from "../images/redarrowup.svg"
import { navItems } from "../constant"

const Header: React.FC = ()=>{


    const[hoverIndex,setHoverIndex] = React.useState<number | null>(null)


    const mouseHandler = (index: number)=>{
        setHoverIndex(index)
    }

    const[menu, setmenu] = React.useState<boolean>(false)

    const handleMennu =()=>{
        setmenu(prev =>!prev)
    }

    const openList = (index:number)=>{
        if(hoverIndex === null){
            setHoverIndex(index)
        }
        else{
            setHoverIndex(null)
        }
        
    }
   
    
    return(
        <header className=" flex items-center h-28">
            <div className="container w-full m-auto relative ">

                <div className="flex justify-between items-center">

                    <div className="flex justify-between items-center gap-[15%]">
                        <img src={logo} alt="logo" />
                        <div className="hidden space-x-4 lg:flex">

                            {
                                navItems.map((items, index)=>(
                                    <div key = {index} className="flex flex-col relative">
                                        <div className="flex items-center">
                                            <a 
                                                onMouseEnter={()=> mouseHandler(index)}
                                               className="text-small text-text hover:underline px-5 py-4" 
                                                 href=""
                                            >{items.url}</a>

                                            <img onClick= {()=>openList(index)} 
                                                src={ hoverIndex ===index ?arrowupWhite :items.arrow[0]}
                                                className="hover:cursor-pointer"
                                                alt="arrrow" 

                                            />

                                        </div>
                                        <ul className={`${hoverIndex === index? "" : "hidden"} absolute bg-text rounded-lg p-5 top-14 group-hover`}>
                                            {
                                                items.items.map((list, index)=>(
                                                    <li key = {index} className="">
                                                        <a href="#" className="text-footertext text-sm hover:text-Verydarkblue hover:font-bold">{list}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                    </div>
                                ))
                            }

                        </div>

                    </div>

                    <div className="hidden lg:flex items-center">
                        <a href="" className="text-text p-4 rounded-full text-sm">Log in</a>
                        <a href="" className="text-text bg-vltredbg px-4 py-1 rounded-2xl">Sign up</a>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <img onClick={handleMennu} 
                              src={ menu? close : hamBurger }
                              alt={menu? "close icon": "hamburger icon"}
                              className="hover:cursor-pointer"
                     />
                    </div>

                   


                    

                    

                </div>

                {
                    menu && (
                    <div className="fixed top-[6rem] flex flex-col items-center justify-center py-14 px-[5%] bg-text w-[90%] rounded-lg lg:hidden">
                            {
                                navItems.map((items,index)=>(
                                    <div key = {index} className="flex flex-col items-center relative w-full">
                                        <div className="flex items-center">
                                                <a 
                                                    className="text-small text-Verydarkblue hover:underline text-lg px-5 py-2 font-medium" 
                                                    href=""
                                                >{items.url}</a>

                                                <img 
                                                    onClick= {()=>openList(index)} 
                                                    src={hoverIndex === index? arrowupRed:items.arrow[1]} alt="arrow" 
                                                />

                                            </div>

                                            <ul className={`${hoverIndex === index? "" : "hidden"} w-full bg-footertext rounded-lg p-5 top-14 group-hover`}>
                                                {
                                                    items.items.map((list, index)=>(
                                                        <li key = {index} className="text-center">
                                                            <a href="#" className="text-Verydarkblue text-lg hover:text-Verydarkblue font-medium">{list}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>

                        

                                    </div>
                                ))
                            }

                        <div className="flex flex-col items-center border-b py-8 w-full gap-4">
                            <a href="" className="text-Verydarkblue text-lg font-medium text-center">Login</a>
                            <a href="" className="text-text py-2 px-6 bg-gradient-to-r from-vltredbg to-ltredbg font-medium rounded-3xl">Sign Up</a>
                            
                        </div>

                   </div>
                   )
                }
             
            </div>
        </header>
    )
}

export default Header