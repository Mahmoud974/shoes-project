import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Error = () => {
  return (
    <div>
   <Image src='/error.png' width='700' height='700' alt='logo shoe' className='flex items-center mx-auto '/>
   <Link href='/' className='flex justify-center my-10 max-w-xs mx-auto bg-red-500 px-2 py-4 text-white rounded-md'>
    <button>Home</button>
   </Link>
    </div>
  )
}

export default Error