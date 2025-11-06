import React, { useCallback, useState, useEffect, useMemo } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import HeadLine from './HeadLine';
import Button from '../ui/Button';

import { useMediaQuery } from 'usehooks-ts';
import { HeaderLists } from '@/config/HeaderLists';
import { IoMdClose } from 'react-icons/io';
import { TiThMenu } from "react-icons/ti";
import MobileSideBar from '../commonComponents/MobileSideBar';
import ConnectBtn from '../commonComponents/ConnectBtn';
import ToggleTheme from '../commonComponents/ToggleTheme';

const Header = () => {


  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  //state
  const [headlineOpen, setheadlineOpen] = useState(true);
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
      {headlineOpen && <HeadLine Open={headlineOpen} setOpen={setheadlineOpen} />}
      <header className={` mainHeader w-full z-40  duration-300 `}>
        <div className="section_padding flex items-center justify-between pt-2">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center ">
            <Image
              src={'/logo.png'}
              alt="logo"
              width={70}
              height={70}
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
                    'text-lg font-bold font-ponomar flex items-center gap-1 transition-colors dark:text-gray-300 text-gray-800 dark:hover:text-white hover:text-black'
                  }
                >
                  {item.label}
                </button>
              ))}
            </nav>
      

          {/* Connect + mobile menu */}
          <div className="flex gap-2  items-center justify-center">
            <ToggleTheme/>
            <ConnectBtn />
            <button onClick={toggleMenu} className="md:hidden text-black dark:text-white">
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
