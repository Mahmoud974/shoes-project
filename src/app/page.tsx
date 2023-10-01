"use client"
import React, { useState } from 'react'
import dataShoes from '@db/data'
import Card from '@components/Card'
import Side from '@components/Side'
import Recommend from '@components/Recommend'
import FilterShoes from '@components/FilterShoes'
import { Data } from '@module/index';

const Page = () => {
  const [data] = useState<Data[]>(dataShoes)
  const [category, setCategory] = useState<string>("ALL")
  const [company, setCompany] = useState<string>('ALL')
  const [color, setColor] = useState<string>('ALL')
  const [price, setPrice] = useState<number>(0)
  const [secondPrice, setSecondPrice] = useState<number>(200)
  const [basket, setBasket] = useState<string>('')
  const [article, setArticle] = useState<string>()


 return (
   <div className='flex lg:flex-row lg:text-left text-center flex-col-reverse space-x-12 lg:mt-5'>
<FilterShoes setPrice={setPrice} setSecondPrice={setSecondPrice} setCategory={setCategory} setColor={setColor}/> 
<Side setPrice={setPrice} setSecondPrice={setSecondPrice} setCategory={setCategory} setColor={setColor} category={category} />

<div style={{marginLeft:0}} >
    <Recommend setCompany={setCompany} company={company} />
    {/* Alert */}
   <div className={`alert alert-success  ${article ? '': 'hidden' }`} >
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
 <span >Your article <span className="font-bold">{article}</span> just add to basket</span>

  </div>
     <div className="grid md:ml-12 place-content-center lg:grid-cols-4 lg:gap-2 gap-6 my-12" >
    {data?.filter(shoe => Number(shoe.newPrice) >= price && Number(shoe.newPrice) <= secondPrice)
    .filter((categories:Data) => category === "ALL" ? categories.category : categories.category === category)
    .filter((recommend:Data) => company === "ALL" ? recommend.company : recommend.company === company)
    .filter((colorCompany:Data) => color === "ALL" ? colorCompany.color  : colorCompany.color ===  color)
    .sort((a,b)=>parseFloat(a.newPrice) - parseFloat(b.newPrice))
    .map((article:Data) => <Card   article={article} key={article.id} setBasket={setBasket} basket={basket}  setArticle={setArticle}/>)
    }
   </div>
   </div>
   </div>
  )
}

export default Page

