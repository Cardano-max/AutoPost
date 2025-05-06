import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/layout/Logo';

// Footer link categories
const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Help Center', href: '/resources/help' },
      { label: 'Tutorials', href: '/resources/tutorials' },
      { label: 'Status', href: '/status' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/partners' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'GDPR', href: '/gdpr' },
    ],
  },
];

// Social media links
const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col space-y-4">
              <Logo />
              <p className="text-sm text-muted-foreground mt-2">
                AUTOPOST helps businesses automate their marketing efforts with AI-powered tools.
              </p>
            </div>
          </div>
          {footerLinks.map((category) => (
            <div key={category.title} className="flex flex-col space-y-4">
              <h4 className="text-sm font-medium text-foreground">{category.title}</h4>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col space-y-4 border-t pt-8">
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AUTOPOST. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
