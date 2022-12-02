'use client'

import React from 'react';

const Button: React.FC<{
  onClick?: React.ReactEventHandler<HTMLButtonElement>,
  children: React.ReactNode
}> = ({ onClick, children }) => (
  <button
      className='text-center rounded-xl bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400 cursor-pointer'
      onClick={onClick}
  >
    {children}
  </button>
);

export { Button };
