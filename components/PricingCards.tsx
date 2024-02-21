import React from 'react';
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

function PricingCards() {
    return (
        <div className="glass-container">
            {tiers.map((tier) => (
                <div key={tier.id} className="glass-card max-w-3xl">
                    <h1 className="card-title dark:text-white">{tier.name}</h1>
                    <div className="card-price">{tier.priceMonthly}</div>
                    <p className="card-description dark:text-gray-400">{tier.description}</p>
                    <ul className="card-features">
                        {tier.features.map((feature, index) => (
                            <li key={index}>
                                <svg className="feature-icon " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className=' dark:text-gray-100 text-base' >{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <a href={tier.href} className="card-button">
                        Get started
                    </a>
                </div>
            ))}
        </div>
    );
}

export default PricingCards;
