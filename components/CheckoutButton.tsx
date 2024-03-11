'use client'

import { useSession } from "next-auth/react"



function CheckoutButton() {

    const { data: session } = useSession();


    const createCheckoutSession = async () => {
        if (!session) return


        //todo push a document into firestore Database

        //todo stripe extension on firebase will create a session

        //todo redireact user to check out page

    }
    return (
        <div className="flex flex-col space-y-2" >
            {/* //todo if user is subscribed */}
            <button onClick={() => createCheckoutSession()} className="mt-8 gap-3 inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" >
                SignUp
            </button>
        </div>

    )
}

export default CheckoutButton