"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronRight, Calendar, Upload, LoaderCircle, CheckCircle2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FestivalGeneratorPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [uploadedLogo, setUploadedLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [deliveryOptions, setDeliveryOptions] = useState({
    whatsapp: true,
    email: false
  });

  // List of Indian festivals
  const festivals = [
    { id: 'republic-day', name: 'Republic Day', date: 'January 26, 2025' },
    { id: 'holi', name: 'Holi', date: 'March 14, 2025' },
    { id: 'independence-day', name: 'Independence Day', date: 'August 15, 2025' },
    { id: 'diwali', name: 'Diwali', date: 'October 31, 2025' },
    { id: 'christmas', name: 'Christmas', date: 'December 25, 2025' },
  ];

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedLogo(file);
      const previewUrl = URL.createObjectURL(file);
      setLogoPreview(previewUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Get form data
      const formData = new FormData(e.currentTarget);
      
      // Validate required fields
      const companyName = formData.get('company_name');
      const festivalName = formData.get('festival_name');
      
      if (!companyName || !festivalName || !uploadedLogo) {
        throw new Error('Company name, festival selection, and logo are required');
      }

      // Add logo to form data
      formData.append('logo', uploadedLogo);

      // Call API to generate festival post
      const response = await fetch('/api/festival-post', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to generate festival post');
      }

      // Set the generated image
      setGeneratedImage(result.imageUrl);
    } catch (err: any) {
      console.error('Error generating festival post:', err);
      setError(err.message || 'An error occurred while generating your festival post');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = 'festival-greeting.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="container py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-2 text-sm text-muted-foreground">
          <Link href="/tools" className="hover:text-foreground">
            Tools
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/tools/festival-post" className="hover:text-foreground">
            Festival Post
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Generator</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Calendar className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Festival Post Generator</h1>
            <p className="text-muted-foreground">
              Create professional festival greetings with your brand identity
            </p>
          </div>
        </div>

        {error && (
          <div className="p-4 mb-6 bg-red-50 border border-red-200 rounded-lg text-red-800">
            <p className="font-medium">Error:</p>
            <p>{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {!generatedImage ? (
            <div>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-4">Company Information</h2>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="company_name">Company Name *</Label>
                            <Input 
                              id="company_name" 
                              name="company_name" 
                              placeholder="Techno-Mech Engineers" 
                              required 
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="logo">Company Logo *</Label>
                            <div className="mt-1">
                              <div className="flex items-center gap-3">
                                <Label 
                                  htmlFor="logo-upload" 
                                  className="cursor-pointer flex items-center gap-2 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md"
                                >
                                  <Upload className="h-4 w-4" />
                                  <span>Upload Logo</span>
                                </Label>
                                <Input 
                                  id="logo-upload" 
                                  type="file" 
                                  onChange={handleLogoUpload} 
                                  accept="image/*" 
                                  className="hidden" 
                                />
                                {logoPreview && (
                                  <div className="w-12 h-12 relative overflow-hidden rounded border">
                                    <Image 
                                      src={logoPreview} 
                                      alt="Logo preview" 
                                      fill
                                      className="object-contain" 
                                    />
                                  </div>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">
                                Upload your company logo (PNG or JPG, max 5MB)
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="contact_number">Contact Number</Label>
                              <Input 
                                id="contact_number" 
                                name="contact_number" 
                                placeholder="9426847749" 
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input 
                                id="email" 
                                name="email" 
                                type="email" 
                                placeholder="company@example.com" 
                              />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="website">Website</Label>
                            <Input 
                              id="website" 
                              name="website" 
                              placeholder="www.example.com" 
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="address">Address</Label>
                            <Input 
                              id="address" 
                              name="address" 
                              placeholder="123 Main St, City, State, PIN" 
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="quote">Company Quote or Tagline</Label>
                            <Input 
                              id="quote" 
                              name="quote" 
                              placeholder="Engineering Innovation, Delivering Trust" 
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-6">
                        <h2 className="text-xl font-semibold mb-4">Festival Selection</h2>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="festival_name">Select Festival *</Label>
                            <Select name="festival_name" required defaultValue="">
                              <SelectTrigger>
                                <SelectValue placeholder="Select a festival" />
                              </SelectTrigger>
                              <SelectContent>
                                {festivals.map(festival => (
                                  <SelectItem key={festival.id} value={festival.name}>
                                    {festival.name} ({festival.date})
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-6">
                        <h2 className="text-xl font-semibold mb-4">Delivery Options</h2>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                              <input 
                                type="checkbox" 
                                id="whatsapp" 
                                name="delivery_whatsapp" 
                                className="rounded-sm" 
                                checked={deliveryOptions.whatsapp}
                                onChange={() => setDeliveryOptions({...deliveryOptions, whatsapp: !deliveryOptions.whatsapp})}
                              />
                              <label htmlFor="whatsapp" className="cursor-pointer">WhatsApp</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input 
                                type="checkbox" 
                                id="email" 
                                name="delivery_email" 
                                className="rounded-sm" 
                                checked={deliveryOptions.email}
                                onChange={() => setDeliveryOptions({...deliveryOptions, email: !deliveryOptions.email})}
                              />
                              <label htmlFor="email" className="cursor-pointer">Email</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <Button 
                        type="submit" 
                        disabled={isLoading} 
                        className="w-full md:w-auto"
                      >
                        {isLoading ? (
                          <>
                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          'Generate Festival Post'
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Generated Festival Post</h2>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-600 h-5 w-5" />
                      <span className="text-green-600 font-medium">Generated Successfully</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-md mb-4 flex items-start gap-2">
                    <Info className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-blue-800">
                      Your festival post has been generated. You can now download it or schedule it for delivery.
                    </p>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    <div className="border rounded-md p-1 shadow-sm max-w-md">
                      <img 
                        src={generatedImage} 
                        alt="Generated festival greeting" 
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Button onClick={handleDownload} className="w-full">
                      Download Image
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setGeneratedImage(null)}
                    >
                      Generate Another
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div>
            <Tabs defaultValue="preview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
              </TabsList>
              
              <TabsContent value="preview" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="aspect-square bg-muted rounded-md flex items-center justify-center overflow-hidden relative">
                      {generatedImage ? (
                        <img 
                          src={generatedImage} 
                          alt="Generated festival greeting" 
                          className="w-full h-auto"
                        />
                      ) : (
                        <div className="text-center p-8">
                          <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                          <h3 className="text-lg font-medium mb-2">Preview Your Festival Post</h3>
                          <p className="text-sm text-muted-foreground">
                            Fill out the form and generate your festival post to see it here.
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {generatedImage && (
                      <div className="mt-4">
                        <h3 className="font-medium mb-2">Image Details</h3>
                        <div className="text-sm space-y-1">
                          <p><span className="font-medium">Resolution:</span> 1024 x 1024px</p>
                          <p><span className="font-medium">Format:</span> PNG</p>
                          <p><span className="font-medium">Model:</span> GPT-Image-1</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="templates" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-medium mb-4">Festival Templates</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border rounded-md p-2 cursor-pointer hover:border-primary">
                        <img 
                          src="/republic-day-template.jpg" 
                          alt="Republic Day template" 
                          className="w-full h-auto rounded-md"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/200x200?text=Republic+Day";
                          }}
                        />
                        <p className="text-xs text-center mt-2">Republic Day</p>
                      </div>
                      <div className="border rounded-md p-2 cursor-pointer hover:border-primary">
                        <img 
                          src="/diwali-template.jpg" 
                          alt="Diwali template" 
                          className="w-full h-auto rounded-md"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/200x200?text=Diwali";
                          }}
                        />
                        <p className="text-xs text-center mt-2">Diwali</p>
                      </div>
                      <div className="border rounded-md p-2 cursor-pointer hover:border-primary">
                        <img 
                          src="/independence-day-template.jpg" 
                          alt="Independence Day template" 
                          className="w-full h-auto rounded-md"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/200x200?text=Independence+Day";
                          }}
                        />
                        <p className="text-xs text-center mt-2">Independence Day</p>
                      </div>
                      <div className="border rounded-md p-2 cursor-pointer hover:border-primary">
                        <img 
                          src="/holi-template.jpg" 
                          alt="Holi template" 
                          className="w-full h-auto rounded-md"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/200x200?text=Holi";
                          }}
                        />
                        <p className="text-xs text-center mt-2">Holi</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="schedule" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-medium mb-4">Scheduling Options</h3>
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md mb-4">
                      <p className="text-sm text-yellow-800">
                        Scheduling is available for Pro and Business users. Upgrade your plan to access this feature.
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      When you schedule a festival post, it will be automatically sent to your customers at 12:00 AM on the festival day.
                    </p>
                    <Button disabled variant="outline" className="w-full">
                      Upgrade to Schedule
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Enter your company details</h3>
                    <p className="text-sm text-muted-foreground">
                      Provide your company name, logo, contact information, and other details.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Select a festival</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose from a wide range of Indian festivals for your greeting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Generate and customize</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI creates a professional festival greeting with your brand elements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-medium">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Download or schedule delivery</h3>
                    <p className="text-sm text-muted-foreground">
                      Save your image or schedule it to be sent automatically at the perfect time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalGeneratorPage; 