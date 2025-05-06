"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, SquarePen, Info } from 'lucide-react';

export default function BackgroundGeneratorPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/tools" className="hover:text-foreground">
            Tools
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Background Generator</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
            <SquarePen className="h-6 w-6 text-teal-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Background Generator</h1>
            <p className="text-muted-foreground">
              Smart background removal and replacement
            </p>
          </div>
        </div>

        <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg flex items-start gap-2 mb-8">
          <Info className="h-5 w-5 text-teal-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-teal-800 font-medium">
              Tool Coming Soon
            </p>
            <p className="text-sm text-teal-700">
              Our Background Generator tool is currently under development. Check back soon for updates!
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Background Generator Features</CardTitle>
            <CardDescription>Remove and replace backgrounds with AI precision</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The Background Generator tool will allow you to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Remove backgrounds from product images with one click</li>
              <li>Create transparent backgrounds for versatile use</li>
              <li>Generate beautiful AI backgrounds for any product</li>
              <li>Choose from solid colors, gradients, or scene backgrounds</li>
              <li>Apply shadows and reflections for realistic results</li>
              <li>Batch process multiple images at once</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/auth/signup">Sign Up for Early Access</Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Professional Product Images</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Transform your product photos with clean, professional backgrounds.
            Make your products stand out with AI-generated backgrounds that enhance your brand.
          </p>
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/auth/signup">Sign Up Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
