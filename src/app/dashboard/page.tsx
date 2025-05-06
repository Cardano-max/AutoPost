"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightIcon, Calendar, Image, Instagram } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to AUTOPOST</h1>
        <p className="text-muted-foreground">
          Your AI-powered marketing automation dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="feature-card">
          <CardHeader>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-green-700" />
            </div>
            <CardTitle>Festival Post</CardTitle>
            <CardDescription>Create culturally relevant festival greetings automatically</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Our flagship feature helps you create festival-specific posts for all major Indian celebrations.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="secondary" className="w-full">
              <Link href="/tools/festival-post" className="flex items-center justify-center">
                Try Festival Post <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="feature-card">
          <CardHeader>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Image className="h-6 w-6 text-orange-700" />
            </div>
            <CardTitle>Image Post</CardTitle>
            <CardDescription>AI-driven marketing image generator</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Create professional marketing images with your brand elements in seconds.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="secondary" className="w-full">
              <Link href="/tools/image-post" className="flex items-center justify-center">
                Try Image Post <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="feature-card">
          <CardHeader>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Instagram className="h-6 w-6 text-purple-700" />
            </div>
            <CardTitle>Insta Post</CardTitle>
            <CardDescription>Instagram-optimized content creator</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Create eye-catching Instagram posts with templates and filters that match your brand.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="secondary" className="w-full">
              <Link href="/tools/insta-post" className="flex items-center justify-center">
                Try Insta Post <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button asChild size="lg">
          <Link href="/tools">View All Tools</Link>
        </Button>
      </div>
    </div>
  );
}
