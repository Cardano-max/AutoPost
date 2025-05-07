"use client";

import React, { useState, useRef } from "react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ChevronRight, 
  Image as ImageIcon, 
  Upload, 
  Loader2, 
  RefreshCw, 
  Download,
  ArrowRight
} from 'lucide-react';

// Import the ImageGenerationForm component
import { ImageGenerationForm } from '@/components/tools/ImageGenerationForm';

export default function ImagePostPage() {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/tools" className="hover:text-foreground">
            Tools
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Image Post</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <ImageIcon className="h-6 w-6 text-orange-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Image Post Generator</h1>
            <p className="text-muted-foreground">
              AI-driven marketing image generator with brand integration
            </p>
          </div>
        </div>

        {showForm ? (
          <ImageGenerationForm onBack={() => setShowForm(false)} />
        ) : (
          <>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Transform Your Product Images Into Marketing Materials</CardTitle>
                <CardDescription>
                  Generate professional marketing images with automated text placement and stunning visual enhancements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Create Professional Marketing Images</h3>
                    <p className="text-muted-foreground mb-6">
                      Our AI-powered Image Post Generator creates professional marketing materials
                      from your product photos in seconds.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-orange-700 text-sm font-medium">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Upload your product image</h4>
                          <p className="text-sm text-muted-foreground">
                            Start with a clear, high-quality image of your product.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-orange-700 text-sm font-medium">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Add your brand details</h4>
                          <p className="text-sm text-muted-foreground">
                            Enter your company name, product information, and pricing.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-orange-700 text-sm font-medium">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Generate your marketing image</h4>
                          <p className="text-sm text-muted-foreground">
                            Our AI automatically creates a professional marketing image with perfect text placement.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button 
                        onClick={() => setShowForm(true)} 
                        size="lg" 
                        className="w-full md:w-auto flex items-center gap-2"
                      >
                        Create Image
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-square rounded-lg bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-6">
                      <div className="relative">
                        <div className="w-full h-full absolute top-2 left-2 bg-black/5 rounded-lg"></div>
                        <div className="bg-white shadow-lg rounded-lg p-4 relative">
                          <div className="text-xs text-center font-medium text-orange-700 mb-2">COMPANY NAME</div>
                          <div className="w-32 h-32 mx-auto bg-gray-100 rounded-lg mb-2 flex items-center justify-center">
                            <ImageIcon className="h-8 w-8 text-gray-400" />
                          </div>
                          <div className="text-center font-medium mb-1">Product Name</div>
                          <div className="text-xs text-center text-muted-foreground mb-2">Your amazing tagline here</div>
                          <div className="text-xs text-right font-bold text-orange-600">₹499</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-100">
                  <h3 className="text-xl font-bold mb-4">Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col">
                      <h4 className="font-medium">Perfect Text Placement</h4>
                      <p className="text-sm text-muted-foreground">Automatically positions text elements for optimal design</p>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-medium">Product Type Optimization</h4>
                      <p className="text-sm text-muted-foreground">Special enhancements for food, beverages, and other products</p>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-medium">WhatsApp Integration</h4>
                      <p className="text-sm text-muted-foreground">Send your generated images directly to customers</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Start Creating Professional Marketing Images Today</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of businesses using AUTOPOST's Image Post Generator to create
                stunning marketing materials in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setShowForm(true)} size="lg">
                  Create Image Now
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
