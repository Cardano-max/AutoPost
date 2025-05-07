import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

// Updated pricing plans data
const pricingPlans = [
  {
    name: 'Festival Post Only',
    description: 'Send up to 250 festival images per year automatically to your WhatsApp. Perfect for businesses focused on festival greetings.',
    price: '₹999',
    period: 'per year',
    features: [
      'Up to 250 Festival Posts per year',
      'Automatic WhatsApp delivery',
      'AI-generated festival images',
      'No manual scheduling needed',
      'Basic support',
    ],
    cta: 'Get Festival Plan',
    href: '/auth/signup?plan=festival',
    popular: false,
  },
  {
    name: 'All 8 Features',
    description: 'Access all 8 core marketing automation tools for a single annual price. Great for growing businesses.',
    price: '₹3,600',
    period: 'per year',
    features: [
      'All 8 core features included',
      'Unlimited Festival Posts',
      'Unlimited Image Posts',
      'WhatsApp & Email delivery',
      'AI-powered content creation',
      'Priority support',
    ],
    cta: 'Get 8-Feature Plan',
    href: '/auth/signup?plan=8features',
    popular: true,
  },
  {
    name: 'All 14 Features',
    description: 'Unlock the full power of AUTOPOST with all 14 features for advanced marketing automation.',
    price: '₹6,000',
    period: 'per year',
    features: [
      'All 14 features included',
      'Unlimited Festival & Image Posts',
      'All delivery channels',
      'Advanced analytics',
      'Custom branding',
      'Premium support',
      'API access',
    ],
    cta: 'Get All Features',
    href: '/auth/signup?plan=allfeatures',
    popular: false,
  }
];

export default function PricingPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-muted-foreground">
          Choose the plan that's right for your business. All plans are billed annually.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative hover-translate ${plan.popular ? 'border-primary shadow-lg' : ''}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="min-h-[60px]">{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={`${plan.name}-${feature.substring(0, 15)}`} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className={`w-full ${plan.popular ? '' : 'variant-outline'}`}>
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
        <p className="text-muted-foreground mb-6">
          Our enterprise plan can be customized to meet your specific business needs.
          Contact our sales team to discuss your requirements.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Sales</Link>
        </Button>
      </div>
    </div>
  );
}
