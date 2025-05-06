"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Box, ArrowRight, Camera, Tag, Layers, Grid } from 'lucide-react';

const templates = [
  {
    category: "Product Photography",
    templates: [
      {
        name: "E-commerce Ready",
        description: "Professional product shots with clean backgrounds",
        icon: Camera,
        color: "bg-blue-100 text-blue-700"
      },
      {
        name: "Lifestyle Shots",
        description: "Products in real-world contexts and settings",
        icon: Grid,
        color: "bg-purple-100 text-purple-700"
      }
    ]
  },
  {
    category: "Product Details",
    templates: [
      {
        name: "Specification Cards",
        description: "Clear, visual product specifications and features",
        icon: Layers,
        color: "bg-teal-100 text-teal-700"
      },
      {
        name: "Price Cards",
        description: "Attractive pricing and offer displays",
        icon: Tag,
        color: "bg-pink-100 text-pink-700"
      }
    ]
  }
];

export default function ProductTemplatesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/templates" className="hover:text-foreground">
            Templates
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Product</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Box className="h-6 w-6 text-blue-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Product Templates</h1>
            <p className="text-muted-foreground">
              Professional templates for showcasing your products
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
                    href={`/templates/product/${template.name.toLowerCase().replace(/\s+/g, '-')}`}
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

        {/* Features Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Use Our Product Templates?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional templates designed to increase your product's visibility and conversion rates
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/50 rounded-lg p-4 backdrop-blur-sm text-center">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 mx-auto mb-3 flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
              <div className="font-medium mb-1">Professional Look</div>
              <div className="text-sm text-muted-foreground">Studio-quality templates</div>
            </div>
            <div className="bg-white/50 rounded-lg p-4 backdrop-blur-sm text-center">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 mx-auto mb-3 flex items-center justify-center">
                <Grid className="w-5 h-5" />
              </div>
              <div className="font-medium mb-1">Multiple Angles</div>
              <div className="text-sm text-muted-foreground">Show every detail</div>
            </div>
            <div className="bg-white/50 rounded-lg p-4 backdrop-blur-sm text-center">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 mx-auto mb-3 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div className="font-medium mb-1">Easy Customization</div>
              <div className="text-sm text-muted-foreground">Quick brand matching</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 