import { useState } from "react";
import {RiFilter2Line} from "react-icons/ri"
import Side from "./Side";


type Props = {
  setPrice:  React.Dispatch<React.SetStateAction<number>>
  setSecondPrice:  React.Dispatch<React.SetStateAction<number >>
  setCategory: React.Dispatch<React.SetStateAction<string >>
  setColor: React.Dispatch<React.SetStateAction<string >>
}

export default function FilterShoes({setPrice, setSecondPrice, setCategory, setColor}:Props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const changePrice = (priceDown: number, priceUp: number) =>{
    setPrice(priceDown)
    setSecondPrice(priceUp) 
  }
  return (
    <div className="md:hidden flex  items-center justify-center border-gray-400 py-8 order-1 -my-8 " >
   
      <nav>
        <section className="MOBILE-MENU  flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
          <RiFilter2Line className='text-4xl border rounded-md p-2'/>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          {/* Filtrer mes éléments */}
     <div className='flex flex-col lg:mr-16 lg:mt-0 '>
  <div className="">
 
 <h1 className='md:text-2xl text-md font-bold text-md mb-2'>Categories</h1>
<form action="">
   <ul >
  <li ><label className='cursor-pointer' ><input type="radio" name="category" id="all" className='mr-2' onClick={()=> setCategory('ALL') } />All</label></li>
  <li ><label className='cursor-pointer' ><input type="radio" name="category" id="sneakers" className='mr-2' onClick={()=> setCategory('sneakers') } />Sneakers</label></li>
  <li ><label className='cursor-pointer'><input type="radio" name="category" id="" className='mr-2' onClick={()=> setCategory('flats')}/>Flats</label></li>
  <li ><label className='cursor-pointer'><input type="radio" name="category" id="" className='mr-2' onClick={()=> setCategory('sandals')}/>Sandals</label></li>
  <li ><label className='cursor-pointer'><input type="radio" name="category" id="" className='mr-2' onClick={()=> setCategory('heels')}/>Heels</label></li>
 </ul>
</form>
</div>

<div className='mt-12'>
 
 <h1 className='md:text-2xl text-md font-bold text-md my-2'>Price</h1>
<form action="">
   <ul >
  <li><label className='cursor-pointer'><input  type="radio" name="price" id="all" className='mr-2' onClick={() => changePrice(0,200)} />All</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="price" id="sneakers" className='mr-2' onClick={() => changePrice(0,50)}/>$0-50</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="price" id="" className='mr-2' onClick={() => changePrice(50,100)}/>$50-$100</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="price" id="" className='mr-2' onClick={() => changePrice(100,150)}/>$100-$150</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="price" id="" className='mr-2' onClick={() => changePrice(150,200)}/>Over $150</label></li>
 </ul>
</form>
</div>

<div className='mt-12'>
 
 <h1 className='md:text-2xl text-md font-bold my-2'>Colors</h1>
 <form action="">
  <ul >
  <li><label className='cursor-pointer'><input type="radio" name="color" id="all" className='mr-2'  onClick={() => setColor("ALL")} />All</label></li>
  <li><label className='cursor-pointer' ><input type="radio" name="color" id="sneakers" className='mr-2'  onClick={() => setColor("black")}/>Black</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="color" id="" className='mr-2'  onClick={() => setColor("blue")}/>Blue</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="color" id="" className='mr-2'  onClick={() => setColor("red")}/>Red</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="color" id="" className='mr-2'  onClick={() => setColor("green")}/>Green</label></li>
  <li><label className='cursor-pointer'><input type="radio" name="color" id="" className='mr-2'  onClick={() => setColor("white")}/>White</label></li>
 </ul>
 </form>
</div>
</div>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #202020;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}