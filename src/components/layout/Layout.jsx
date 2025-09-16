import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router'

function Layout() {
    return (
        <>
            <div className='container mx-auto'>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout