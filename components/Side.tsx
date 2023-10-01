"use client"
import React  from 'react'


type Props = {
  setPrice:  React.Dispatch<React.SetStateAction<number>>
  setSecondPrice:  React.Dispatch<React.SetStateAction<number >>
  setCategory: React.Dispatch<React.SetStateAction<string >>
  setColor: React.Dispatch<React.SetStateAction<string >>
  category: string
}

interface Prices {
    label: string;
    minPrice: number;
    maxPrice: number;
}
let categories:string[] = ['ALL', 'sneakers', 'flats', 'sandals', 'heels']
let prices:Prices[] = [{ label: 'All', minPrice: 0, maxPrice: 200 },
  { label: '$0-50', minPrice: 0, maxPrice: 50 },
  { label: '$50-$100', minPrice: 50, maxPrice: 100 },
  { label: '$100-$150', minPrice: 100, maxPrice: 150 },
  { label: 'Over $150', minPrice: 150, maxPrice: 200 }]
let colors:string[] = ['ALL', "black", "blue", "red", "green", "white" ]

console.log(categories);

const Side:React.FC<Props> = ({setPrice, setSecondPrice, setCategory, setColor }) => {

  const changePrice = (priceDown: number, priceUp: number) =>{
  setPrice(priceDown)
  setSecondPrice(priceUp)
}

 return (
   <div className='md:flex hidden flex-col lg:mr-16 lg:mt-0 mt-12 ' style={{marginLeft:0}}>
  <div >
 
 <h1 className='md:text-2xl text-md font-bold text-md mb-2'>Categories</h1>
<form >
   <ul >
    {
      categories.map((cat:string) =>  <li key={cat} ><label className='cursor-pointer' ><input type="radio" name="category"  className='mr-2' onClick={()=> setCategory(cat)}/>{cat.toLocaleUpperCase()}</label></li>  )
    }

 </ul>
</form>
</div>

<div className='mt-12'>
<h1 className='md:text-2xl text-md font-bold text-md my-2'>Price</h1>
<form >
   <ul >
{prices.map((range:Prices, index:number) => (
      <li key={index}>
        <label className='cursor-pointer'>
          <input
            type="radio"
            name="price"
            className='mr-2'
            onClick={() => changePrice(range.minPrice, range.maxPrice)}/>
          {range.label}
        </label>
      </li>
    ))}
 </ul>
</form>
</div>

<div className='mt-12'>
 
 <h1 className='md:text-2xl text-md font-bold my-2'>Colors</h1>
 <form action="">
  <ul >
    {
      colors.map(color =>  <li key={color} ><label className='cursor-pointer' ><input type="radio" name="category"  className='mr-2' onClick={()=> setColor(color)}/>{color.toLocaleUpperCase()}</label></li>  )
    }
 </ul>
 </form>
</div>
</div>
  )
}

export default Side