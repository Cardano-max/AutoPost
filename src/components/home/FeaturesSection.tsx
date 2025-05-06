"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Image as ImageIcon,
  Instagram,
  Calendar,
  Video,
  Grid,
  Layers,
  SquarePen,
  MessageSquare,
  Clock,
  MapPin,
  Book,
  Globe,
  Youtube,
  ArrowRight
} from 'lucide-react';

// Feature data
const features = [
  {
    name: "Image Post",
    description: "AI-driven marketing image generator with brand integration",
    icon: ImageIcon,
    href: "/tools/image-post",
    color: "bg-orange-100 text-orange-700"
  },
  {
    name: "Insta Post",
    description: "Instagram-optimized content creator with templates and filters",
    icon: Instagram,
    href: "/tools/insta-post",
    color: "bg-purple-100 text-purple-700"
  },
  {
    name: "Festival Post",
    description: "Automated cultural greeting generator for all Indian festivals",
    icon: Calendar,
    href: "/tools/festival-post",
    color: "bg-green-100 text-green-700",
    featured: true
  },
  {
    name: "Video Generator",
    description: "Convert images to animated marketing videos with transitions",
    icon: Video,
    href: "/tools/video-generator",
    color: "bg-blue-100 text-blue-700"
  },
  {
    name: "Collage Maker",
    description: "Multi-image layout designer with customizable templates",
    icon: Grid,
    href: "/tools/collage-maker",
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    name: "Details Generator",
    description: "Product specification visualizer with infographics",
    icon: Layers,
    href: "/tools/details-generator",
    color: "bg-red-100 text-red-700"
  },
  {
    name: "Background Generator",
    description: "Smart background removal and replacement",
    icon: SquarePen,
    href: "/tools/background-generator",
    color: "bg-teal-100 text-teal-700"
  },
  {
    name: "Review Request",
    description: "Customer feedback automation system with templates",
    icon: MessageSquare,
    href: "/tools/review-request",
    color: "bg-indigo-100 text-indigo-700"
  },
  {
    name: "Time Management",
    description: "Content calendar and scheduling tools for marketing",
    icon: Clock,
    href: "/tools/time-management",
    color: "bg-pink-100 text-pink-700"
  },
  {
    name: "Google My Business",
    description: "GMB profile post creator with analytics",
    icon: MapPin,
    href: "/tools/gmb-launcher",
    color: "bg-emerald-100 text-emerald-700"
  },
  {
    name: "Catalogue Creation",
    description: "Digital catalog designer with templates and branding",
    icon: Book,
    href: "/tools/catalogue-creation",
    color: "bg-amber-100 text-amber-700"
  },
  {
    name: "Website Builder",
    description: "Website creation in 12 steps with templates",
    icon: Globe,
    href: "/tools/website-builder",
    color: "bg-cyan-100 text-cyan-700"
  },
  {
    name: "YouTube Shorts",
    description: "Vertical video generator for short-form content",
    icon: Youtube,
    href: "/tools/youtube-shorts",
    color: "bg-rose-100 text-rose-700"
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20" id="features">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Marketing Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our suite of 13 AI-powered marketing tools helps you create, schedule, and automate your marketing content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.name}
              className={`feature-card border hover-translate ${feature.featured ? 'ring-2 ring-primary' : ''}`}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.color}`}>
                  {React.createElement(feature.icon, { size: 24 })}
                </div>
                <CardTitle className="mt-4">{feature.name}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="group p-0">
                  <Link href={feature.href} className="flex items-center text-primary">
                    Try now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
