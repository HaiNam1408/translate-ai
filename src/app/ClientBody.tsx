'use client';

interface ClientBodyProps {
  children: React.ReactNode;
  inter: string;
}

export default function ClientBody({ children, inter }: ClientBodyProps) {
  return (
    <body className={`${inter} antialiased bg-background`}>
      {children}
    </body>
  );
}
