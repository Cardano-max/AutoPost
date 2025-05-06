"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Grid, Info } from 'lucide-react';

export default function CollageMakerPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/tools" className="hover:text-foreground">
            Tools
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Collage Maker</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
            <Grid className="h-6 w-6 text-yellow-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Collage Maker</h1>
            <p className="text-muted-foreground">
              Multi-image layout designer with customizable templates
            </p>
          </div>
        </div>

        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2 mb-8">
          <Info className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-yellow-800 font-medium">
              Tool Coming Soon
            </p>
            <p className="text-sm text-yellow-700">
              Our Collage Maker tool is currently under development. Check back soon for updates!
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Collage Maker Features</CardTitle>
            <CardDescription>Create beautiful collages with multiple images</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The Collage Maker tool will allow you to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Combine multiple images into a single collage</li>
              <li>Choose from a variety of layouts and templates</li>
              <li>Customize borders, spacing, and backgrounds</li>
              <li>Apply filters and effects to all images at once</li>
              <li>Add text overlays and stickers</li>
              <li>Export in various formats and resolutions</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/auth/signup">Sign Up for Early Access</Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Be the First to Know</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Sign up to get notified when our Collage Maker tool is ready.
            Get early access and exclusive launch offers.
          </p>
          <Button asChild size="lg">
            <Link href="/auth/signup">Sign Up Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
