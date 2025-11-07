import { HeaderLists } from '@/config/HeaderLists';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightFromBracket, FaXmark } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import type { MobileSideBarProps } from '@/types';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ConnectBtn from './ConnectBtn';

const MobileSideBar: React.FC<MobileSideBarProps> = ({
  open,
  setOpen,
  items,
  icon,
  position,
  title,
  footer,
}) => {
 

  function toggleBtn() {
    return setOpen(!open);
  }

  return (
    <>
      {/* Overlay */}
      {open && (
        <motion.div
          className="fixed inset-0 bg-black z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={toggleBtn}
        />
      )}

      {/* Sidebar */}
      <motion.div
        className={`fixed top-0 ${position}-0 w-[260px] h-full z-50 shadow-xl 
        bg-spct-banner-gradient
        flex flex-col justify-between`}
        initial={{ x: position === 'right' ? '100%' : '-100%' }}
        animate={{ x: open ? 0 : position === 'right' ? '100%' : '-100%' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
          <Link href="/" className="flex items-center justify-center ">
            <Image
              src={'/logo.png'}
              alt="logo"
              width={30}
              height={30}
              className="cursor-pointer object-cover"
            />
            <h4 className="bg-spct-logo-gradient font-extrabold text-20 bg-clip-text text-transparent max-md:hidden">
              SPECTUM
            </h4>
          </Link>
          <button onClick={toggleBtn} className="text-gray-400 hover:text-white transition-colors">
            <FaXmark size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 px-6 py-6">
          {items.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  href={item.route}
                  onClick={toggleBtn}
                  className={`block text-lg font-medium rounded-md px-3 py-2 transition-all text-gray-300 hover:text-white hover:bg-gray-800/40`}
                >
                  <p>{item.label}</p>
                </Link>
              </motion.div>
            );
          })}
          <ConnectBtn />
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-700 text-sm text-gray-400">
          {footer || <p>© {new Date().getFullYear()} NFT Marketplace</p>}
        </div>
      </motion.div>
    </>
  );
};

export default MobileSideBar;
