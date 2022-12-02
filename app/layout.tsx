import './globals.css';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='bg-slate-900 text-slate-300'>
      <head>
        <title>Rock Paper Scissors</title>
        <meta name="description" content="User-vs-AI rock paper scissors game" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
