"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Calendar, ArrowRight, Star, Heart, Sun, Moon } from 'lucide-react';

const templates = [
  {
    category: "Religious Festivals",
    templates: [
      {
        name: "Diwali Special",
        description: "Elegant designs for the festival of lights",
        icon: Star,
        color: "bg-yellow-100 text-yellow-700"
      },
      {
        name: "Eid Collection",
        description: "Beautiful greetings for Eid celebrations",
        icon: Moon,
        color: "bg-emerald-100 text-emerald-700"
      }
    ]
  },
  {
    category: "Cultural Events",
    templates: [
      {
        name: "Regional Festivals",
        description: "Templates for state-specific celebrations",
        icon: Heart,
        color: "bg-red-100 text-red-700"
      },
      {
        name: "Seasonal Events",
        description: "Designs for harvest and seasonal festivals",
        icon: Sun,
        color: "bg-orange-100 text-orange-700"
      }
    ]
  }
];

export default function FestivalTemplatesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/templates" className="hover:text-foreground">
            Templates
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Festival</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Calendar className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Festival Templates</h1>
            <p className="text-muted-foreground">
              Culturally appropriate designs for all Indian festivals
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
                    href={`/templates/festival/${template.name.toLowerCase().replace(/\s+/g, '-')}`}
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

        {/* Festival Calendar Preview */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Upcoming Festivals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Plan ahead with our festival calendar and create your greetings in advance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-sm text-muted-foreground">Next Festival</div>
              <div className="font-bold">Diwali</div>
              <div className="text-sm">October 31, 2025</div>
            </div>
            <div className="bg-white/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-sm text-muted-foreground">Coming Soon</div>
              <div className="font-bold">Bhai Dooj</div>
              <div className="text-sm">November 3, 2025</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/tools/festival-post/calendar">View Full Calendar</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 