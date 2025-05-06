"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Layers, Info } from 'lucide-react';

export default function DetailsGeneratorPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/tools" className="hover:text-foreground">
            Tools
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Details Generator</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
            <Layers className="h-6 w-6 text-red-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Details Generator</h1>
            <p className="text-muted-foreground">
              Product specification visualizer with infographics
            </p>
          </div>
        </div>

        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 mb-8">
          <Info className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-red-800 font-medium">
              Tool Coming Soon
            </p>
            <p className="text-sm text-red-700">
              Our Details Generator tool is currently under development. Check back soon for updates!
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Details Generator Features</CardTitle>
            <CardDescription>Create stunning product specification visuals</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The Details Generator tool will allow you to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Convert plain text specifications into visual infographics</li>
              <li>Create professional product detail images for e-commerce</li>
              <li>Choose from multiple specification layouts and styles</li>
              <li>Add icons, charts, and comparison tables</li>
              <li>Match your brand colors and typography</li>
              <li>Export ready-to-use images for websites and marketplaces</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/auth/signup">Sign Up for Early Access</Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Enhance Your Product Listings</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Transform boring product specifications into engaging visual content that helps
            customers understand your products better and make informed purchasing decisions.
          </p>
          <Button asChild size="lg">
            <Link href="/auth/signup">Sign Up Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
