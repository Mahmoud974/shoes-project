"use client"
import React  from 'react'


type Props = {
  setCompany: React.Dispatch<React.SetStateAction<string>>
  company: string
}

const Recommend:React.FC<Props> = ({setCompany, company}) => {
  const styleRecommend = ' border p-2 px-12 rounded-md hover:bg-white hover:text-black cursor-pointer hover:font-bold'
 let recommendArray = ["ALL", "Nike", "Adidas", "Puma", "Vans"  ]
  return (
    <div className="md:ml-12">
      <h2 className='text-2xl lg:text-left text-center my-6 lg:my-0 font-bold'>Recommended</h2>
      <ul className='my-6 flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-8 text-center'>
       {
          recommendArray.map((recommend:string)=> <li key={recommend}><label className={`${styleRecommend} ${company=== recommend ? "bg-white text-black font-bold" : ""}`}><input type="radio" name="category" id="" className='mr-2 hidden ' onClick={() => setCompany(recommend)}  />{recommend}</label></li>) 
        }
     
      </ul>
      
    </div>
  )
}

export default Recommend