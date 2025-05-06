"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout, Calendar, Box, Video, ArrowRight } from 'lucide-react';

const templateCategories = [
  {
    name: "Marketing Templates",
    description: "Professional templates for your marketing campaigns",
    icon: Layout,
    href: "/templates/marketing",
    color: "bg-orange-100 text-orange-700",
    count: 4
  },
  {
    name: "Festival Templates",
    description: "Culturally appropriate designs for all Indian festivals",
    icon: Calendar,
    href: "/templates/festival",
    color: "bg-green-100 text-green-700",
    count: 4,
    featured: true
  },
  {
    name: "Product Templates",
    description: "Professional templates for showcasing your products",
    icon: Box,
    href: "/templates/product",
    color: "bg-blue-100 text-blue-700",
    count: 4
  },
  {
    name: "Video Templates",
    description: "Professional video templates for social media and marketing",
    icon: Video,
    href: "/templates/video",
    color: "bg-purple-100 text-purple-700",
    count: 4
  }
];

export default function TemplatesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Templates</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of professional templates designed for various marketing needs
          </p>
        </div>

        {/* Template Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {templateCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="block group"
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
                category.featured ? 'ring-2 ring-primary' : ''
              }`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color} transition-transform duration-300 group-hover:scale-110`}>
                      {React.createElement(category.icon, { size: 24 })}
                    </div>
                    <div className="flex-1">
                      <CardTitle>{category.name}</CardTitle>
                      <CardDescription className="mt-1">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    {category.count} templates available
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="group/button p-0 h-auto hover:bg-transparent"
                  >
                    <span className="text-primary flex items-center">
                      Browse Templates
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Template?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team can help create custom templates tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Sales</Link>
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