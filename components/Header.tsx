import React from 'react'
import Logo from './Logo'
import { DarkModeToggle } from './DarkModeToggle'
import UserButton from './UserButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import Link from 'next/link'

import { MessageSquareIcon } from 'lucide-react'
import CreateChatButton from './CreateChatButton'



async function Header() {
    const session = await getServerSession(authOptions)
    console.log(session);


    return (
        <header className='sticky top-0 z-50' >
            <nav className='flex flex-col sm:flex-row items-center justify-center p-5 pl-2  bg-white dark:bg-gray-900 max-w-7xl mx-auto ' >
                <Logo />
                <div className='flex-1  flex items-center justify-end space-x-2 ' >

                    {/* Language select components */}


                    {session ? (
                        <>
                            <Link href={"/chat"} prefetch={false} >
                                <MessageSquareIcon className='dark:text-white text-black' />
                            </Link>
                            <CreateChatButton />
                        </>
                    ) : (

                        <>
                            <Link href={"/pricing"} prefetch={false}> Pricing
                            </Link>
                        </>
                    )}



                    <DarkModeToggle />
                    <UserButton session={session} />


                    {/* User Profile */}

                </div>
            </nav>

            {/* Upgrade section  */}

            Header
        </header>
    )
}

export default Header