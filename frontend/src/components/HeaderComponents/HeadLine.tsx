import { cn } from '@/utils/cn';
import React, { useCallback } from 'react';
import { IoMdClose } from 'react-icons/io';
type HeadLineProps = {
  Open: boolean;
  setOpen: (headlineOpen: boolean) => void;
};

const HeadLine = ({ Open, setOpen }: HeadLineProps) => {
  const handleHeadline = useCallback(() => setOpen(false), [Open]);
  return (
    <div className="relative w-screen group">
      <div
        className={cn(
          'w-screen h-14 bg-spct-banner-gradient flex items-center opacity-100 overflow-hidden',
          !Open && 'hidden opacity-0',
        )}
      >
        <p className="w-full animate-marquee text-white text-sm  pointer-events-none whitespace-nowrap">
          
          🚀 The Grand Unveiling of Spectrum ($SPCT) Pre-Sale Stage 2: Your Exclusive Portal to
          Decentralized Future Finance! 🌐✨
        </p>
      </div>
      <div
        className={cn(
          ' absolute right-7 transition-all duration-300',
          'opacity-0 group-hover:opacity-100',
          '-top-3  group-hover:top-5',
        )}
      >
        <IoMdClose size={24} onClick={handleHeadline} />
      </div>
    </div>
  );
};

export default React.memo(HeadLine);
