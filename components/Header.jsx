import React, { useContext } from 'react'

import Link from 'next/link'

const categories = [{name: 'Dogs', slug: 'dogs'}, {name: 'Cats', slug: 'cats'}, {name: 'Red frogs', slug: 'red-frogs'}]

const Header = () => {
  return (
    <div className='container mx-auto px-32 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className='cursor-pointer font-blod text-4xl text-white'>
                        My Blog                        
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={'/categpry/${category.slug}'}>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header