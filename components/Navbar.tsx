"use client"
import React, { ReactNode, useState } from 'react'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {BiSolidBasket} from 'react-icons/bi'
import dataShoes from '../db/data'

type Props = {
  children: ReactNode
}

const Navbar:React.FC<Props> = ({children}) => {
  const [data] = useState(dataShoes)
  
  return (
    <div className="container mx-auto">
    <div className='flex justify-between items-center pt-4'>
<div  className="text-3xl">
  <BiSolidBasket/>
</div>
<div>

</div>
<div>
  <input type="search" name="" id="" placeholder=' search your shoes!!' className="rounded-md " onChange={()=> null}/>
</div>

<div className='flex text-2xl space-x-2'>
  <BsFillSuitHeartFill/>
  <BiSolidBasket/>
  


</div>

    </div>
    {children}
    </div>
  )
}

export default Navbar