"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Calendar, Info, Search, ChevronLeft, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Sample festival data
const festivalData = [
  {
    month: "May",
    festivals: [
      { name: "Buddha Purnima", date: "May 15, 2025", daysAway: 10, type: "Religious", region: "Pan India" },
      { name: "National Technology Day", date: "May 11, 2025", daysAway: 6, type: "National", region: "Pan India" },
    ]
  },
  {
    month: "June",
    festivals: [
      { name: "Eid al-Adha", date: "June 7, 2025", daysAway: 33, type: "Religious", region: "Pan India" },
      { name: "Father's Day", date: "June 15, 2025", daysAway: 41, type: "International", region: "Pan India" },
      { name: "International Yoga Day", date: "June 21, 2025", daysAway: 47, type: "International", region: "Pan India" }
    ]
  },
  {
    month: "July",
    festivals: [
      { name: "Guru Purnima", date: "July 12, 2025", daysAway: 68, type: "Religious", region: "Pan India" },
      { name: "Kargil Vijay Diwas", date: "July 26, 2025", daysAway: 82, type: "National", region: "Pan India" }
    ]
  },
  {
    month: "August",
    festivals: [
      { name: "Raksha Bandhan", date: "August 9, 2025", daysAway: 96, type: "Religious", region: "Pan India" },
      { name: "Independence Day", date: "August 15, 2025", daysAway: 102, type: "National", region: "Pan India" },
      { name: "Janmashtami", date: "August 17, 2025", daysAway: 104, type: "Religious", region: "Pan India" },
      { name: "Onam", date: "August 26, 2025", daysAway: 113, type: "Regional", region: "Kerala" }
    ]
  },
  {
    month: "September",
    festivals: [
      { name: "Ganesh Chaturthi", date: "September 3, 2025", daysAway: 121, type: "Religious", region: "Pan India" },
      { name: "Teacher's Day", date: "September 5, 2025", daysAway: 123, type: "National", region: "Pan India" }
    ]
  },
  {
    month: "October",
    festivals: [
      { name: "Gandhi Jayanti", date: "October 2, 2025", daysAway: 150, type: "National", region: "Pan India" },
      { name: "Navratri", date: "October 11, 2025", daysAway: 159, type: "Religious", region: "Pan India" },
      { name: "Dussehra", date: "October 20, 2025", daysAway: 168, type: "Religious", region: "Pan India" },
      { name: "Diwali", date: "October 31, 2025", daysAway: 179, type: "Religious", region: "Pan India" }
    ]
  }
];

export default function FestivalCalendarPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/tools" className="hover:text-foreground">
            Tools
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/tools/festival-post" className="hover:text-foreground">
            Festival Post
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Calendar</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Calendar className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Festival Calendar</h1>
            <p className="text-muted-foreground">
              Comprehensive database of all major Indian festivals
            </p>
          </div>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2 mb-8">
          <Info className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-blue-800 font-medium">
              Plan your marketing calendar
            </p>
            <p className="text-sm text-blue-700">
              Use our festival calendar to schedule greeting posts for all important cultural occasions.
              Set up automated posts in advance to never miss an important festival.
            </p>
          </div>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search festivals..."
                className="pl-9"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex gap-1 items-center">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            <div className="flex">
              <Button variant="outline" className="rounded-r-none border-r-0">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-l-none px-3">2025</Button>
              <Button variant="outline" className="rounded-l-none border-l-0">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-8 mb-12">
          {festivalData.map((monthData) => (
            <div key={monthData.month}>
              <h2 className="text-2xl font-bold mb-4">{monthData.month} 2025</h2>
              <div className="space-y-3">
                {monthData.festivals.map((festival) => (
                  <Card key={festival.name} className="hover-translate">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle className="text-lg">{festival.name}</CardTitle>
                          <CardDescription>{festival.date}</CardDescription>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            {festival.type}
                          </span>
                          <p className="text-xs text-muted-foreground mt-1">
                            {festival.daysAway} days away
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardFooter className="pt-2 flex justify-between">
                      <div className="text-xs text-muted-foreground">
                        Region: {festival.region}
                      </div>
                      <Button size="sm" variant="ghost" asChild className="h-8">
                        <Link href={`/tools/festival-post?festival=${encodeURIComponent(festival.name)}`}>
                          Create Post
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Automate Your Festival Greetings</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Schedule your festival greetings in advance to ensure timely delivery.
            Our system will automatically generate and send culturally appropriate
            greetings at the perfect time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/auth/signup?feature=festival-post">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
