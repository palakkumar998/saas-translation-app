import PricingCards from "@/components/PricingCards"

function PricingPage() {
    return (


        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')]">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

                {/* Prcing title */}
                <div className="mt-5 max-w-xl text-center mx-auto">
                    <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                        The Right price for you, Whoever you are.
                    </h1>
                </div>

                {/* Background Desgn */}
                <div className="mt-5 max-w-3xl text-center mx-auto">
                    <p className="text-lg text-gray-600 dark:text-gray-400">Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.</p>
                </div>
                <div className="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900">
                    <div className="bg-white size-48 rounded-lg dark:bg-slate-900"></div>
                </div>

                <div className="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                    <div className="bg-white size-48 rounded-full dark:bg-slate-900"></div>
                </div>

                {/* //?  Pricing Component */}
                <PricingCards />
 

            </div>
        </div>

    )
}

export default PricingPage