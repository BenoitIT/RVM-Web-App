import React, { FunctionComponent } from 'react';
interface ButtonProps{
 title:string
}
const Button:FunctionComponent<ButtonProps> = ({title}:ButtonProps) => {
    return <button type="button" className="uppercase text-white bg-lime-600 hover:bg-lime-800 font-bold rounded-lg desktop:text-sm md:text-sm xs:text-xs px-[10vw] py-[1.5vh] shadow-md shadow-gray-500 outline-none">{title}</button>
    
}
 
export default Button;