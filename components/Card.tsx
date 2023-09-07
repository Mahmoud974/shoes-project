import Image from 'next/image'
import React from 'react'
import { Data } from '../db/data'
import {BiSolidBasket} from 'react-icons/bi'
import {BsFillSuitHeartFill} from 'react-icons/bs'
type Props ={
    article: Data,
    basket: string,
    setBasket: React.Dispatch<React.SetStateAction<string>>
}

const Card = ({article,basket, setBasket}: Props) => {
  //TODO: A faire le setbasket modif
  return (
    <div onClick={()=> setBasket('all')} className="card  w-82 flex h-62 bg-white shadow-xl lg:mr-0  mr-12 cursor-pointer">
<div className=" py-12 mx-auto flex  justify-center">
    <Image
      src={article.img}
      width={150}
      height={150}
      alt={article.title}
      className='mx-auto w-auto h-auto items-center justify-center bg-auto'
      priority
    />
</div>
  <div className="card-body mt-6 ">
    <h2 className="card-title">{article.title}</h2>
   <div className='flex items-center'>
    <span className='flex text-yellow-400'>
        {article.star}
        {article.star}
        {article.star}
        {article.star}
    </span>
    <span className='ml-2 italic'>
        {article.reviews}
    </span>
   </div>
    <div className='flex items-center justify-between'>
        <div>
            <span className='line-through'>
            {article.prevPrice}
        </span>
        <span className='ml-2'>
           ${article.newPrice}
        </span>
        </div>
        <div className='text-2xl  flex space-x-2' >
               <BsFillSuitHeartFill/>
               <span className='cursor-pointer  hover:text-yellow-400'>

              <BiSolidBasket/>
               </span>
        </div>
    </div>
  </div>
</div>
  )
}

export default Card