"use client"
import React, { useEffect, useRef, useState } from 'react'
import dataShoes, { Data } from '../../db/data'
import Card from '../../components/Card'
import Side from '../../components/Side'
import Recommend from '../../components/Recommend'

const Page = () => {
  const [data] = useState(dataShoes)
  const [category, setCategory] = useState<string>("ALL")
  const [price, setPrice] = useState<number>(0)
  const [secondPrice, setSecondPrice] = useState<number>(200)
  const [company, setCompany] = useState<string>('ALL')
  const [color, setColor] = useState<string>('ALL')
  const parseTabRef = useRef<Data[]>([])
  const [basket, setBasket] = useState('')
let ok;
  useEffect(()=>{
 localStorage.setItem('items', JSON.stringify(data))


  },[data])

  useEffect(()=>{
    const dataTab = localStorage.getItem('items')
    if(dataTab){

      const  parseTab  = JSON.parse(dataTab)
       parseTabRef.current = parseTab
    }
  },[])



  return (
   <div className='flex lg:flex-row lg:text-left text-center flex-col-reverse space-x-12 lg:mt-12 '>
   <Side setPrice={setPrice} setSecondPrice={setSecondPrice} setCategory={setCategory} setColor={setColor} />
   <div className=''>
    <Recommend setCompany={setCompany} company={company} />
     <div className="grid place-content-center lg:grid-cols-4 lg:gap-2 gap-6 my-12">
    {data?.filter(shoe => Number(shoe.newPrice) >= price && Number(shoe.newPrice) <= secondPrice)
    .filter((categories:Data) => category === "ALL" ? categories.category : categories.category === category)
    .filter((recommend:Data) => company === "ALL" ? recommend.company : recommend.company === company)
    .filter((colorCompany:Data) => color === "ALL" ? colorCompany.color  : colorCompany.color ===  color)
    .sort((a,b)=>parseFloat(a.newPrice) - parseFloat(b.newPrice))
    .map((article:Data) => <Card article={article} key={article.id} setBasket={setBasket} basket={basket} />)
    }
  
   </div>
   </div>
   </div>
  )
}

export default Page