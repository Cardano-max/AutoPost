import React from 'react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative w-8 h-8 border-2 border-black">
        <div className="absolute inset-0 bg-white flex items-center justify-center">
          <span className="font-bold text-xs">A</span>
          <span className="font-bold text-xs">P</span>
        </div>
      </div>
      <span className="font-bold text-lg tracking-tight uppercase">AUTOPOST</span>
    </Link>
  );
}
