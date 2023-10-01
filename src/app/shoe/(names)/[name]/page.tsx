"use client"
import React, { useState } from 'react'
import dataShoes from '@db/data';
import Link from 'next/link';
import { BiSolidBasket } from 'react-icons/bi';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import Image from 'next/image';
import { useParams } from 'next/navigation';

type Props = {
    params:{name: string}
}


const Page = ({params}: Props) => {
  const [data] = useState(dataShoes)
 
  const searchParams = useParams()
  console.log(searchParams.name);
  
  let findProduct = data.find(shoe => shoe.id === Number(searchParams.name))


 let pushTab = [] 
 pushTab.push({...findProduct}) 

 
  return (
   <div className='text-white'>
    

    <div className='flex space-x-4 mx-auto max-w-4xl flex-col mb-12'>
   <h1 className=' text-3xl text-center uppercase mb-12'>Produit </h1>
     
     <div className='bg-white flex items-center w-4/4 p-16 rounded-xl'>
       <Image
      src={`${findProduct?.img}`}
      width={550}
      height={550}
      alt={`image ${findProduct?.title}`}
      className='mx-auto w-auto h-auto items-center justify-center '
      priority
    />
     </div>
 
    <div >
      <div className='flex justify-start space-x-6 items-center flex-row mt-4'>

          <h1 className='text-3xl font-bold my-2'>{findProduct?.title}</h1>

  
            <div className='flex space-x-3 items-center'>
            <p className='line-through text-xl'>{findProduct?.prevPrice}</p>
            <p className=' text-4xl bg-orange-500 rounded-md px-2 '>${findProduct?.newPrice}</p>
          </div>
     
      </div>

      <Link href='/'>
      <i className='bg-gray-700  px-4 font-bold rounded-md  '>{findProduct?.company}</i>
      </Link>
      <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae temporibus aut perspiciatis cupiditate dolorem sit expedita quisquam. Nihil, optio distinctio laboriosam facilis quam cum, nobis consequuntur iure nesciunt similique aspernatur tenetur, ipsa exercitationem. Debitis doloribus illo, voluptate sint recusandae dolorum voluptatum aperiam ipsum quasi inventore ab eius, accusamus officiis natus nulla quis ipsam impedit quos esse error ut saepe.
      </p>
        <div className='flex justify-between items-center '>
         <div className='flex items-center '>
           <span className='flex text-yellow-400 my-4 text-xl'>
          
        {findProduct?.star}
        {findProduct?.star}
        {findProduct?.star}
        {findProduct?.star}
    </span>
    <i className='pl-4'>{findProduct?.reviews}</i>
         </div>

         <div className='text-2xl  flex space-x-2' >
               
               <span className='cursor-pointer  hover:text-yellow-400'>
              <Link href={`/basket/${findProduct?.title}`}>
                <BiSolidBasket />
              </Link>
               </span>
        </div>
        </div>
        <Link href='/'>
          <p className='text-center text-2xl italic underline cursor-pointer'>Retour</p>
        
        </Link>
          
        
          </div>
      
    </div>
    </div>
  

  
  )
}

export default Page