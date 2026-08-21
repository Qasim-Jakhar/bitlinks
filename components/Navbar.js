import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-15 bg-purple-700 flex justify-between px-8 items-center text-white'>
        <div className="logo font-bold text-2xl">
            <Link href={"/"}>BitLinks</Link>
        </div>
        <ul className='flex justify-center items-center gap-4 font-semibold'>
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/about"}><li>About</li></Link>
            <Link href={"/generate"}><li>Shorten</li></Link>
            <Link href={"/contact"}><li>Contact Us</li></Link>
            <li className='flex gap-3'>
                <Link href={"/generate"}>
                <button className='bg-purple-500 p-3 py-1 shadow-lg rounded-lg'>Try Now</button>
                </Link>
                <Link href={"/github"}>
                <button className='bg-purple-500 p-3 py-1 shadow-lg rounded-lg'>GitHub</button>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
