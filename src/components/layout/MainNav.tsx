import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';

// Tool icons
import {
  Image as ImageIcon,
  Instagram,
  Calendar,
  Video,
  Grid,
  Layers,
  SquarePen,
  MessageSquare,
  Clock,
  MapPin,
  Book,
  Globe,
  Youtube
} from 'lucide-react';

// Define navigation links and dropdowns
const tools = [
  { name: "Image Post", description: "AI-driven marketing image generator", href: "/tools/image-post", icon: ImageIcon },
  { name: "Insta Post", description: "Instagram-optimized content creator", href: "/tools/insta-post", icon: Instagram },
  { name: "Festival Post", description: "Automated cultural greeting generator", href: "/tools/festival-post", icon: Calendar },
  { name: "Video Generator", description: "Convert images to animated videos", href: "/tools/video-generator", icon: Video },
  { name: "Collage Maker", description: "Multi-image layout designer", href: "/tools/collage-maker", icon: Grid },
  { name: "Details Generator", description: "Product specification visualizer", href: "/tools/details-generator", icon: Layers },
  { name: "Background Generator", description: "Smart background removal & replacement", href: "/tools/background-generator", icon: SquarePen },
  { name: "Review Request", description: "Customer feedback automation system", href: "/tools/review-request", icon: MessageSquare },
  { name: "Time Management", description: "Content calendar and scheduling tools", href: "/tools/time-management", icon: Clock },
  { name: "Google My Business", description: "GMB profile post creator", href: "/tools/gmb-launcher", icon: MapPin },
  { name: "Catalogue Creation", description: "Digital catalog designer with templates", href: "/tools/catalogue-creation", icon: Book },
  { name: "Website Builder", description: "Website creation in 12 steps", href: "/tools/website-builder", icon: Globe },
  { name: "YouTube Shorts", description: "Vertical video generator", href: "/tools/youtube-shorts", icon: Youtube },
];

const templates = [
  { name: "Marketing Templates", href: "/templates/marketing" },
  { name: "Festival Templates", href: "/templates/festival" },
  { name: "Product Templates", href: "/templates/product" },
  { name: "Video Templates", href: "/templates/video" },
];

const resources = [
  { name: "Help Center", href: "/resources/help" },
  { name: "API Documentation", href: "/resources/api-docs" },
  { name: "Blog", href: "/resources/blog" },
  { name: "Tutorials", href: "/resources/tutorials" },
];

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {}

export function MainNav({ className, ...props }: MainNavProps) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="px-4 transition-colors hover:text-primary flex items-center">
            Tools <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[400px] p-4 grid grid-cols-2 gap-3" align="start">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex items-center p-2 rounded-md hover:bg-muted transition-colors"
            >
              <div className="mr-2 text-primary">
                {React.createElement(tool.icon, { size: 20 })}
              </div>
              <div>
                <div className="font-medium">{tool.name}</div>
                <div className="text-xs text-muted-foreground">{tool.description}</div>
              </div>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="px-4 transition-colors hover:text-primary flex items-center">
            Templates <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {templates.map((template) => (
            <DropdownMenuItem key={template.href} asChild>
              <Link href={template.href}>{template.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="px-4 transition-colors hover:text-primary flex items-center">
            Resources <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {resources.map((resource) => (
            <DropdownMenuItem key={resource.href} asChild>
              <Link href={resource.href}>{resource.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="ghost" className="px-4 transition-colors hover:text-primary" asChild>
        <Link href="/pricing">Pricing</Link>
      </Button>

      <Button variant="ghost" className="px-4 transition-colors hover:text-primary" asChild>
        <Link href="/api-sdk">API/SDK</Link>
      </Button>
    </nav>
  );
}
