"use client";

import React, { useState, useRef } from "react";
import { 
  Image as ImageIcon, 
  Upload, 
  Loader2, 
  RefreshCw, 
  Download,
  Phone,
  Share2
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ImageGenerationFormProps {
  onBack: () => void;
}

export function ImageGenerationForm({ onBack }: ImageGenerationFormProps) {
  // Form state
  const [form, setForm] = useState({
    companyName: "",
    productName: "",
    price: "",
    tagline: "",
    address: "",
    productType: "general",
    phoneNumber: "", // Added for WhatsApp integration
    image: null as File | null,
  });
  
  // UI state
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [apiRetries, setApiRetries] = useState(0);
  const [whatsappSent, setWhatsappSent] = useState(false);
  const [whatsappLoading, setWhatsappLoading] = useState(false);
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

  // Handle form submit with retries
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);
    setError("");
    setResultImage(null);
    setApiRetries(0);
    
    const MAX_RETRIES = 3;
    let currentRetry = 0;
    
    while (currentRetry < MAX_RETRIES) {
      try {
        console.log(`API call attempt ${currentRetry + 1} of ${MAX_RETRIES}`);
        setApiRetries(currentRetry);
        
        // Prepare form data
        const data = new FormData();
        data.append("company_name", form.companyName);
        data.append("product_name", form.productName);
        data.append("price", form.price);
        data.append("tagline", form.tagline);
        data.append("address", form.address);
        data.append("product_type", form.productType);
        if (form.phoneNumber) data.append("phone_number", form.phoneNumber);
        if (form.image) data.append("image", form.image);

        // POST to our API endpoint
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
        
        // Success, break out of retry loop
        break;
      } catch (err: any) {
        console.error(`Attempt ${currentRetry + 1} failed:`, err.message);
        currentRetry++;
        
        // If we've exhausted all retries, show error
        if (currentRetry === MAX_RETRIES) {
          setError(`Failed after ${MAX_RETRIES} attempts: ${err.message || "Unknown error"}. Please try again.`);
        } else {
          // Wait before next retry (increasing delay)
          await new Promise(resolve => setTimeout(resolve, 1000 * currentRetry));
        }
      }
    }
    
    setLoading(false);
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
      phoneNumber: "",
      image: null,
    });
    setImagePreview(null);
    setResultImage(null);
    setError("");
    setWhatsappSent(false);
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
  
  // Send image to WhatsApp
  const sendToWhatsApp = async () => {
    if (!resultImage || !form.phoneNumber) return;
    
    setWhatsappLoading(true);
    try {
      // Create WhatsApp message with image URL
      const data = new FormData();
      data.append("imageUrl", resultImage);
      data.append("phoneNumber", form.phoneNumber);
      data.append("message", `Here's your marketing image for ${form.productName}!`);
      
      const response = await fetch("/api/send-whatsapp", {
        method: "POST",
        body: data
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send WhatsApp message");
      }
      
      setWhatsappSent(true);
    } catch (err: any) {
      console.error('Error sending WhatsApp:', err);
      setError('Failed to send WhatsApp: ' + err.message);
    } finally {
      setWhatsappLoading(false);
    }
  };

  return (
    <>
      <div className="mb-6 flex items-center">
        <Button 
          variant="ghost" 
          onClick={onBack} 
          className="mr-4"
        >
          ← Back to Image Post
        </Button>
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
            {/* WhatsApp Phone Number */}
            <div>
              <Label htmlFor="phoneNumber">WhatsApp Number (for delivery)</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="e.g. +919876543210"
                disabled={loading}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Include country code. Optional - for sending the image via WhatsApp.
              </p>
            </div>
            {/* Error */}
            {error && (
              <div className="text-red-500 text-sm p-3 bg-red-50 rounded border border-red-100">
                {error}
              </div>
            )}
            {/* API Retry Info */}
            {apiRetries > 0 && loading && (
              <div className="text-amber-700 text-sm p-2 bg-amber-50 rounded border border-amber-100">
                Retrying... (Attempt {apiRetries + 1}/3)
              </div>
            )}
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
              Created with AI using OpenAI's DALL-E 2 model
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <img src={resultImage} alt="Generated" className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6" />
              <div className="flex flex-wrap gap-4 justify-center">
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
              
              {/* WhatsApp Integration */}
              {form.phoneNumber && (
                <div className="mt-6 w-full max-w-md">
                  <div className="border-t pt-4 mt-2">
                    <h3 className="font-medium mb-3">Send via WhatsApp</h3>
                    
                    {whatsappSent ? (
                      <div className="bg-green-50 text-green-700 p-3 rounded border border-green-100 flex items-center gap-2">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Image successfully sent to WhatsApp!
                      </div>
                    ) : (
                      <Button 
                        variant="default" 
                        className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700" 
                        onClick={sendToWhatsApp}
                        disabled={whatsappLoading}
                      >
                        {whatsappLoading ? (
                          <Loader2 className="animate-spin h-4 w-4 mr-2" />
                        ) : (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        )}
                        {whatsappLoading ? "Sending..." : "Send to WhatsApp"}
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
} 