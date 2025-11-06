import React, { useCallback } from 'react'
import { useTheme } from 'next-themes';

import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = useCallback(() => setTheme(theme === 'dark' ? 'light' : 'dark'), [theme]);

  return (
    <div className='bg-spct-logo-gradient dark:text-white text-black p-3 transition-all duration-300 rounded-full hover:scale-105' onClick={changeTheme}>
      {theme==="dark" ? <FiSun/> :<IoMdMoon/>}
    </div>
  )
}

export default React.memo(ToggleTheme);