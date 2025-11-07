import React from 'react';
import { cn } from '@/utils/cn'

const BoxTypeText = ({className,title,paraClass}:{className?:string,title:React.ReactNode,paraClass?:string}) => {
  return (
    <div className={cn("premium_Btn",className)}>
        <p className={cn("font_gradient text-xs md:text:sm font-semibold tracking-wide",paraClass)}>
         {title}
        </p>
      </div>
  )
}

export default BoxTypeText