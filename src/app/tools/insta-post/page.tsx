"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Instagram, Info, Layout, Sparkles, Hexagon } from 'lucide-react';

export default function InstaPostPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/tools" className="hover:text-foreground">
            Tools
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Insta Post</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Instagram className="h-6 w-6 text-purple-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Insta Post Generator</h1>
            <p className="text-muted-foreground">
              Instagram-optimized content creator with templates and filters
            </p>
          </div>
        </div>

        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg flex items-start gap-2 mb-8">
          <Info className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-purple-800 font-medium">
              Create Instagram-ready content that drives engagement
            </p>
            <p className="text-sm text-purple-700">
              Our advanced AI helps you craft visually stunning posts optimized specifically for Instagram's algorithm and aesthetic.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Stand Out on Instagram
            </h2>
            <p className="text-muted-foreground mb-6">
              Create eye-catching, algorithm-friendly Instagram posts that help your brand get noticed.
              Our specialized templates and filters are designed specifically for Instagram's unique format and audience.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Layout className="h-4 w-4 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-medium">Instagram-specific templates</h3>
                  <p className="text-sm text-muted-foreground">
                    Designed for optimal performance on Instagram's platform.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="h-4 w-4 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-medium">Professional filters and effects</h3>
                  <p className="text-sm text-muted-foreground">
                    Apply trending filters that enhance your content's visual appeal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Hexagon className="h-4 w-4 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-medium">Engagement-optimized elements</h3>
                  <p className="text-sm text-muted-foreground">
                    Add caption suggestions, hashtags, and interactive elements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="h-4 w-4 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Multi-format support</h3>
                  <p className="text-sm text-muted-foreground">
                    Create content for posts, carousels, Stories, and Reels.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Link href="/auth/signup?feature=insta-post">Start Creating</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 top-0 right-0" />
            <Card className="overflow-hidden border-purple-200 bg-white/80 backdrop-blur-sm h-full">
              <CardHeader className="pb-0 relative">
                <div className="absolute top-0 right-0 bg-gradient-to-br from-purple-400 to-pink-400 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                  Instagram Ready
                </div>
                <CardTitle>Instagram Templates</CardTitle>
                <CardDescription>Professionally designed for maximum engagement</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-50 rounded-lg flex items-center justify-center p-3">
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-purple-800">Square Post</p>
                    </div>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-50 rounded-lg flex items-center justify-center p-3">
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-pink-500/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-pink-800">Carousel</p>
                    </div>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-indigo-100 to-blue-50 rounded-lg flex items-center justify-center p-3">
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-indigo-800">Reels</p>
                    </div>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-fuchsia-100 to-violet-50 rounded-lg flex items-center justify-center p-3">
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-fuchsia-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-fuchsia-800">Stories</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <h4 className="text-sm font-medium text-purple-900 mb-2">AI-powered Instagram features:</h4>
                  <ul className="text-xs space-y-2 text-purple-800">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Trending hashtag suggestions
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Engagement-optimized layouts
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Caption generation assistant
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Instagram Story interaction elements
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Instagram Content Types</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="hover-translate">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-2">
                  <svg className="h-5 w-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z" />
                  </svg>
                </div>
                <CardTitle className="text-base">Feed Posts</CardTitle>
                <CardDescription className="text-sm">
                  Square or portrait posts for your main feed
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-translate">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-2">
                  <svg className="h-5 w-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <CardTitle className="text-base">Carousels</CardTitle>
                <CardDescription className="text-sm">
                  Multi-image posts that boost engagement
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-translate">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-2">
                  <svg className="h-5 w-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </div>
                <CardTitle className="text-base">Stories</CardTitle>
                <CardDescription className="text-sm">
                  Vertical content that disappears after 24 hours
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-translate">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-2">
                  <svg className="h-5 w-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <CardTitle className="text-base">Reels</CardTitle>
                <CardDescription className="text-sm">
                  Short-form vertical videos with music
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 via-fuchsia-50 to-pink-50 p-8 rounded-lg text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Create Instagram content that converts</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of businesses using AUTOPOST's Insta Post Generator to create
            engagement-optimized content for Instagram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Link href="/auth/signup?feature=insta-post">Start Creating</Link>
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
