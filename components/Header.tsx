import React from 'react'
import Logo from './Logo'
import { DarkModeToggle } from './DarkModeToggle'
import UserButton from './UserButton'



function Header() {
    return (
        <header className='sticky top-0 z-50' >
            <nav className='flex flex-col sm:flex-row items-center justify-center p-5 pl-2  bg-white dark:bg-gray-900 max-w-7xl mx-auto ' >
                <Logo />
                <div className='flex-1  flex items-center justify-end space-x-2 ' >

                    {/* Language select components */}

                    {/* Session components (hadcn

                        
                    ) */}
                    <DarkModeToggle />
                    <UserButton />


                    {/* User Profile */}
                </div>
            </nav>

            {/* Upgrade section  */}
            Header
        </header>
    )
}

export default Header