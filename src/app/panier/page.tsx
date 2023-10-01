"use client"
import React, { useState }  from 'react'
import CardBasket from '@components/CardBasket';
import Link from 'next/link';


const Page = () => {
  const [result, setResult] = useState<number>(0)
  const [lengthArticle, setLengthArticle] = useState<number>(0)

  return (
    <div className='max-w-6xl mx-auto mt-12'>
           <div  className='flex justify-between '>
             <div className='flex items-center space-x-3'>
              <h1 className='text-3xl lg:text-left text-center my-6 lg:my-0 font-bold'>Your Card</h1>
            <span> {lengthArticle} item{lengthArticle <= 1 ? '' : 's'} </span> 
             { lengthArticle === 0 ?  '': <button className='my-8 bg-red-700 text-white px-2 rounded-md cursor-pointer'  onClick={() => localStorage.removeItem('cart')}>Clear All</button>}
            </div>
            <div className='flex items-center space-x-3'>
              <h1 className='text-2xl lg:text-left text-center my-6 lg:my-0 '>Total</h1>
            <span className='text-xl font-bold'> ${result} </span> 
            </div>
           
           </div>
           <div>
           </div>
           <div className="bg-gray-400 h-[0.09rem] my-6 "></div>
             <CardBasket setResult={setResult} setLengthArticle={setLengthArticle}/>
        <Link href='/'>
          <p className='text-center text-2xl italic underline cursor-pointer'>Retour</p>
        </Link>

        
     </div>
  )
}

export default Page