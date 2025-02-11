import { CircleDollarSign, Globe } from "lucide-react";
import React from "react";

const Footer = () => {
  const footerSections = {
    Community: {
      socials: [
        {
          platform: "Discord",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-discord"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
              <path d="M7 16.5c3.5 1 6.5 1 10 0" />
            </svg>
          ),
        },
        {
          platform: "Telegram",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
          ),
        },
        {
          platform: "TikTok",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
            </svg>
          ),
        },
        {
          platform: "Facebook",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          ),
        },
        {
          platform: "Twitter",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          ),
        },
        {
          platform: "Reddit",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-reddit"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
              <path d="M12 8l1 -5l6 1" />
              <path d="M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <circle cx={9} cy={13} r={0.5} fill="currentColor" />
              <circle cx={15} cy={13} r={0.5} fill="currentColor" />
              <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
            </svg>
          ),
        },
        {
          platform: "Instagram",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M16.5 7.5v.01" />
            </svg>
          ),
        },
        {
          platform: "Binance Live",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-binance"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 8l2 2l4 -4l4 4l2 -2l-6 -6z" />
              <path d="M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5z" />
              <path d="M20 10l2 2l-2 2l-2 -2z" />
              <path d="M4 10l2 2l-2 2l-2 -2z" />
              <path d="M12 10l2 2l-2 2l-2 -2z" />
            </svg>
          ),
        },
        {
          platform: "YouTube",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
              <path d="M10 9l5 3l-5 3z" />
            </svg>
          ),
        },
        {
          platform: "WhatsApp",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
          ),
        },
      ],
    },
    "About Us": [
      "About",
      "Careers",
      "Announcements",
      "News",
      "Press",
      "Legal",
      "Terms",
      "Privacy",
      "Building Trust",
      "Blog",
      "Community",
      "Risk Warning",
      "Notices",
      "Downloads",
      "Desktop Application",
    ],
    Products: [
      "Exchange",
      "Buy Crypto",
      "Pay",
      "Academy",
      "Live",
      "Tax",
      "Gift Card",
      "Launchpool",
      "Auto-Invest",
      "ETH Staking",
      "NFT",
      "BABT",
      "Research",
      "Charity",
    ],
    Business: [
      "P2P Merchant Application",
      "P2Pro Merchant Application",
      "Listing Application",
      "Institutional & VIP Services",
      "Labs",
      "Binance Connect",
    ],
    Learn: [
      "Learn & Earn",
      "Browse Crypto Prices",
      "Bitcoin Price",
      "Ethereum Price",
      "Browse Crypto Price Predictions",
      "Bitcoin Price Prediction",
      "Ethereum Price Prediction",
      "Ethereum Upgrade (Pectra)",
      "Buy Bitcoin",
      "Buy BNB",
      "Buy XRP",
      "Buy Dogecoin",
      "Buy Ethereum",
      "Buy Tradable Altcoins",
    ],
    Service: [
      "Affiliate",
      "Referral",
      "BNB",
      "OTC Trading",
      "Historical Market Data",
      "Trading Insight",
      "Proof of Reserves",
    ],
    Support: [
      "24/7 Chat Support",
      "Support Center",
      "Product Feedback & Suggestions",
      "Fees",
      "APIs",
      "Binance Verify",
      "Trading Rules",
      "Binance Airdrop Portal",
      "Law Enforcement Requests",
    ],
  };

  return (
    <footer className="bg-darkblack text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 justify-between md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Community Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <div className="grid grid-cols-4 gap-4">
              {footerSections.Community.socials.map((social, index) => (
                <button
                  key={index}
                  className="w-8 h-8  rounded-full flex items-center justify-center hover:text-gray-400"
                >
                  {social.icon}
                </button>
              ))}
            </div>
            <div className="mt-6 flex items-start justify-between gap-4 flex-col space-x-2">
              <div className="flex items-center gap-2 font-semibold rounded px-3 py-2">
                <Globe
                  fill="white"
                  className="h-6 w-6 text-[#181a20] cursor-pointer hover:fill-yellow-400"
                />
                <span className="text-sm">English (India)</span>
              </div>
              <div className="flex items-center gap-2 font-semibold rounded px-3 py-2">
                <CircleDollarSign className="h-6 w-6  cursor-pointer hover:fill-yellow-400" />
                <span className="text-sm">USD-$</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              {footerSections["About Us"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-yellow-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerSections.Products.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-yellow-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-4">Business</h3>
              <ul className="space-y-2">
                {footerSections.Business.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-white hover:text-yellow-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Learn</h3>
              <ul className="space-y-2">
                {footerSections.Learn.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-white hover:text-yellow-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-4">Service</h3>
              <ul className="space-y-2">
                {footerSections.Service.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-white hover:text-yellow-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {footerSections.Support.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-white hover:text-yellow-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex justify-center gap-6 items-center">
          <div className="text-sm text-gray-400">Binance© 2025</div>
          <div>
            <button className="text-sm text-gray-400 hover:text-yellow-400">
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
