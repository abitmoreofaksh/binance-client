"use client";
import { motion, AnimatePresence } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Accordion = ({
  questions = [
    {
      question: "What is a cryptocurrency exchange?",
      answer: `<span style="color:yellow">Cryptocurrency</span> exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume.`,
    },
    {
      question: "What products does Binance provide?",
      answer: `Binance is the world's leading cryptocurrency exchange, catering to 235 million registered users in over 180 countries. With low fees and over 350 cryptocurrencies to trade, Binance is the preferred exchange to trade Bitcoin, Altcoins, and other virtual assets.
      With Binance users can:
      <ul style="list-style: disc;margin-left:15px">
<li>Trade hundreds of cryptocurrencies on Spot, Margin, and Futures markets.</li>
<li>Buy and sell cryptocurrencies with Binance P2P.</li>
<li>Earn interest on your crypto with Binance Earn.</li>
<li>Buy or earn new tokens on Binance Launchpad.</li>
<li>Trade, stake, and loan NFTs on Binance NFT marketplace.</li></ul>`,
    },
    {
      question: "How to buy Bitcoin and other cryptocurrencies on Binance",
      answer:
        "There are several ways to buy cryptocurrencies on Binance. You can use a credit/debit card, cash balance, or Apple Pay/Google Pay to purchase crypto on Binance. Before getting started, please make sure you’ve completed Identity Verification for your Binance account.",
    },
    {
      question: "How to track cryptocurrency prices",
      answer:
        "The easiest way to track the latest cryptocurrency prices, trading volumes, trending altcoins, and market cap is the Binance Cryptocurrency Directory. Click on the coins to know historical coin prices, 24-hour trading volume, and the price of cryptocurrencies like Bitcoin, Ethereum, BNB and others in real-time.",
    },
    {
      question: "How to trade cryptocurrencies on Binance",
      answer:
        "You can trade hundreds of cryptocurrencies on Binance via the Spot, Margin, Futures, and Options markets. To begin trading, users need to register an account, complete identity verification, buy/deposit crypto, and start trading.",
    },
    {
      question: "How to earn from crypto on Binance",
      answer:
        "Users can earn rewards on more than 180+ cryptocurrencies by using one of the products offered on Binance Earn. Our platform offers dozens of digital assets like Bitcoin, Ethereum, and stablecoins.",
    },
  ],
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-darkblack">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-white text-5xl mb-12 font-semibold text-center">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="space-y-2 mb-8 relative max-w-7xl mx-auto ">
        {questions?.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div
              className={
                activeIndex === index
                  ? "backdrop-blur-sm rounded-xl overflow-hidden  text-white  shadow-sm  transition-all duration-300 "
                  : "  backdrop-blur-sm rounded-xl overflow-hidden  text-white  shadow-sm  transition-all duration-300"
              }
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span
                  className={
                    activeIndex === index
                      ? "text-white  text-lg font-semibold transition-colors duration-300 flex items-center gap-2"
                      : "text-lg font-semibold transition-colors duration-300 flex items-center gap-2"
                  }
                >
                  <div className="w-8 h-8 border border-slate-800 rounded-lg flex items-center justify-center">
                    {index + 1}
                  </div>
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className={
                    activeIndex === index
                      ? "bg-yellow-400 text-black  flex-shrink-0 ml-6 p-1 rounded-full transition-colors duration-300"
                      : "flex-shrink-0 ml-6 p-1 rounded-full transition-colors duration-300"
                  }
                >
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5" size={16} strokeWidth={3} />
                  ) : (
                    <Plus className="w-5 h-5" strokeWidth={3} />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.3, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.2 },
                      },
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-6"
                    >
                      <div className="relative">
                        <p
                          className="font-light leading-relaxed text-slate-400 ml-10"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="py-[64px] bg-[#1e2329] flex items-center flex-col gap-8 justify-center">
        <div className="text-white text-5xl font-semibold text-center">
          Start earning today
        </div>
        <button className="px-8 py-3 my-2 bg-yellow-400 hover:bg-yellow-500  text-black  rounded-md font-semibold  hover:shadow-lg">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Accordion;
