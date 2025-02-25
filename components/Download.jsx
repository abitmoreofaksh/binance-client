"use client";
import { Button } from "@/components/ui/button";
import { Apple, ComputerIcon as Windows } from "lucide-react";
import { phone } from "./icons/icons";

export default function DownloadSection() {
  return (
    <div className="bg-darkblack">
      <div className="flex flex-col items-center justify-between  px-4 py-16 lg:flex-row lg:px-8 max-w-6xl mx-auto">
        {/* Left Section - Phone Image */}
        <div className="relative mb-12 w-full flex-col gap-12 flex items-center justify-between lg:mb-0 lg:w-1/2">
          <div>{phone}</div>
          <div className="flex gap-4 font-semibold text-white border-b border-slate-800 ">
            <div className="flex items-center flex-col gap-2">
              Desktop <div className="h-[2px] w-full bg-transparent" />
            </div>
            <div className="flex items-center justify-between flex-col gap-2">
              Lite
              <div className="h-[2px] w-full bg-yellow-400" />
            </div>{" "}
            <div className="flex items-center flex-col gap-2">
              Pro <div className="h-[2px] w-full bg-transparent" />
            </div>
          </div>
        </div>
        {/* Right Section - Download Options */}

        <div className="mx-auto w-full lg:w-1/2 flex justify-between flex-col items-start h-[550px]">
          <h2 className="text-4xl font-semibold text-white lg:text-5xl">
            Trade on the go. Anywhere, anytime.
          </h2>

          {/* QR Code Section */}
          <div className="flex  items-center gap-8">
            <div className="rounded-2xl border border-slate-600  p-4">
              <div className="h-48 w-48 relative flex items-center justify-center rounded-[14px] bg-white">
                <svg
                  shapeRendering="crispEdges"
                  height="152"
                  width="152"
                  viewBox="0 0 49 49"
                >
                  <path fill="#FFFFFF" d="M0,0 h49v49H0z"></path>
                  <path
                    fill="#000000"
                    d="M0 0h7v1H0zM8 0h1v1H8zM13 0h1v1H13zM15 0h1v1H15zM19 0h1v1H19zM23 0h1v1H23zM25 0h5v1H25zM32 0h1v1H32zM34 0h1v1H34zM40 0h1v1H40zM42,0 h7v1H42zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM11 1h1v1H11zM14 1h1v1H14zM18 1h2v1H18zM22 1h1v1H22zM24 1h1v1H24zM26 1h4v1H26zM31 1h1v1H31zM36 1h5v1H36zM42 1h1v1H42zM48,1 h1v1H48zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h1v1H9zM13 2h1v1H13zM16 2h1v1H16zM18 2h1v1H18zM20 2h2v1H20zM26 2h1v1H26zM29 2h2v1H29zM33 2h1v1H33zM36 2h2v1H36zM39 2h2v1H39zM42 2h1v1H42zM44 2h3v1H44zM48,2 h1v1H48zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM12 3h1v1H12zM14 3h1v1H14zM22 3h2v1H22zM25 3h2v1H25zM31 3h1v1H31zM33 3h5v1H33zM39 3h1v1H39zM42 3h1v1H42zM44 3h3v1H44zM48,3 h1v1H48zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h3v1H9zM14 4h3v1H14zM18 4h2v1H18zM22 4h5v1H22zM29 4h1v1H29zM31 4h3v1H31zM36 4h2v1H36zM42 4h1v1H42zM44 4h3v1H44zM48,4 h1v1H48zM0 5h1v1H0zM6 5h1v1H6zM12 5h2v1H12zM16 5h7v1H16zM26 5h2v1H26zM30 5h1v1H30zM35 5h4v1H35zM42 5h1v1H42zM48,5 h1v1H48zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30 6h1v1H30zM32 6h1v1H32zM34 6h1v1H34zM36 6h1v1H36zM38 6h1v1H38zM40 6h1v1H40zM42,6 h7v1H42zM8 7h3v1H8zM15 7h3v1H15zM19 7h1v1H19zM21 7h2v1H21zM26 7h1v1H26zM28 7h3v1H28zM33 7h1v1H33zM35 7h3v1H35zM40 7h1v1H40zM0 8h1v1H0zM2 8h2v1H2zM5 8h3v1H5zM9 8h1v1H9zM13 8h1v1H13zM15 8h2v1H15zM20 8h9v1H20zM33 8h3v1H33zM38 8h1v1H38zM40 8h1v1H40zM42 8h1v1H42zM45 8h1v1H45zM47,8 h2v1H47zM1 9h5v1H1zM7 9h6v1H7zM17 9h1v1H17zM19 9h1v1H19zM21 9h1v1H21zM25 9h1v1H25zM29 9h5v1H29zM35 9h1v1H35zM37 9h1v1H37zM40 9h3v1H40zM46 9h2v1H46zM3 10h2v1H3zM6 10h3v1H6zM11 10h1v1H11zM15 10h1v1H15zM17 10h5v1H17zM24 10h2v1H24zM29 10h3v1H29zM33 10h3v1H33zM37 10h1v1H37zM40 10h3v1H40zM44 10h3v1H44zM0 11h2v1H0zM4 11h1v1H4zM8 11h2v1H8zM12 11h1v1H12zM16 11h1v1H16zM22 11h1v1H22zM24 11h1v1H24zM29 11h5v1H29zM36 11h2v1H36zM39 11h1v1H39zM42 11h6v1H42zM1 12h7v1H1zM11 12h2v1H11zM17 12h1v1H17zM19 12h1v1H19zM21 12h6v1H21zM29 12h1v1H29zM31 12h1v1H31zM36 12h1v1H36zM40 12h1v1H40zM43 12h1v1H43zM46 12h1v1H46zM10 13h1v1H10zM12 13h1v1H12zM17 13h1v1H17zM20 13h1v1H20zM24 13h3v1H24zM31 13h3v1H31zM37 13h3v1H37zM41 13h1v1H41zM44 13h1v1H44zM46 13h1v1H46zM48,13 h1v1H48zM3 14h1v1H3zM5 14h6v1H5zM13 14h3v1H13zM21 14h8v1H21zM30 14h1v1H30zM35 14h1v1H35zM37 14h2v1H37zM42 14h1v1H42zM46 14h2v1H46zM2 15h2v1H2zM7 15h1v1H7zM11 15h1v1H11zM13 15h1v1H13zM15 15h1v1H15zM17 15h2v1H17zM21 15h1v1H21zM25 15h2v1H25zM30 15h2v1H30zM33 15h1v1H33zM35 15h2v1H35zM41 15h1v1H41zM43 15h2v1H43zM48,15 h1v1H48zM0 16h2v1H0zM6 16h4v1H6zM13 16h2v1H13zM16 16h3v1H16zM21 16h1v1H21zM25 16h1v1H25zM32 16h2v1H32zM35 16h1v1H35zM37 16h3v1H37zM42 16h1v1H42zM44 16h1v1H44zM46,16 h3v1H46zM2 17h2v1H2zM7 17h2v1H7zM10 17h2v1H10zM16 17h2v1H16zM22 17h1v1H22zM27 17h2v1H27zM34 17h2v1H34zM37 17h1v1H37zM39 17h3v1H39zM43 17h1v1H43zM45 17h2v1H45zM48,17 h1v1H48zM0 18h2v1H0zM3 18h8v1H3zM14 18h2v1H14zM18 18h1v1H18zM20 18h1v1H20zM23 18h2v1H23zM26 18h2v1H26zM29 18h2v1H29zM36 18h2v1H36zM41 18h1v1H41zM43 18h1v1H43zM45 18h1v1H45zM47,18 h2v1H47zM0 19h2v1H0zM5 19h1v1H5zM9 19h1v1H9zM12 19h1v1H12zM14 19h2v1H14zM17 19h1v1H17zM19 19h1v1H19zM21 19h1v1H21zM23 19h2v1H23zM26 19h1v1H26zM28 19h1v1H28zM30 19h1v1H30zM35 19h3v1H35zM39 19h5v1H39zM45 19h1v1H45zM48,19 h1v1H48zM0 20h2v1H0zM6 20h2v1H6zM10 20h1v1H10zM14 20h2v1H14zM17 20h1v1H17zM19 20h2v1H19zM23 20h1v1H23zM27 20h3v1H27zM33 20h1v1H33zM35 20h1v1H35zM37 20h2v1H37zM41 20h1v1H41zM43 20h1v1H43zM45 20h1v1H45zM47,20 h2v1H47zM7 21h1v1H7zM9 21h3v1H9zM15 21h5v1H15zM24 21h1v1H24zM27 21h6v1H27zM36 21h2v1H36zM41 21h5v1H41zM47,21 h2v1H47zM0 22h1v1H0zM3 22h6v1H3zM13 22h1v1H13zM15 22h1v1H15zM17 22h3v1H17zM21 22h9v1H21zM31 22h2v1H31zM34 22h3v1H34zM40 22h5v1H40zM46 22h1v1H46zM0 23h1v1H0zM3 23h2v1H3zM8 23h2v1H8zM13 23h1v1H13zM15 23h1v1H15zM17 23h1v1H17zM20 23h3v1H20zM26 23h1v1H26zM29 23h2v1H29zM33 23h1v1H33zM36 23h2v1H36zM39 23h2v1H39zM44 23h3v1H44zM0 24h5v1H0zM6 24h1v1H6zM8 24h1v1H8zM10 24h2v1H10zM13 24h1v1H13zM18 24h1v1H18zM20 24h3v1H20zM24 24h1v1H24zM26 24h1v1H26zM29 24h1v1H29zM31 24h1v1H31zM35 24h6v1H35zM42 24h1v1H42zM44,24 h5v1H44zM0 25h2v1H0zM4 25h1v1H4zM8 25h1v1H8zM12 25h3v1H12zM16 25h2v1H16zM19 25h4v1H19zM26 25h1v1H26zM31 25h1v1H31zM33 25h1v1H33zM35 25h4v1H35zM40 25h1v1H40zM44 25h1v1H44zM47,25 h2v1H47zM0 26h2v1H0zM4 26h6v1H4zM11 26h1v1H11zM13 26h2v1H13zM16 26h1v1H16zM19 26h8v1H19zM28 26h1v1H28zM30 26h1v1H30zM37 26h2v1H37zM40 26h6v1H40zM47 26h1v1H47zM4 27h2v1H4zM10 27h2v1H10zM16 27h2v1H16zM21 27h1v1H21zM23 27h1v1H23zM25 27h1v1H25zM27 27h4v1H27zM32 27h1v1H32zM38 27h2v1H38zM48,27 h1v1H48zM1 28h7v1H1zM14 28h1v1H14zM16 28h2v1H16zM20 28h3v1H20zM25 28h3v1H25zM29 28h1v1H29zM31 28h3v1H31zM37 28h2v1H37zM40 28h2v1H40zM43 28h1v1H43zM46 28h1v1H46zM0 29h2v1H0zM4 29h2v1H4zM7 29h1v1H7zM10 29h4v1H10zM16 29h1v1H16zM18 29h1v1H18zM20 29h1v1H20zM22 29h1v1H22zM26 29h2v1H26zM29 29h1v1H29zM32 29h5v1H32zM41 29h1v1H41zM45 29h1v1H45zM48,29 h1v1H48zM5 30h3v1H5zM9 30h1v1H9zM11 30h1v1H11zM13 30h2v1H13zM17 30h1v1H17zM20 30h1v1H20zM22 30h4v1H22zM28 30h1v1H28zM31 30h2v1H31zM34 30h1v1H34zM36 30h1v1H36zM38 30h2v1H38zM41 30h3v1H41zM46,30 h3v1H46zM0 31h1v1H0zM5 31h1v1H5zM7 31h1v1H7zM9 31h1v1H9zM11 31h1v1H11zM13 31h1v1H13zM15 31h1v1H15zM17 31h3v1H17zM21 31h1v1H21zM23 31h1v1H23zM30 31h1v1H30zM32 31h4v1H32zM37 31h1v1H37zM39 31h1v1H39zM41 31h5v1H41zM48,31 h1v1H48zM1 32h1v1H1zM3 32h1v1H3zM5 32h2v1H5zM12 32h1v1H12zM14 32h1v1H14zM16 32h2v1H16zM19 32h3v1H19zM23 32h1v1H23zM27 32h1v1H27zM30 32h1v1H30zM32 32h1v1H32zM35 32h4v1H35zM40 32h3v1H40zM44 32h1v1H44zM48,32 h1v1H48zM1 33h1v1H1zM3 33h2v1H3zM7 33h1v1H7zM9 33h1v1H9zM14 33h6v1H14zM23 33h3v1H23zM27 33h3v1H27zM32 33h1v1H32zM34 33h1v1H34zM37 33h2v1H37zM40 33h2v1H40zM43 33h1v1H43zM47,33 h2v1H47zM0 34h1v1H0zM2 34h2v1H2zM5 34h2v1H5zM8 34h2v1H8zM11 34h1v1H11zM16 34h1v1H16zM19 34h2v1H19zM22 34h2v1H22zM25 34h5v1H25zM31 34h1v1H31zM36 34h1v1H36zM38 34h2v1H38zM41 34h1v1H41zM43 34h1v1H43zM3 35h1v1H3zM9 35h6v1H9zM16 35h1v1H16zM20 35h1v1H20zM22 35h2v1H22zM30 35h4v1H30zM36 35h2v1H36zM39 35h1v1H39zM42 35h2v1H42zM45,35 h4v1H45zM2 36h1v1H2zM4 36h4v1H4zM12 36h1v1H12zM14 36h1v1H14zM20 36h3v1H20zM29 36h3v1H29zM34 36h4v1H34zM39 36h1v1H39zM41 36h4v1H41zM46,36 h3v1H46zM2 37h1v1H2zM8 37h1v1H8zM10 37h2v1H10zM15 37h3v1H15zM19 37h2v1H19zM25 37h4v1H25zM31 37h3v1H31zM37 37h2v1H37zM40 37h1v1H40zM43 37h3v1H43zM47,37 h2v1H47zM1 38h1v1H1zM5 38h2v1H5zM8 38h1v1H8zM11 38h1v1H11zM13 38h1v1H13zM17 38h3v1H17zM21 38h4v1H21zM27 38h2v1H27zM31 38h1v1H31zM35 38h4v1H35zM40 38h2v1H40zM44 38h4v1H44zM1 39h3v1H1zM7 39h2v1H7zM11 39h2v1H11zM16 39h1v1H16zM18 39h3v1H18zM23 39h1v1H23zM26 39h1v1H26zM28 39h2v1H28zM31 39h2v1H31zM34 39h2v1H34zM37 39h2v1H37zM40 39h2v1H40zM47,39 h2v1H47zM0 40h3v1H0zM6 40h4v1H6zM13 40h1v1H13zM16 40h4v1H16zM21 40h7v1H21zM31 40h2v1H31zM34 40h1v1H34zM37 40h1v1H37zM40 40h5v1H40zM46 40h2v1H46zM8 41h2v1H8zM12 41h4v1H12zM17 41h2v1H17zM21 41h2v1H21zM26 41h4v1H26zM33 41h3v1H33zM39 41h2v1H39zM44 41h3v1H44zM48,41 h1v1H48zM0 42h7v1H0zM8 42h2v1H8zM12 42h2v1H12zM15 42h1v1H15zM17 42h3v1H17zM21 42h2v1H21zM24 42h1v1H24zM26 42h1v1H26zM31 42h1v1H31zM33 42h6v1H33zM40 42h1v1H40zM42 42h1v1H42zM44 42h1v1H44zM47,42 h2v1H47zM0 43h1v1H0zM6 43h1v1H6zM8 43h1v1H8zM11 43h1v1H11zM14 43h4v1H14zM19 43h1v1H19zM22 43h1v1H22zM26 43h1v1H26zM28 43h1v1H28zM30 43h1v1H30zM35 43h6v1H35zM44 43h2v1H44zM0 44h1v1H0zM2 44h3v1H2zM6 44h1v1H6zM12 44h3v1H12zM16 44h2v1H16zM21 44h6v1H21zM28 44h4v1H28zM34 44h2v1H34zM37 44h1v1H37zM39 44h6v1H39zM47 44h1v1H47zM0 45h1v1H0zM2 45h3v1H2zM6 45h1v1H6zM8 45h1v1H8zM10 45h1v1H10zM12 45h1v1H12zM14 45h1v1H14zM16 45h1v1H16zM21 45h2v1H21zM25 45h7v1H25zM39 45h3v1H39zM43 45h2v1H43zM46 45h2v1H46zM0 46h1v1H0zM2 46h3v1H2zM6 46h1v1H6zM8 46h2v1H8zM12 46h2v1H12zM16 46h5v1H16zM27 46h2v1H27zM30 46h2v1H30zM34 46h1v1H34zM36 46h2v1H36zM39 46h1v1H39zM42 46h4v1H42zM0 47h1v1H0zM6 47h1v1H6zM11 47h1v1H11zM13 47h1v1H13zM19 47h1v1H19zM21 47h1v1H21zM24 47h1v1H24zM26 47h3v1H26zM34 47h2v1H34zM37 47h1v1H37zM39 47h1v1H39zM41 47h1v1H41zM43 47h1v1H43zM45 47h2v1H45zM0 48h7v1H0zM8 48h1v1H8zM10 48h1v1H10zM12 48h4v1H12zM18 48h4v1H18zM23 48h1v1H23zM27 48h1v1H27zM29 48h2v1H29zM36 48h2v1H36zM45,48 h4v1H45z"
                  ></path>
                </svg>
                <div className="inset-0 absolute flex items-center justify-center  z-10">
                  <div className="bg-black border-[2px] border-white p-1">
                    <img src="/logo.png" alt="" width="18px" height="18px" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-400">Scan to Download App</p>
              <p className="text-xl font-semibold text-white">
                iOS and Android
              </p>
            </div>
          </div>

          {/* Platform Downloads */}
          <div className="grid grid-cols-3 gap-4">
            <Button className="w-20 h-20 flex flex-col hover:bg-white/10 border-gray-700 bg-darkblack">
              <img
                src="https://www.apple.com/favicon.ico"
                alt="Apple"
                className="h-6 w-6"
              />
              <span className="text-sm font-semibold  ">MacOs</span>
            </Button>

            <Button className="w-20 h-20 flex flex-col hover:bg-white/10 border-gray-700 bg-darkblack">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOg69OtiuP5yF1YtvXWgVGelPLfh_aQhnLw&s"
                alt="Apple"
                className="h-6 w-6"
              />
              <span className="text-sm font-semibold  ">Windows</span>
            </Button>
            <Button className="w-20 h-20 flex flex-col hover:bg-white/10 border-gray-700 bg-darkblack">
              <img
                src="https://static-00.iconduck.com/assets.00/linux-icon-144x144-beuun9vs.png"
                alt="Apple"
                className="h-6 w-6"
              />
              <span className="text-sm font-semibold  ">Linux</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
