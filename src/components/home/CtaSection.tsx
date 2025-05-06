import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg-purple-teal opacity-10" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-orange-400/10 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Creating Now
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of businesses using AUTOPOST to create stunning marketing content in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
              <Link href="/auth/signup">Get Started for Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link href="/pricing" className="flex items-center">
                View Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
