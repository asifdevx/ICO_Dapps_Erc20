import React, { useCallback, useState, useEffect, useMemo } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/utils/cn';


import { HeaderLists } from '@/config/HeaderLists';
import { IoMdClose } from 'react-icons/io';
import { TiThMenu } from 'react-icons/ti';
import MobileSideBar from '../commonComponents/MobileSideBar';
import ConnectBtn from '../commonComponents/ConnectBtn';
import ToggleTheme from '../commonComponents/ToggleTheme';

const Header = () => {
 
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  useEffect(() => {
    const header = document.querySelector('.mainHeader');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call once in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    
      <header className={` mainHeader w-full z-40  duration-300 p-1 `}>
        <div className="section_padding flex items-center justify-between pt-2">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center ">
            <Image
              src={'/logo.png'}
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer object-cover"
            />
            <h4 className="bg-spct-logo-gradient font-extrabold text-20 bg-clip-text text-transparent max-md:hidden">
              SPECTUM
            </h4>
          </Link>

          {/* Navigation links */}
          <nav className="flex items-center gap-5 max-md:hidden">
            {HeaderLists.map((item, idx) => (
              <button
                key={idx}
                className={
                  'text-lg font-bold font-ponomar flex items-center gap-1 transition-colors text-black/80 hover:text-purple-700 dark:text-gray-200 dark:hover:text-purple-300'
                }
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Connect + mobile menu */}
          <div className="flex gap-2  items-center justify-center">
            <ToggleTheme />
            <div className="lg:flex items-center justify-center gap-3 hidden">
              {/* <ToggleTheme /> */}

              <ConnectBtn />
            </div>
            <button onClick={toggleMenu} className="lg:hidden text-black dark:text-white">
              {isMenuOpen ? <IoMdClose size={24} /> : <TiThMenu size={24} />}
            </button>
          </div>
        </div>
      </header>
      {/* Mobile sidebar */}
      {isMenuOpen && (
        <MobileSideBar
          open={isMenuOpen}
          setOpen={setMenuOpen}
          items={HeaderLists}
          position="right"
          title="Menu"
          icon={false}
        />
      )}
    </>
  );
};

export default Header;
