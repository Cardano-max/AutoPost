"use client";

import React, { useState, useRef } from "react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Image as ImageIcon, Info, Upload, Loader2, RefreshCw, Download } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ImagePostPage() {
  const [form, setForm] = useState({
    companyName: "",
    productName: "",
    price: "",
    tagline: "",
    address: "",
    productType: "general",
    image: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resultImage, setResultImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm((f) => ({ ...f, image: file }));
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImagePreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  // Handle form field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Handle select change
  const handleSelectChange = (name: string, value: string) => {
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Validate required fields
  const validate = () => {
    if (!form.companyName || !form.productName || !form.price || !form.image) {
      setError("Please fill all required fields and upload an image.");
      return false;
    }
    setError("");
    return true;
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setError("");
    setResultImage(null);
    try {
      // Prepare form data
      const data = new FormData();
      data.append("company_name", form.companyName);
      data.append("product_name", form.productName);
      data.append("price", form.price);
      data.append("tagline", form.tagline);
      data.append("address", form.address);
      data.append("product_type", form.productType);
      if (form.image) data.append("image", form.image);

      // POST to our new API endpoint
      const res = await fetch("/api/image-post", { 
        method: "POST", 
        body: data 
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to generate image");
      }
      
      const json = await res.json();
      setResultImage(json.imageUrl);
    } catch (err: any) {
      setError(err.message || "Failed to generate image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setForm({
      companyName: "",
      productName: "",
      price: "",
      tagline: "",
      address: "",
      productType: "general",
      image: null,
    });
    setImagePreview(null);
    setResultImage(null);
    setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Handle image download
  const handleDownload = async () => {
    if (!resultImage) return;
    
    try {
      const response = await fetch(resultImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${form.productName.replace(/\s+/g, '-').toLowerCase()}-marketing-image.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error('Error downloading image:', err);
      setError('Failed to download image');
    }
  };

  return (
    <div className="container py-12">
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

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2 mb-8">
          <Info className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-amber-800 font-medium">
              Transform ordinary product photos into powerful marketing assets
            </p>
            <p className="text-sm text-amber-700">
              Our AI system automatically applies your brand elements and optimizes your images for maximum impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Boost Your Marketing with AI-Powered Images
            </h2>
            <p className="text-muted-foreground mb-6">
              Our Image Post Generator uses advanced AI to create professional, on-brand marketing images
              in seconds. Perfect for social media posts, banners, ads, and more.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Upload className="h-4 w-4 text-orange-700" />
                </div>
                <div>
                  <h3 className="font-medium">Upload your product images</h3>
                  <p className="text-sm text-muted-foreground">
                    Start with any product photo or image you'd like to enhance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="h-4 w-4 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Add your branding and text</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI will automatically integrate your logo, colors, and promotional text.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="h-4 w-4 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Choose from multiple templates</h3>
                  <p className="text-sm text-muted-foreground">
                    Select from various layouts and styles that match your marketing goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="h-4 w-4 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Download and share instantly</h3>
                  <p className="text-sm text-muted-foreground">
                    Get high-quality images ready for immediate use on any platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/auth/signup?feature=image-post">Start Creating Images</Link>
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
              <CardTitle>Image Post Examples</CardTitle>
              <CardDescription>See how our AI transforms ordinary product photos</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-200/20 to-amber-100/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 text-orange-300">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground font-medium">Example Images Would Appear Here</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Transform product photos into professional marketing assets with branded elements,
                    promotional text, and eye-catching designs.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 border-t">
                <div className="p-4 border-r text-center">
                  <p className="text-sm font-medium">Before</p>
                  <p className="text-xs text-muted-foreground">Plain product photo</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-medium">After</p>
                  <p className="text-xs text-muted-foreground">AI-enhanced marketing image</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-2">
                  <svg className="h-5 w-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Multiple Templates</CardTitle>
                <CardDescription>
                  Choose from a variety of layouts optimized for different platforms and purposes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-2">
                  <svg className="h-5 w-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Brand Integration</CardTitle>
                <CardDescription>
                  Automatically apply your logo, colors, and fonts to maintain brand consistency
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-2">
                  <svg className="h-5 w-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <CardTitle className="text-lg">AI Enhancement</CardTitle>
                <CardDescription>
                  Smart image optimization, background removal, and auto-adjustment for perfect results
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-lg text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to create eye-catching marketing images?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of businesses using AUTOPOST's Image Post Generator to create
            professional marketing visuals in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/auth/signup?feature=image-post">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <ImageIcon className="h-6 w-6 text-orange-700" />
              </div>
              <CardTitle className="text-2xl">Image Post Generator</CardTitle>
            </div>
            <p className="text-muted-foreground text-sm mt-2">
              Upload your product image and details to generate a professional marketing image with your brand.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload */}
              <div>
                <Label htmlFor="image" className="block mb-2 font-medium">Product Image <span className="text-red-500">*</span></Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    className="w-full"
                    disabled={loading}
                  />
                  {imagePreview && (
                    <img src={imagePreview} alt="Preview" className="w-16 h-16 object-cover rounded border" />
                  )}
                </div>
              </div>
              {/* Company Name */}
              <div>
                <Label htmlFor="companyName">Company Name <span className="text-red-500">*</span></Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Your Company"
                  required
                  disabled={loading}
                />
              </div>
              {/* Product Name */}
              <div>
                <Label htmlFor="productName">Product Name <span className="text-red-500">*</span></Label>
                <Input
                  id="productName"
                  name="productName"
                  value={form.productName}
                  onChange={handleChange}
                  placeholder="Product Name"
                  required
                  disabled={loading}
                />
              </div>
              {/* Price */}
              <div>
                <Label htmlFor="price">Price <span className="text-red-500">*</span></Label>
                <Input
                  id="price"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="e.g. ₹499"
                  required
                  disabled={loading}
                />
              </div>
              {/* Tagline */}
              <div>
                <Label htmlFor="tagline">Tagline</Label>
                <Input
                  id="tagline"
                  name="tagline"
                  value={form.tagline}
                  onChange={handleChange}
                  placeholder="e.g. Best in class!"
                  disabled={loading}
                />
              </div>
              {/* Address */}
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="e.g. 123 Main St, Mumbai"
                  disabled={loading}
                />
              </div>
              {/* Product Type */}
              <div>
                <Label htmlFor="productType">Product Type</Label>
                <Select 
                  disabled={loading}
                  value={form.productType} 
                  onValueChange={(value) => handleSelectChange("productType", value)}
                >
                  <SelectTrigger id="productType">
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="beverage">Beverage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Error */}
              {error && <div className="text-red-500 text-sm p-2 bg-red-50 rounded">{error}</div>}
              {/* Actions */}
              <div className="flex gap-3">
                <Button type="submit" className="w-full flex items-center justify-center" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : <Upload className="h-5 w-5 mr-2" />}
                  {loading ? "Generating..." : "Generate Image"}
                </Button>
                <Button type="button" variant="outline" className="w-12 p-0" onClick={handleReset} disabled={loading} title="Reset">
                  <RefreshCw className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Result */}
        {resultImage && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Generated Marketing Image</CardTitle>
              <CardDescription>
                Created with AI using OpenAI's Image-1 model
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <img src={resultImage} alt="Generated" className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6" />
                <div className="flex gap-4 justify-center">
                  <Button 
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={handleDownload}
                  >
                    <Download className="h-4 w-4" />
                    Download Image
                  </Button>
                  <Button 
                    variant="secondary" 
                    onClick={handleReset}
                    className="flex items-center gap-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Create Another
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
