"use client";

import type React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
      {floatingShapes.map((shape, index) => (
        <div
          key={`floating-shape-${index}-${shape.delay}`}
          className={shape.className}
          style={{
            animationDelay: `${shape.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <MotionDiv className="mb-6">
            <div className="inline-block bg-white dark:bg-gray-800 px-4 py-1 rounded-full text-sm font-medium border mb-4">
              <span className="text-primary">AUTOPOST AI</span>
            </div>
          </MotionDiv>

          <MotionDiv className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Generate Endless Possibilities
              <span className="block gradient-text">with One Click</span>
            </h1>
          </MotionDiv>

          <MotionDiv>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Through seamlessly integrated AI capabilities, we empower businesses to significantly enhance design efficiency,
              creativity, and market competitiveness.
            </p>
          </MotionDiv>

          <MotionDiv className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 pulsing">
              <Link href="/auth/signup">Start Creating Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link href="#features">Explore Features</Link>
            </Button>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
