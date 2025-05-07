"use client";

import React from 'react';
import { Calendar, Clock, Palette, Send, FileImage, BarChart } from 'lucide-react';

export function FestivalPostFeatures() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      title: "Festival Calendar",
      description: "Access a pre-loaded calendar with 100+ Indian festivals, both regional and national"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Automatic Scheduling",
      description: "Posts are automatically delivered at 12:00 AM on the festival day"
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: "AI Design Generation",
      description: "Professional festival greetings generated with your brand identity"
    },
    {
      icon: <Send className="h-8 w-8 text-rose-600" />,
      title: "Multi-channel Delivery",
      description: "Send festival greetings via WhatsApp, Email or both"
    },
    {
      icon: <FileImage className="h-8 w-8 text-amber-600" />,
      title: "Branded Templates",
      description: "Maintain consistent brand identity across all festival communications"
    },
    {
      icon: <BarChart className="h-8 w-8 text-teal-600" />,
      title: "Analytics & Reporting",
      description: "Track delivery status and engagement with your festival greetings"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="p-6 border rounded-lg bg-white hover:shadow-md transition-shadow duration-200">
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
