import React, { ReactNode } from "react";
import { IconType } from "react-icons";

// ====================================================
//                  GLOBAL DECLARATIONS
// ====================================================

declare global {
  interface Window {
    ethereum?: any;
  }
}


declare type customBtnProps = {
  title: React.ReactNode;
  othercss: string;
  handleClick?: () => void;
  loading?: boolean;
  disable?: boolean;
  isLink?: boolean;
  linkUrl?: string;
  icon?: ReactNode;
  iconClass?:string
};

interface InputProps {
  placeholder: string;
  name?: string;
  type: string;
  inputClass?: string;
  iconClass?: string;
  value?: string | number;
  position?: "left" | "right";
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode | string;
  onFocus?:()=>void
  onBlur?:()=>void
}

// Cusom Fun
interface MobileSideBarProps {
  open:boolean,
  setOpen:(open:boolean)=>void,
  items:HeaderLists[],
  icon?:ReactNode,
  position:"left"| "right",
  title:string,
  footer?:boolean,
}



// #type : config  

interface HeaderLists {
  label: string,
  route: string,
  islink: boolean, 
}