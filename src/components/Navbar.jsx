import React, { useState } from "react";
import { SquareTerminal } from 'lucide-react';
import { translations } from '../translations.jsx';

// Icons{
import { Languages } from 'lucide-react';
import { Menu } from 'lucide-react';
// }


export default function Navbar() {
  const [lang, setLang] = useState("uz");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className='bg-[#0F172A] border border-[#1E293B] py-[20px]'>
        <div className='container flex justify-between items-center'>
          <div className='text-[#FFFFFF] flex items-center gap-[8px]'>
            <SquareTerminal className='text-[#0D59F2]' />
            <h2 className='text-[20px] font-black'>SANO</h2>
          </div>

          <ul className='md:flex gap-[32px] hidden'>
            <li>
              <a href="#!" className='text-[#FFFFFF] text-[14px] font-semibold'>{translations[lang].projects}</a>
            </li>
            <li>
              <a href="#!" className='text-[#FFFFFF] text-[14px] font-semibold'>{translations[lang].services}</a>
            </li>
            <li>
              <a href="#!" className='text-[#FFFFFF] text-[14px] font-semibold'>{translations[lang].contact}</a>
            </li>
          </ul>

          <div className='text-[#FFFFFF] bg-[#1E293B80] flex gap-[8px] py-[8px] px-[12px] rounded-[12px] '>
            <div className="flex gap-[4px]">
              <Languages />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className='appearance-none bg-[#1E293B80] border-none'
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu />
            </button>
            {/* {menuOpen && (
              <div className="md:hidden ">
                <a href="#home">{translations[lang].projects}</a>
                <a href="#about">{translations[lang].services}</a>
                <a href="#contact">{translations[lang].contact}</a>
              </div>
            )} */}
            {menuOpen && (
  <div className="md:hidden absolute top-[70px] right-[-112px] w-[50%] px-4">
    <div className="bg-[#0F172A] rounded-xl shadow-lg p-4 flex flex-col gap-3 w-[50%]">
      
      <a href="#!" className="hover:text-blue-500 transition">
        {translations[lang].projects}
      </a>

      <a href="#!" className="hover:text-blue-500 transition">
        {translations[lang].services}
      </a>

      <a href="#!" className="hover:text-blue-500 transition">
        {translations[lang].contact}
      </a>

    </div>
  </div>
)}
          </div>
        </div>
      </nav>
    </div>
  )
}