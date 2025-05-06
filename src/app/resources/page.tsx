import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, FileText, HelpCircle, MessageSquare, Video } from 'lucide-react';

// Resource data
const resources = [
  {
    title: 'Help Center',
    description: 'Find answers to common questions about AUTOPOST and its features.',
    icon: HelpCircle,
    cta: 'Browse Help Articles',
    href: '/resources/help',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    title: 'Video Tutorials',
    description: 'Watch step-by-step video guides on how to use AUTOPOST effectively.',
    icon: Video,
    cta: 'Watch Tutorials',
    href: '/resources/tutorials',
    color: 'bg-red-100 text-red-700'
  },
  {
    title: 'Blog',
    description: 'Stay updated with the latest marketing trends and AUTOPOST features.',
    icon: FileText,
    cta: 'Read Blog Posts',
    href: '/resources/blog',
    color: 'bg-green-100 text-green-700'
  },
  {
    title: 'Documentation',
    description: 'Detailed documentation for developers and advanced users.',
    icon: BookOpen,
    cta: 'View Documentation',
    href: '/resources/documentation',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    title: 'Community',
    description: 'Join our community forum to connect with other AUTOPOST users.',
    icon: MessageSquare,
    cta: 'Join Community',
    href: '/resources/community',
    color: 'bg-orange-100 text-orange-700'
  }
];

export default function ResourcesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Resources</h1>
        <p className="text-lg text-muted-foreground">
          Explore our resources to get the most out of AUTOPOST
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {resources.map((resource) => (
          <Card key={resource.title} className="hover-translate">
            <CardHeader>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${resource.color}`}>
                {React.createElement(resource.icon, { className: "h-6 w-6" })}
              </div>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full" variant="outline">
                <Link href={resource.href}>{resource.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl mx-auto bg-muted p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
        <p className="text-muted-foreground mb-6">
          Our support team is always ready to help with any questions you may have.
          Contact us and we'll get back to you as soon as possible.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  );
}
