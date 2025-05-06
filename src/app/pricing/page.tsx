import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

// Pricing plans data
const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses just getting started with marketing automation.',
    price: '₹999',
    period: 'per month',
    features: [
      'Up to 50 Festival Posts per month',
      'Up to 100 Image Posts per month',
      'Up to 50 Insta Posts per month',
      'Basic WhatsApp integration',
      'Email support',
    ],
    cta: 'Start Free Trial',
    href: '/auth/signup?plan=starter',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses with regular marketing needs.',
    price: '₹2,499',
    period: 'per month',
    features: [
      'Up to 200 Festival Posts per month',
      'Unlimited Image Posts',
      'Up to 200 Insta Posts per month',
      'Full WhatsApp Business API integration',
      'All basic features',
      'Email & chat support',
      'Team collaboration tools'
    ],
    cta: 'Start Free Trial',
    href: '/auth/signup?plan=professional',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with advanced marketing automation needs.',
    price: 'Custom',
    period: 'contact for pricing',
    features: [
      'Unlimited Festival Posts',
      'Unlimited Image Posts',
      'Unlimited Insta Posts',
      'Custom WhatsApp & Email integration',
      'All professional features',
      'Dedicated account manager',
      'Priority support',
      'Custom branding',
      'API access'
    ],
    cta: 'Contact Sales',
    href: '/contact',
    popular: false,
  }
];

export default function PricingPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-muted-foreground">
          Choose the plan that's right for your business. All plans include a 14-day free trial.
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
