"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Video, ArrowRight, Play, Film, Youtube, Instagram } from 'lucide-react';

const templates = [
  {
    category: "Social Media",
    templates: [
      {
        name: "Instagram Reels",
        description: "Vertical video templates optimized for Reels",
        icon: Instagram,
        color: "bg-pink-100 text-pink-700"
      },
      {
        name: "YouTube Shorts",
        description: "Short-form video templates for YouTube",
        icon: Youtube,
        color: "bg-red-100 text-red-700"
      }
    ]
  },
  {
    category: "Marketing",
    templates: [
      {
        name: "Product Showcase",
        description: "Dynamic product demonstration videos",
        icon: Play,
        color: "bg-blue-100 text-blue-700"
      },
      {
        name: "Brand Story",
        description: "Templates for sharing your brand journey",
        icon: Film,
        color: "bg-purple-100 text-purple-700"
      }
    ]
  }
];

export default function VideoTemplatesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/templates" className="hover:text-foreground">
            Templates
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Video</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Video className="h-6 w-6 text-purple-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Video Templates</h1>
            <p className="text-muted-foreground">
              Professional video templates for social media and marketing
            </p>
          </div>
        </div>

        {/* Template Categories */}
        <div className="space-y-12">
          {templates.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.templates.map((template) => (
                  <Link
                    key={template.name}
                    href={`/templates/video/${template.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block group"
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${template.color} transition-transform duration-300 group-hover:scale-110`}>
                          {React.createElement(template.icon, { size: 24 })}
                        </div>
                        <CardTitle className="mt-4">{template.name}</CardTitle>
                        <CardDescription>{template.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button
                          variant="ghost"
                          className="group/button p-0 h-auto hover:bg-transparent"
                        >
                          <span className="text-primary flex items-center">
                            Use Template
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                          </span>
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Video Formats Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Supported Video Formats</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Create videos optimized for every platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/50 rounded-lg p-4 backdrop-blur-sm text-center">
              <div className="aspect-video bg-purple-100 rounded-lg mb-3 flex items-center justify-center text-purple-700">
                16:9
              </div>
              <div className="font-medium mb-1">Landscape</div>
              <div className="text-sm text-muted-foreground">YouTube, Web</div>
            </div>
            <div className="bg-white/50 rounded-lg p-4 backdrop-blur-sm text-center">
              <div className="aspect-[9/16] w-12 mx-auto bg-pink-100 rounded-lg mb-3 flex items-center justify-center text-pink-700">
                9:16
              </div>
              <div className="font-medium mb-1">Portrait</div>
              <div className="text-sm text-muted-foreground">Stories, Reels</div>
            </div>
            <div className="bg-white/50 rounded-lg p-4 backdrop-blur-sm text-center">
              <div className="aspect-square w-16 mx-auto bg-blue-100 rounded-lg mb-3 flex items-center justify-center text-blue-700">
                1:1
              </div>
              <div className="font-medium mb-1">Square</div>
              <div className="text-sm text-muted-foreground">Instagram, Feed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 