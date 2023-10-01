"use client"
import React, {useEffect,  useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Data, totalItems } from '../module/index';


type Props = {
  setLengthArticle: React.Dispatch<React.SetStateAction<number>>
  setResult: React.Dispatch<React.SetStateAction<number>>
}


const CardBasket = ({ setResult,setLengthArticle}:Props) => {

const [cartItems, setCartItems] = useState<Data[]>([]);
const [quantityItem, setQuantityItem] = useState<number[]>(
  cartItems.map((item: Data) => item.quantity)
);
 
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
  const deleteCart = (id:any) =>{
    let storageShoes: any[] = []; // Définissez un type any pour le moment

const storedCart = localStorage.getItem('cart');
if (storedCart) {
  try {
    storageShoes = JSON.parse(storedCart);
  } catch (error) {
    console.error('Error parsing cart data:', error);
  }
}
     const indexASupprimer = storageShoes.findIndex((element:any) => element.id === id);

    if (id !== -1) {
      storageShoes.splice(indexASupprimer, 1);
      localStorage.setItem('cart', JSON.stringify(storageShoes));
      console.log(`Élément avec l'ID ${id} supprimé du tableau.`);
      // Mettez à jour l'état de votre composant ou effectuez toute autre action nécessaire ici.
    } else {
      console.log(`L'élément avec l'ID ${id} n'a pas été trouvé dans le tableau.`);
    }

  }

console.log(totalItems(cartItems) * 200);


setLengthArticle(totalItems(cartItems))

const changeQuantity = (newValue: number, index: number) => {
  // Créez une copie du tableau d'états
  const newValues = [...quantityItem];
  // Mettez à jour la valeur correspondante
  newValues[index] = newValue;
  // Mettez à jour le tableau d'états avec les nouvelles quantities
  setQuantityItem(newValues);

  // Mettez à jour les données du panier
  const newCartItems = [...cartItems];

  // Supposons que vous souhaitiez trouver l'index en fonction de la propriété "id" de l'élément
  const idToFind = 123; // Remplacez par la valeur de l'ID que vous recherchez

  const indexToUpdate = newCartItems.findIndex(item => item.id === index);

  if (indexToUpdate !== -1) {
    newCartItems[indexToUpdate].quantity = newValue;
  }

  // Mettez à jour le localStorage avec les données mises à jour
  localStorage.setItem('cart', JSON.stringify(newCartItems));
};

const totalArticle = () => {
    const result = cartItems.reduce(
      (acc: any, art: any) =>
        acc + Number(art.newPrice) * (quantityItem[art.id] || 1),
      0
    );
    return result;
  };
setResult(totalArticle())
return (
  <div className='flex flex-col'>

{
  totalArticle()? cartItems?.map((findProduct:any )=> <div key={Number(findProduct.id)}>
<div>

</div>
    
        <div  className=''>
        
              <div className="flex md:flex-row flex-col justify-between items-center">
               <div className='bg-white flex items-center w-4/4 p-14 rounded-xl cursor-pointer' >
                 <Link href={`shoe/${findProduct.id}`} className=' cursor-pointer'>
                <Image src={`${findProduct?.img}`} width='100' height='100' alt={`${findProduct?.title}`} className='w-auto' priority  />
                </Link>
                </div>

                <div className="w-52 md:mt-0 mt-6 text-center md:text-left">
                  <h2 className='font-bold text-2xl'>{findProduct?.title}</h2>
               
                <p>
                  Lorem ipsum dolor sit amet consectetur...
                </p>
                </div>
                <div className='flex flex-col space-y-2'>
                  <div className='flex space-x-4'>
                  <p>Quantity:</p>
                  <input
  type="number"
  name=""
  id=""
  className="w-12"
  min={1}
  max={10}
  value={!quantityItem[Number(findProduct.id)] ? findProduct.quantity : quantityItem[Number(findProduct.id)]}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
    changeQuantity(Number(e.target.value), Number(findProduct.id))
  }
/>
                </div>
                 <div>
                  <p className='text-3xl text-center md:text-right  text-white' >
                   ${!quantityItem[Number(findProduct.id)] ?  findProduct.quantity * Number(findProduct?.newPrice): quantityItem[Number(findProduct.id)] * Number(findProduct?.newPrice)}
                  </p>
                 </div>
                  <div className='flex  max-w-[9rem]  mx-auto'>
                <button className='cursor-pointer flex justify-center bg-red-500 rounded-full mx-auto  w-12 h-12  text-white text-center items-center font-bold md:ml-12' onClick={() => deleteCart(findProduct?.id)} >
                X
              </button>
           
              </div>
                </div>

              </div>
              </div>
             <div className="bg-gray-400 h-[0.09rem] my-6 "></div>
             </div>) : <h1 className='text-center text-2xl italic my-16'>Le panier est vide </h1>
}
  </div>

  
  )
}

export default CardBasket;