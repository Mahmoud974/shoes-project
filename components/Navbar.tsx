"use client"
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import {BiSolidBasket} from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image';
import { totalItems } from 'module/index'



type Props = {
  children: ReactNode
}

const Navbar:React.FC<Props> = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

useEffect(()=>{
const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    try {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
    } catch (error) {
      console.error('Error parsing cart data:', error);
    }
  }

},[])



  return (
    <div className=" ">
      
    <div className={`flex justify-between px-12 items-center pt-3 sticky top-0 z-50 bg-[#1E242A] ` } >
<div  className="text-3xl">
 <Link href='/'>
  
 <Image src='/logo.png' width='80' height='80' alt='logo shoes' style={{width:'6rem'}} priority/>
 </Link>
</div>
<div>

</div>


<div className='flex text-2xl space-x-6'>
 
  <Link href='/panier'>
  
  <BiSolidBasket className='cursor-pointer  hover:text-yellow-500'/>
  <span className=' relative -top-4 left-2 w-4 h-4 rounded-full text-white font-bold p-1 bg-red-500 text-xs'>{totalItems(cartItems)}</span>
  </Link>
  </div>

    </div>
     <div className="container mx-auto  ">


    {children}
     </div>
    </div>
  )
}

export default Navbar