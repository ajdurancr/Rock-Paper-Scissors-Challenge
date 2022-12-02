import React from "react";

const Page: React.FC<{
  title?: string,
  children: React.ReactNode
}> = ({ title, children }) => (
  <main className='flex flex-col justify-center justify-items-center w-screen h-screen'>
    <div className='h-full flex flex-col items-center'>
      {title && <h1
        className='inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent pt-4 pb-4'
      >{title}</h1>}
      {children}
    </div>
  </main>
);

export { Page };
