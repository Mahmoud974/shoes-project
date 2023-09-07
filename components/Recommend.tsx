import React, { useState } from 'react'

type Props = {
  setCompany: React.Dispatch<React.SetStateAction<string>>
  company: string
}

const Recommend:React.FC<Props> = ({setCompany, company}) => {
  const styleRecommend = 'border p-2 px-12 rounded-md hover:bg-white hover:text-black cursor-pointer hover:font-bold'
  const [colorNav, setColorNav] = useState<string>('ALL')
  return (
    <div className="">
      <h2 className='text-2xl lg:text-left text-center my-6 lg:my-0'>Recommended ✅</h2>
      <ul className='my-6 flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-8 text-center '>
        <li><label className={`${styleRecommend} ${company=== "ALL" ? "bg-white text-black font-bold" : ""}`}><input type="radio" name="category" id="" className='mr-2 hidden ' onClick={() => setCompany("ALL")} />All Products</label></li>
        <li><label  className={`${styleRecommend} ${company=== "Nike" ? "bg-white text-black font-bold" : ""}`}><input type="radio" name="category" id="" className='mr-2 hidden ' onClick={() => setCompany("Nike")} />Nike</label></li>
        <li><label  className={`${styleRecommend} ${company=== "Adidas" ? "bg-white text-black font-bold" : ""}`}><input type="radio" name="category" id="" className='mr-2 hidden ' onClick={() => setCompany("Adidas")} />Adidas</label></li>
        <li><label  className={`${styleRecommend} ${company=== "Puma" ? "bg-white text-black font-bold" : ""}`}><input type="radio" name="category" id="" className='mr-2 hidden ' onClick={() => setCompany("Puma")} />Puma</label></li>
        <li><label  className={`${styleRecommend} ${company=== "Vans" ? "bg-white text-black font-bold" : ""}`}><input type="radio" name="category" id="" className='mr-2 hidden ' onClick={() => setCompany("Vans")} />Vans</label></li>
      </ul>
    </div>
  )
}

export default Recommend