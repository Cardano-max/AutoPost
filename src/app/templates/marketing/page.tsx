"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Image, Layout, ArrowRight, Megaphone, ShoppingBag, Gift, Sparkles } from 'lucide-react';

const templates = [
  {
    category: "Social Media",
    templates: [
      {
        name: "Product Showcase",
        description: "Professional product photography with engaging captions",
        icon: ShoppingBag,
        color: "bg-orange-100 text-orange-700"
      },
      {
        name: "Special Offer",
        description: "Eye-catching promotional posts for sales and discounts",
        icon: Gift,
        color: "bg-purple-100 text-purple-700"
      }
    ]
  },
  {
    category: "Promotional",
    templates: [
      {
        name: "Brand Story",
        description: "Share your brand's journey and values",
        icon: Megaphone,
        color: "bg-blue-100 text-blue-700"
      },
      {
        name: "New Launch",
        description: "Announce new products or services with style",
        icon: Sparkles,
        color: "bg-green-100 text-green-700"
      }
    ]
  }
];

export default function MarketingTemplatesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/templates" className="hover:text-foreground">
            Templates
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Marketing</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <Layout className="h-6 w-6 text-orange-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Marketing Templates</h1>
            <p className="text-muted-foreground">
              Professional templates for your marketing campaigns
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
                    href={`/templates/marketing/${template.name.toLowerCase().replace(/\s+/g, '-')}`}
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

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Template?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our AI can help create custom templates tailored to your brand's unique needs.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 