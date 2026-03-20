import React, { useState } from "react";
import { SquareTerminal } from 'lucide-react';
import { translations } from '../translations.jsx';

// Icons{
import { Languages } from 'lucide-react';
import { Menu } from 'lucide-react';
// }


export default function Navbar() {
  const [lang, setLang] = useState("uz");
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
            <Menu className="md:hidden"/>
          </div>
        </div>
      </nav>
    </div>
  )
}