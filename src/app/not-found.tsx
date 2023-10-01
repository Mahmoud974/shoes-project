import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const Error = (props: Props) => {
  return (
    <div>
    
      <Image src='/error.png' width='700' height='700' alt='logo shoes' className='mx-auto flex items-center'/>
   <Link href='/' className='flex  my-10 max-w-xs mx-auto  justify-center bg-red-500 px-2 py-4 text-white rounded-md'>
    <button>Home</button>
   </Link>
    </div>
  )
}

export default Error