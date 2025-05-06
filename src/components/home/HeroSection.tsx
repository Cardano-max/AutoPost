"use client";

import type React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FestivalToolPreview } from '@/components/home/FestivalToolPreview';

// Framer motion isn't installed by default, let's create custom animations
const MotionDiv = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ${className} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      {...props}
    >
      {children}
    </div>
  );
};

const floatingShapes = [
  { className: "shape-triangle bg-[#d3db24] w-24 h-24 absolute -top-6 left-[20%] floating opacity-80", delay: 0 },
  { className: "shape-circle bg-[#b24e49] w-16 h-16 absolute top-[30%] right-[5%] floating opacity-80", delay: 1 },
  { className: "shape-circle bg-[#33b996] w-32 h-32 absolute bottom-[20%] right-[15%] floating opacity-70", delay: 2 },
  { className: "shape-triangle bg-[#8a63d2] w-20 h-20 absolute bottom-[10%] left-[10%] floating opacity-60", delay: 1.5 },
];

export function HeroSection() {
  return (
    <section className="hero-gradient py-20 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 px-4 py-1 rounded-full">
              <span className="text-sm font-medium text-primary">AUTOPOST AI</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Generate Endless
              <span className="block gradient-text">Possibilities</span>
              <span className="block">with One Click</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Through seamlessly integrated AI capabilities, we empower businesses to significantly enhance design efficiency,
              creativity, and market competitiveness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/auth/signup">Start Creating Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/tools/festival-post">Try Festival Post</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-3xl transform rotate-6" />
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <FestivalToolPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
