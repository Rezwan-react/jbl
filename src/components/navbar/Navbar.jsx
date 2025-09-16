import React from 'react'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router'

function Navbar() {
    return (
        <>
            <nav>
                <div className="container flex justify-between items-center px-5 py-5">
                    <div>
                        <Link to="/"><img src="/image/logo.png" alt="logo" /></Link>
                    </div>
                    <div>
                        <ul className='flex justify-center items-center gap-5 text-[16px] font-medium font-poppins text-[#000]'>
                            <li><Link to="/headphonePage">Headphone</Link></li>
                            <li><Link to="/speakers">Speakers</Link></li>
                            <li><Link to="/luxuryAudio">Luxury Audio</Link></li>
                            <li><Link to="/professionalAudio">Professional Audio</Link></li>
                            <li><Link to="/carAudio">Car Audio</Link></li>
                            <li><Link to="/accessories">Accessories</Link></li>
                            <li><Link to="/soundOfCelebrations">Sound Of celebrations</Link></li>
                            <li><Link to="/clearanceSale">Clearance Sale</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex justify-center items-center gap-4'>
                            <li><CiSearch className='text-2xl font-medium ' /></li>
                            <li><FaUser className='text-2xl font-medium ' /></li>
                            <li><CiShoppingCart className='text-2xl font-medium ' /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar