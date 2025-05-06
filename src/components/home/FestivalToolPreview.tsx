"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Send } from 'lucide-react';

export function FestivalToolPreview() {
  const [currentFestival, setCurrentFestival] = useState(0);

  const festivals = [
    {
      name: "Diwali",
      date: "October 21, 2025",
      description: "Festival of Lights",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Holi",
      date: "March 12, 2025",
      description: "Festival of Colors",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Raksha Bandhan",
      date: "August 9, 2025",
      description: "Celebration of Siblings",
      color: "from-red-400 to-rose-500"
    },
    {
      name: "Durga Puja",
      date: "October 1, 2025",
      description: "Worship of Goddess Durga",
      color: "from-orange-400 to-red-500"
    }
  ];

  // Auto-cycle through festivals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFestival((prev) => (prev + 1) % festivals.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-background rounded-xl overflow-hidden flex flex-col border shadow-lg">
      {/* Top Bar */}
      <div className="bg-muted/30 p-3 border-b flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
          <div className="w-3 h-3 rounded-full bg-green-500/20" />
        </div>
        <div className="text-xs font-medium text-muted-foreground">
          Festival Post Generator
        </div>
        <div className="w-6"></div>
      </div>

      {/* Content Area - Responsive */}
      <div className="flex flex-col md:flex-row gap-4 p-4">
        {/* Settings Panel */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Company Profile</h3>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="text-xs font-medium">LOGO</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">AUTOPOST Inc.</div>
                    <div className="text-xs text-muted-foreground">Marketing Company</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Delivery Settings</h3>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div className="text-xs">
                      <span className="block text-muted-foreground">Schedule</span>
                      <span className="font-medium">12:00 AM Auto-Send</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50">
                    <Send className="w-4 h-4 text-muted-foreground" />
                    <div className="text-xs">
                      <span className="block text-muted-foreground">Delivery</span>
                      <span className="font-medium">WhatsApp + Email</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Panel */}
        <div className="w-full md:w-2/3">
          <Card className="h-full">
            <CardContent className="p-4 md:p-6 flex items-center justify-center">
              <div
                key={currentFestival}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md transition-all duration-500 ease-in-out transform"
                style={{
                  opacity: 1,
                  scale: 1,
                }}
              >
                <div
                  className={`bg-gradient-to-r ${festivals[currentFestival].color} rounded-xl p-4 md:p-6 text-white shadow-lg`}
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">Upcoming Festival</span>
                  </div>
                  
                  <div className="space-y-1 mb-6">
                    <h3 className="text-xl md:text-2xl font-bold">{festivals[currentFestival].name}</h3>
                    <p className="text-sm text-white/90">{festivals[currentFestival].description}</p>
                    <p className="text-sm text-white/80">{festivals[currentFestival].date}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div>
                      <div className="text-xs text-white/80">Scheduled by</div>
                      <div className="text-sm font-medium">AUTOPOST Inc.</div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-xs font-medium">LOGO</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-6 gap-2">
                  {festivals.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                        index === currentFestival ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 