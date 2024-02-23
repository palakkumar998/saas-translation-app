
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import CheckoutButton from './CheckoutButton';

// import './PricingCards.css'; // Import the CSS file for styling

const tiers = [
    {
        name: "Free",
        id: null,
        href: "#",
        priceMonthly: "0₹",
        description: "Get chatting right away with anyone, anywhere",
        features: [
            "20 messages daily limit in One day in a Chat",
            "2 Participant limit in a Chat",
            "3 Chat Room available",
            "48-Hour support response time",
        ],
    },
    {
        name: "Pro",
        id: "123456789",
        href: "#",
        priceMonthly: "399₹",
        description: "Unlock the full Potential with Pro-Version",
        features: [
            "Unlimited daily messages in a Chat",
            "Unlimited Participant limit in a Chat",
            "50 Chat Room available",
            "Upto 5 Different Languages supported translation",
            "Multimedia Sharing Options in chatting",
            "1-Hour dedicated support response time",
            "Explore New features on monthly bases",
        ],
    },
    {
        name: "Advance",
        id: "1234567890",
        href: "#",
        priceMonthly: "599₹",
        description: "Unlock the full Potential with Pro-Version",
        features: [
            "Unlimited daily messages in a Chat",
            "Unlimited Participant limit in a Chat",
            "100 Chat Room available",
            "Upto 15 Different Languages supported translation",
            "Multimedia Sharing Options in chatting",
            "1-Hour dedicated support response time",
            "Explore New features on monthly bases",
            "AI profile Avatar maker",
        ],
    },
];

function PricingCards({ redirect }: { redirect: boolean }) {
    return (
        <div className="flex space-x-3 justify-center">
            {tiers.map((tier) => (
                <div key={tier.id} className="glass-card items-center bg-slate-100 dark:bg-gray-900 p-5 rounded-2xl justify-between max-w-3xl">
                    <h1 className="card-title dark:text-white text-white text-md">{tier.name}</h1>
                    <div className="card-price px-5">{tier.priceMonthly}</div>
                    <p className="card-description px-6 dark:text-gray-400">{tier.description}</p>
                    <ul className="card-features">
                        {tier.features.map((feature, index) => (
                            <li key={index}>
                                <CheckIcon color='green' size={20} className='m-2' />
                                <span className=' dark:text-gray-100 text-base ' >{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className='text-center absolute left-5 mt-6 right-5 bottom-5 '>

                        {redirect ? (
                            <Link href='/register' className='block rounded-lg bg-blue-500 mt-9 px-1.5 py-2 text-sm font-semibold  text-white hover:bg-blue-800' >Get Started</Link>

                        ) : (

                            tier.id && <CheckoutButton />

                        )}
                    </div>

                </div>
            ))}
        </div>
    );
}

export default PricingCards;
