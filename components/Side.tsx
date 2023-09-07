import React from 'react'
import { Data } from '../db/data'

type Props = {
  setPrice:  React.Dispatch<React.SetStateAction<number>>
  setSecondPrice:  React.Dispatch<React.SetStateAction<number >>
  setCategory: React.Dispatch<React.SetStateAction<string >>
  setColor: React.Dispatch<React.SetStateAction<string >>
 
  
}

const Side:React.FC<Props> = ({setPrice, setSecondPrice, setCategory, setColor }) => {
  const changePrice = (priceDown: number, priceUp: number) =>{
  setPrice(priceDown)
  setSecondPrice(priceUp)
  
}

  return (
   <div className='flex flex-col lg:mr-16 lg:mt-0 mt-12'>
  <div >
 
 <h1 className='text-2xl mb-2'>Categories ✅</h1>
 <ul >
  <li ><label className='cursor-pointer' ><input type="radio" name="category" id="all" className='mr-2' onClick={()=> setCategory('ALL') } />All</label></li>
  <li ><label className='cursor-pointer' ><input type="radio" name="category" id="sneakers" className='mr-2' onClick={()=> setCategory('sneakers') } />Sneakers</label></li>
  <li ><label className='cursor-pointer'><input type="radio" name="category" id="" className='mr-2' onClick={()=> setCategory('flats')}/>Flats</label></li>
  <li ><label className='cursor-pointer'><input type="radio" name="category" id="" className='mr-2' onClick={()=> setCategory('sandals')}/>Sandals</label></li>
  <li ><label className='cursor-pointer'><input type="radio" name="category" id="" className='mr-2' onClick={()=> setCategory('heels')}/>Heels</label></li>
 </ul>
</div>

<div className='mt-12'>
 
 <h1 className='text-2xl my-2'>Price ✅</h1>
 <ul >
  <li><label className='cursor-pointer'><input  type="radio" name="price" id="all" className='mr-2' onClick={() => changePrice(0,200)}/>All</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="price" id="sneakers" className='mr-2' onClick={() => changePrice(0,50)}/>$0-50</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="price" id="" className='mr-2' onClick={() => changePrice(50,100)}/>$50-$100</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="price" id="" className='mr-2' onClick={() => changePrice(100,150)}/>$100-$150</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="price" id="" className='mr-2' onClick={() => changePrice(150,200)}/>Over $150</label></li>
 </ul>
</div>

<div className='mt-12'>
 
 <h1 className='text-2xl my-2'>Colors ✅</h1>
 <ul >
  <li><label className='cursor-pointer'><input type="radio" name="category" id="all" className='mr-2'  onClick={() => setColor("ALL")}/>All</label></li>
  <li><label className='cursor-pointer' ><input type="radio" name="category" id="sneakers" className='mr-2'  onClick={() => setColor("black")}/>Black</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="category" id="" className='mr-2'  onClick={() => setColor("blue")}/>Blue</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="category" id="" className='mr-2'  onClick={() => setColor("red")}/>Red</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="category" id="" className='mr-2'  onClick={() => setColor("green")}/>Green</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="category" id="" className='mr-2'  onClick={() => setColor("white")}/>White</label></li>
 </ul>
</div>
</div>
  )
}

export default Side