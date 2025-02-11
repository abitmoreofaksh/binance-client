"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight, QrCode } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  // Sample crypto price data
  const [cryptos, setCryptos] = useState([]);
  const cryptoPrices = [
    {
      icon: "₿",
      symbol: "BTC",
      name: "Bitcoin",
      price: "$97,800.00",
      change: "+0.19%",
    },
    {
      icon: "Ξ",
      symbol: "ETH",
      name: "Ethereum",
      price: "$2,686.43",
      change: "+1.08%",
    },
    {
      icon: "BNB",
      symbol: "BNB",
      name: "BNB",
      price: "$638.35",
      change: "+5.32%",
    },
    {
      icon: "XRP",
      symbol: "XRP",
      name: "XRP",
      price: "$2.48",
      change: "+2.02%",
    },
    {
      icon: "SOL",
      symbol: "SOL",
      name: "Solana",
      price: "$201.87",
      change: "-1.03%",
    },
  ];

  // Sample news data
  const newsItems = [
    {
      title: "Poland's Central Bank Rejects Bitcoin As Reserve Asset",
      link: "#",
    },
    {
      title:
        "OpenAI Plans To Develop Its First AI Chip To Reduce NVIDIA Dependence",
      link: "#",
    },
    {
      title:
        "Bitcoin Miners Face New Capitulation Phase Amid Market Fluctuations",
      link: "#",
    },
    {
      title: "Elon Musk Updates X Account Profile Description",
      link: "#",
    },
  ];

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/crypto");
        const result = await response.json();
        if (result.success) {
          setCryptos(result.data);
        } else {
          setError("Failed to fetch data");
        }
      } catch (err) {
        setError("Error connecting to server");
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  return (
    <div className="bg-darkblack min-h-[650px]">
      <div className="flex items-start    px-4 py-12 lg:px-8 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex w-full flex-col justify-center">
          <div className="mb-32 p-2">
            <h1 className="text-[84px] mb-4 leading-[1.1] font-bold tracking-tight text-white">
              <span className="text-yellow-400">258,768,029</span>
              <br />
              USERS <br /> TRUST US
            </h1>
            <div className="flex max-w-md gap-4">
              <Input
                type="text"
                placeholder="Email/Phone number"
                className="h-12 border-gray-700 hover:outline-yellow-400 bg-darkblack text-white placeholder:text-gray-500"
              />
              <Button className="h-12 bg-yellow-400 text-base font-semibold text-black hover:bg-yellow-500">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="space-y-4 p-2">
              <p className="text-sm text-gray-500">Or Continue With</p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="h-12 w-12 border-gray-700 bg-darkblack p-2"
                >
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="h-6 w-6"
                  />
                </Button>
                <Button
                  variant="outline"
                  className="h-12 w-12 border-gray-700 bg-darkblack p-2"
                >
                  <img
                    src="https://www.apple.com/favicon.ico"
                    alt="Apple"
                    className="h-6 w-6"
                  />
                </Button>
              </div>
            </div>
            <div className="space-y-4 p-2">
              <p className="text-sm text-gray-500">Download App</p>
              <div>
                <Button
                  variant="outline"
                  className="h-12 w-12 border-gray-700 bg-darkblack"
                >
                  <QrCode
                    strokeWidth={3}
                    className="w-full h-full text-white"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:block lg:w-2/5">
          <div className="rounded-2xl mb-4 bg-[#1E2329] py-[16px] text-[16px]">
            <div className=" px-[26px] w-[480px] flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 font-semibold text-white">
                <div className="flex items-center flex-col gap-2">
                  Popular <div className="h-[3px] w-5 bg-yellow-400" />
                </div>
                <div className="text-gray-500 flex items-center flex-col gap-2">
                  New Listing <div className="h-[3px] w-5 bg-transparent" />
                </div>
              </div>

              <button className="text-gray-400 flex items-center text-sm hover:text-white">
                View All 350+ Coins <ChevronRight className=" h-4 w-4" />
              </button>
            </div>

            {/* Crypto Prices */}
            <div className="flex flex-col items-start flex-1 px-[26px]">
              {cryptos.map((crypto) => (
                <div
                  key={crypto.symbol}
                  className="flex items-center justify-between w-full py-2"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={crypto.logo}
                      alt=""
                      className="h-[28px] w-[28px]"
                    />

                    <div>
                      <span className="font-medium text-white">
                        {crypto.symbol}
                      </span>
                      <span className="ml-2 text-sm text-gray-400">
                        {crypto.name}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-8">
                    <div className="font-medium text-white">
                      {crypto.current_price.toLocaleString()}
                    </div>
                    <div
                      className={
                        crypto.price_change_24h.startsWith("-")
                          ? "text-red-500"
                          : "text-green-500"
                      }
                    >
                      {crypto.price_change_24h}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-[#1E2329] py-[16px] text-[16px]">
            <div className=" px-[26px] w-[480px] flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 font-semibold text-white">
                <div className="flex items-center flex-col gap-2">News</div>
              </div>

              <button className="text-gray-400 flex items-center text-sm hover:text-white">
                View All News <ChevronRight className=" h-4 w-4" />
              </button>
            </div>

            {/* Crypto Prices */}
            <div className="flex flex-col items-start flex-1 px-[26px] text-white">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full py-2"
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
