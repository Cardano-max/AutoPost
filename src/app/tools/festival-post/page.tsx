"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FestivalPostFeatures } from '@/components/tools/FestivalPostFeatures';
import { Calendar, ChevronRight, Info } from 'lucide-react';

export default function FestivalPostPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/tools" className="hover:text-foreground">
            Tools
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Festival Post</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Calendar className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Festival Post Generator</h1>
            <p className="text-muted-foreground">
              Create culturally relevant festival greetings with automated scheduling
            </p>
          </div>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2 mb-8">
          <Info className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-blue-800 font-medium">
              Our flagship feature is now available
            </p>
            <p className="text-sm text-blue-700">
              Festival Post Generator helps you create automated cultural greeting posts for all major Indian
              festivals, with brand integration and scheduling features.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Automate Your Festival Marketing
            </h2>
            <p className="text-muted-foreground mb-6">
              Stay connected with your customers by automatically sending them culturally relevant
              festival greetings. Our AI-powered system creates personalized festival posts with your
              brand elements and delivers them at the perfect time.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-green-700 text-sm font-medium">1</span>
                </div>
                <div>
                  <h3 className="font-medium">Register your company profile</h3>
                  <p className="text-sm text-muted-foreground">
                    Add your company details, logo, and brand colors.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-green-700 text-sm font-medium">2</span>
                </div>
                <div>
                  <h3 className="font-medium">Select festivals and customize templates</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose which festivals you want to create posts for and customize the templates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-green-700 text-sm font-medium">3</span>
                </div>
                <div>
                  <h3 className="font-medium">Set up delivery preferences</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose delivery channels (WhatsApp, email) and scheduling options.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-green-700 text-sm font-medium">4</span>
                </div>
                <div>
                  <h3 className="font-medium">Relax and let AUTOPOST handle everything</h3>
                  <p className="text-sm text-muted-foreground">
                    Our system automatically generates and delivers your festival greetings on time.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/auth/signup?feature=festival-post">Get Started</Link>
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Festival Calendar Preview</CardTitle>
              <CardDescription>Upcoming festivals in the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <h4 className="font-medium">Diwali</h4>
                    <p className="text-sm text-muted-foreground">Festival of Lights</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">October 31, 2025</p>
                    <p className="text-xs text-muted-foreground">12 days away</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <h4 className="font-medium">Bhai Dooj</h4>
                    <p className="text-sm text-muted-foreground">Celebration of brother-sister bond</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">November 3, 2025</p>
                    <p className="text-xs text-muted-foreground">15 days away</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <h4 className="font-medium">Chhath Puja</h4>
                    <p className="text-sm text-muted-foreground">Worship of the Sun God</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">November 8, 2025</p>
                    <p className="text-xs text-muted-foreground">20 days away</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <h4 className="font-medium">Guru Nanak Jayanti</h4>
                    <p className="text-sm text-muted-foreground">Birth of Guru Nanak Dev</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">November 15, 2025</p>
                    <p className="text-xs text-muted-foreground">27 days away</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button asChild variant="outline" size="sm">
                  <Link href="/tools/festival-post/calendar">View Full Calendar</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
          <FestivalPostFeatures />
        </div>

        <div className="bg-muted p-8 rounded-lg text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Ready to automate your festival marketing?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of businesses using AUTOPOST's Festival Post Generator to connect with their customers
            during important cultural celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/auth/signup?feature=festival-post">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
