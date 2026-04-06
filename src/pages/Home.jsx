import React, { useState } from "react";
import { translations } from '../translations.jsx';

// Icons{

// }
// Images{
import respme from '../assets/img1.jpg'
import standme from '../assets/img2.jpg'
// }


export default function Navbar() {
    const [lang] = useState("uz");
    return (
        <div>

            <header className="bg-[#0F172A] py-[50px]">
                <div className="container md:flex md:justify-between md:gap-[48px]">
                    <div className="relative px-[10px]">
                        <img className="rounded-[16px] mb-[48px] md:hidden" src={respme} alt="" />
                        <div className="bg-[#1E293B] md:hidden border border-[#334155] py-[16px] px-[16px] rounded-[16px] w-[134px] absolute bottom-[-16px] right-[-6px]">
                            <h2 className="text-[#0D59F2] text-[24px] font-black">2+</h2>
                            <p className="text-[#64748B] text-[10px] font-bold">{translations[lang].exp}</p>
                        </div>
                    </div>



                    <div className="text-center flex flex-col items-center md:flex md:flex-col md:items-start md:text-start">
                        <div>
                            <div className="w-[186px] h-[26px] flex items-center justify-center gap-[8px] rounded-full border border-[#0D59F233] text-[#0D59F2] text-sm tracking-wide animate-glow"><span className="w-[8px] h-[8px] bg-[#0D59F2] rounded-full"></span> {translations[lang].lamp}</div>
                            <style>{`@keyframes glow { 0%, 100% { box-shadow: 0 0 4px #3b82f6, 0 0 8px #3b82f6; opacity: 0.7;} 50% {box-shadow: 0 0 12px #3b82f6, 0 0 20px #3b82f6; opacity: 1; } } .animate-glow { animation: glow 1.5s ease-in-out infinite; }`}
                            </style>
                        </div>
                        <h1 className="mt-[16px] text-[#ffffff] text-[36px] font-black mb-[16px]">{translations[lang].name}</h1>
                        <h2 className="mb-[16px] text-[20px] font-medium text-[#94A3B8]">{translations[lang].names}</h2>
                        <p className="text-[#94A3B8] text-[16px] font-normal w-[331px]">{translations[lang].about}</p>

                        <div className="md:flex md:items-center md:gap-[16px] mt-[24px] md:mt-[32px] md:space-y-0 space-y-[16px] w-[342px]">
                            <button className="bg-[#0D59F2] text-[#ffffff] h-[58px] w-full rounded-[12px] py-[16px] shadow-[0px_4px_6px_-4px_#0D59F240,0px_10px_15px_-3px_#0D59F240]">{translations[lang].btn}</button>
                            <button className="bg-[#1E293B] text-[#FFFFFF] h-[58px] w-full rounded-[12px] py-[16px] border border-[#334155]">{translations[lang].btng}</button>
                        </div>
                    </div>



                    <div className="relative px-[10px] hidden md:block">
                        <img className="rounded-[16px] mb-[48px]" src={standme} alt="" />
                        <div className="bg-[#1E293B] border border-[#334155] py-[16px] px-[16px] rounded-[16px] w-[134px] absolute bottom-[24px] right-[-24px]">
                            <h2 className="text-[#0D59F2] text-[24px] font-black">2+</h2>
                            <p className="text-[#64748B] text-[10px] font-bold">{translations[lang].exp}</p>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}