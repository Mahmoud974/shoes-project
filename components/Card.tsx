"use client"
import Image from 'next/image'
import React, { useEffect,  useState } from 'react'
import { Data, deleteCart } from '@module/index';
import {BiInfoCircle, BiSolidBasket} from 'react-icons/bi'
import Link from 'next/link';

type Props = {
    article: Data,
    basket: string,
    setBasket: React.Dispatch<React.SetStateAction<string>>,
    setArticle: React.Dispatch<React.SetStateAction<string | undefined>>,
}

const Card:React.FC<Props> = ({article, setBasket, setArticle}) => {
const [cart, setCartItems] = useState<Data[]>([])
const [addProduct, setAddProduct] = useState<boolean>(true)

const setLocalStorageItem= (key:string, data: Data[]) =>{
  localStorage.setItem(key, JSON.stringify(data));
}

const getLocalStorageItem= (key:string)=> {
const storedItem = localStorage.getItem(key);
return storedItem ? JSON.parse(storedItem) : [];
}

useEffect(() => {
  const storedCart = getLocalStorageItem('cart');
  setCartItems(storedCart);
}, []);

const addToCart = (item: Data, title: string) => {
const updatedCart:Data[] = [...cart, item];
const uniqueProduct = updatedCart.filter((produit, index, self) =>
  index === self.findIndex((p) => (
    p.id === produit.id &&
    p.title === produit.title &&
    p.company === produit.company
  ))
);
  setCartItems(updatedCart);
  setLocalStorageItem('cart', uniqueProduct);

  if (item) {
    setArticle(title);
    setAddProduct(false)
  }
};

return (
 <div className="card  w-82 flex h-76 bg-white shadow-xl lg:mr-0 md:mx-0 mx-6"  >
    <div onClick={()=> setBasket('all')} >
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
    <div className='flex flex-col items-center justify-between'>
        <div>
            <span className='line-through'>
            {article.prevPrice}
        </span>
        <span className='ml-2'>
           ${article.newPrice}
        </span>
        </div>
        <div className='text-2xl  flex items-center space-x-2' >
          <Link href={`shoe/${article.id}`} className=' cursor-pointer'>
          <BiInfoCircle className='hover:text-blue-400'/>
           </Link>
         
              { addProduct ?
                 <span className='cursor-pointer hover:text-yellow-400'>
                <BiSolidBasket onClick={() => addToCart(article, article.title)}  />
              </span> : 
              <button className='cursor-pointer flex justify-center bg-red-500 rounded-full mx-auto  w-[1.35rem] h-[1.35rem]  text-white text-center items-center font-bold ml-12 text-xs'onClick={() => deleteCart(article?.id)} >
                X
              </button>
              }
              
        </div>
    </div>
  </div>
</div>
</div>
  
  )
}

export default Card