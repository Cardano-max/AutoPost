"use client";

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Testimonial data
const testimonials = [
  {
    name: "Emily",
    role: "E-commerce Manager",
    content: "AUTOPOST's AI Product Ads Creator has made creating ads for our online store so much easier! This AI tool is not only easy to use, it also makes our ads look fantastic. Now, creating ads is quick and effective—absolutely awesome!",
    avatarInitial: "EM"
  },
  {
    name: "John",
    role: "Ebay Seller",
    content: "The Background Generator feature on AUTOPOST is amazing! It allows us to quickly customize our eBay product photos with AI backgrounds that perfectly align with our brand. It's practical and significantly enhances our visuals.",
    avatarInitial: "JH"
  },
  {
    name: "Sarah",
    role: "Content Creator",
    content: "Festival Post by AUTOPOST is a masterpiece for global e-commerce. It effortlessly creates culturally relevant graphics, making our products accessible to a worldwide audience. This feature is essential for any international e-commerce strategy.",
    avatarInitial: "SA"
  },
  {
    name: "Mark",
    role: "Video Producer",
    content: "Video Generator from AUTOPOST has transformed how we create content. The video creation and editing features are seamless, offering a natural and engaging experience for our viewers. It's an invaluable tool for expanding our reach.",
    avatarInitial: "MA"
  },
  {
    name: "Lisa",
    role: "Fashion Retailer",
    content: "AUTOPOST has been a game-changer for my online store. All I need is to upload a flat image of the clothing, and it instantly gives me a marketing-ready image. This not only saves me the hassle of arranging photoshoots but also makes the listings much more appealing.",
    avatarInitial: "LI"
  },
  {
    name: "Raj",
    role: "Marketing Director",
    content: "The Festival Post feature is perfect for our cultural marketing campaigns. We've increased engagement by 43% since we started using AUTOPOST to create timely festival greetings for all major Indian celebrations.",
    avatarInitial: "RA"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">They All Use AUTOPOST</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The secret to high marketing efficiency for over 10,000 businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover-translate">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatarInitial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
