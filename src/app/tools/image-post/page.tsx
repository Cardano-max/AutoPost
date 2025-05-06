"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Image as ImageIcon, Info, Upload } from 'lucide-react';

export default function ImagePostPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/tools" className="hover:text-foreground">
            Tools
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Image Post</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <ImageIcon className="h-6 w-6 text-orange-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Image Post Generator</h1>
            <p className="text-muted-foreground">
              AI-driven marketing image generator with brand integration
            </p>
          </div>
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2 mb-8">
          <Info className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-amber-800 font-medium">
              Transform ordinary product photos into powerful marketing assets
            </p>
            <p className="text-sm text-amber-700">
              Our AI system automatically applies your brand elements and optimizes your images for maximum impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Boost Your Marketing with AI-Powered Images
            </h2>
            <p className="text-muted-foreground mb-6">
              Our Image Post Generator uses advanced AI to create professional, on-brand marketing images
              in seconds. Perfect for social media posts, banners, ads, and more.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Upload className="h-4 w-4 text-orange-700" />
                </div>
                <div>
                  <h3 className="font-medium">Upload your product images</h3>
                  <p className="text-sm text-muted-foreground">
                    Start with any product photo or image you'd like to enhance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="h-4 w-4 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Add your branding and text</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI will automatically integrate your logo, colors, and promotional text.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="h-4 w-4 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Choose from multiple templates</h3>
                  <p className="text-sm text-muted-foreground">
                    Select from various layouts and styles that match your marketing goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="h-4 w-4 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Download and share instantly</h3>
                  <p className="text-sm text-muted-foreground">
                    Get high-quality images ready for immediate use on any platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/auth/signup?feature=image-post">Start Creating Images</Link>
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
              <CardTitle>Image Post Examples</CardTitle>
              <CardDescription>See how our AI transforms ordinary product photos</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-200/20 to-amber-100/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 text-orange-300">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground font-medium">Example Images Would Appear Here</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Transform product photos into professional marketing assets with branded elements,
                    promotional text, and eye-catching designs.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 border-t">
                <div className="p-4 border-r text-center">
                  <p className="text-sm font-medium">Before</p>
                  <p className="text-xs text-muted-foreground">Plain product photo</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium">After</p>
                  <p className="text-xs text-muted-foreground">AI-enhanced marketing image</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-2">
                  <svg className="h-5 w-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Multiple Templates</CardTitle>
                <CardDescription>
                  Choose from a variety of layouts optimized for different platforms and purposes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-2">
                  <svg className="h-5 w-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Brand Integration</CardTitle>
                <CardDescription>
                  Automatically apply your logo, colors, and fonts to maintain brand consistency
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-2">
                  <svg className="h-5 w-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <CardTitle className="text-lg">AI Enhancement</CardTitle>
                <CardDescription>
                  Smart image optimization, background removal, and auto-adjustment for perfect results
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-lg text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to create eye-catching marketing images?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of businesses using AUTOPOST's Image Post Generator to create
            professional marketing visuals in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/auth/signup?feature=image-post">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
