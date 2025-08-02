import React from 'react'
import { BsLightningCharge } from "react-icons/bs";


const Button = ({content, className}) => {
  return (
    <button className={`${className} flex gap-2 p-1.5 bg-neutral-900/90 border-1 hover:bg-slate-500/20 items-center justify-center rounded-lg text-sm`}>
        <BsLightningCharge className='text-1xl'/>
        {content}
    </button>
  )
}

export default Button