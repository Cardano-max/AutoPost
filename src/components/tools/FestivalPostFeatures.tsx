"use client";

import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  UserPlus,
  Palette,
  Calendar,
  Send,
  Check
} from 'lucide-react';

// Feature data
const festivalFeatures = [
  {
    id: "registration",
    icon: UserPlus,
    title: "Customer Registration System",
    description: "Create your company profile, set brand styles, and configure delivery preferences.",
    details: [
      "Company profile creation (logo, name, contact details, address)",
      "Brand style settings (colors, fonts, preferred templates)",
      "Delivery preferences configuration (WhatsApp/email)"
    ]
  },
  {
    id: "design",
    icon: Palette,
    title: "AI Design Generator",
    description: "Create stunning festival greetings with our AI-powered design generator.",
    details: [
      "Festival-specific template library (100+ Indian festivals)",
      "Smart brand element placement",
      "Customization options with live preview",
      "Image quality settings and format options"
    ]
  },
  {
    id: "calendar",
    icon: Calendar,
    title: "Festival Calendar",
    description: "Access a comprehensive database of Indian festivals with scheduling options.",
    details: [
      "Comprehensive Indian festival database",
      "Regional festival customization",
      "Visual calendar interface with filters",
      "Scheduling system with notification previews"
    ]
  },
  {
    id: "delivery",
    icon: Send,
    title: "Delivery System",
    description: "Automatically send your festival greetings through multiple channels.",
    details: [
      "WhatsApp Business API integration",
      "Email delivery with tracking",
      "Scheduling for 12:00 AM automatic sends",
      "Analytics dashboard for delivery metrics"
    ]
  }
];

export function FestivalPostFeatures() {
  return (
    <div className="py-12">
      <Tabs defaultValue="registration" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          {festivalFeatures.map((feature) => (
            <TabsTrigger
              key={feature.id}
              value={feature.id}
              className="flex flex-col items-center gap-2 py-4 h-auto"
            >
              {React.createElement(feature.icon, { className: "h-5 w-5 mb-1" })}
              <span className="text-xs md:text-sm font-medium">{feature.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {festivalFeatures.map((feature) => (
          <TabsContent key={feature.id} value={feature.id} className="px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {React.createElement(feature.icon, { className: "h-5 w-5 text-primary" })}
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={`${feature.id}-${detail.substring(0, 10)}`} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center p-4">
                <div className="text-muted-foreground text-center">
                  <p>[Feature Visual Placeholder]</p>
                  <p className="text-sm">A screenshot or illustration of the {feature.title} would appear here</p>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
