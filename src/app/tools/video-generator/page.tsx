"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Info, Video, Play, Music, Wand2 } from 'lucide-react';

export default function VideoGeneratorPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/tools" className="hover:text-foreground">
            Tools
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Video Generator</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Video className="h-6 w-6 text-blue-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Video Generator</h1>
            <p className="text-muted-foreground">
              Convert images to animated marketing videos with transitions
            </p>
          </div>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2 mb-8">
          <Info className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-blue-800 font-medium">
              Bring your images to life with video
            </p>
            <p className="text-sm text-blue-700">
              Transform static images into engaging videos with smooth transitions, animations, and music.
              Perfect for product showcases, social media ads, and promotional content.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Create Captivating Videos from Images
            </h2>
            <p className="text-muted-foreground mb-6">
              Our AI-powered Video Generator transforms your static images into dynamic videos
              that grab attention and boost engagement. Add motion, effects, music, and text to
              create professional marketing videos in minutes.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Upload your images</h3>
                  <p className="text-sm text-muted-foreground">
                    Start with product images, promotional graphics, or any visuals you want to animate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Play className="h-4 w-4 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-medium">Add motion and transitions</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose from a variety of professional animations and transitions between images.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Music className="h-4 w-4 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-medium">Add music and sound effects</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose from our library of royalty-free music or upload your own audio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Wand2 className="h-4 w-4 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-medium">Customize with text and effects</h3>
                  <p className="text-sm text-muted-foreground">
                    Add animated text, calls to action, and visual effects to enhance your video.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                <Link href="/auth/signup?feature=video-generator">Start Creating Videos</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 top-0 right-0" />
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
              <CardHeader className="pb-0">
                <CardTitle>Video Templates</CardTitle>
                <CardDescription>Professional video formats for different purposes</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="group relative overflow-hidden aspect-video rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-md transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-10 w-10 text-blue-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                      <p className="text-white text-xs font-medium">Product Showcase</p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden aspect-video rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-md transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-10 w-10 text-indigo-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                      <p className="text-white text-xs font-medium">Social Media Ad</p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden aspect-video rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 hover:shadow-md transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-10 w-10 text-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                      <p className="text-white text-xs font-medium">Promotional Banner</p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden aspect-video rounded-lg bg-gradient-to-br from-sky-50 to-cyan-50 hover:shadow-md transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-10 w-10 text-sky-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                      <p className="text-white text-xs font-medium">Slideshow</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-900 mb-2">Video features:</h4>
                  <ul className="text-xs space-y-2 text-blue-800">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Multiple video formats (16:9, 9:16, 1:1)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Export options (MP4, GIF, WebM)
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Royalty-free music library
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Text animations and overlays
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Video Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-translate">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                  <svg className="h-5 w-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </div>
                <CardTitle className="text-base">Product Showcases</CardTitle>
                <CardDescription className="text-sm">
                  Highlight products from multiple angles with smooth transitions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-translate">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                  <svg className="h-5 w-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <CardTitle className="text-base">Social Media Ads</CardTitle>
                <CardDescription className="text-sm">
                  Create attention-grabbing ads for Instagram, Facebook, and more
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-translate">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                  <svg className="h-5 w-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <CardTitle className="text-base">Promotional Videos</CardTitle>
                <CardDescription className="text-sm">
                  Announce sales, special offers, and new product launches
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-lg text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Create engaging videos in minutes</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of businesses using AUTOPOST's Video Generator to transform
            static images into dynamic, engaging video content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
              <Link href="/auth/signup?feature=video-generator">Start Free Trial</Link>
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
