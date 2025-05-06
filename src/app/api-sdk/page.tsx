import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, DownloadIcon, FileJson, FileText, Lock } from 'lucide-react';

export default function ApiSdkPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">API & SDK</h1>
          <p className="text-lg text-muted-foreground">
            Integrate AUTOPOST's powerful marketing automation tools directly into your applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <FileJson className="h-5 w-5 text-primary" />
                <CardTitle>RESTful API</CardTitle>
              </div>
              <CardDescription>
                Our comprehensive REST API allows you to access all AUTOPOST features programmatically.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-medium">GET</span>
                  <span>/api/v1/festivals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-xs font-medium">POST</span>
                  <span>/api/v1/posts/festival</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-yellow-100 text-yellow-700 px-2 py-0.5 text-xs font-medium">PUT</span>
                  <span>/api/v1/posts/:id</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-red-100 text-red-700 px-2 py-0.5 text-xs font-medium">DELETE</span>
                  <span>/api/v1/posts/:id</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/api-docs">
                  <FileText className="mr-2 h-4 w-4" />
                  API Documentation
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-5 w-5 text-primary" />
                <CardTitle>SDK Integrations</CardTitle>
              </div>
              <CardDescription>
                Our SDK makes it easy to integrate AUTOPOST into your applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-muted rounded-md font-mono text-sm">
                  # Using npm
                  <br />
                  npm install autopost-sdk
                  <br />
                  <br />
                  # Using yarn
                  <br />
                  yarn add autopost-sdk
                </div>
                <div className="text-sm text-muted-foreground">
                  Available for JavaScript, PHP, Python, and Java
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/sdk-docs">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download SDK
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              <CardTitle>Authentication</CardTitle>
            </div>
            <CardDescription>
              All API requests require authentication via API keys or OAuth 2.0
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-muted rounded-md font-mono text-sm overflow-auto">
              <pre>{`// Example API request with API key
fetch("https://api.autopost.com/v1/festivals", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));`}</pre>
            </div>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground">
              You can find your API keys in your AUTOPOST dashboard under Developer Settings.
            </div>
          </CardFooter>
        </Card>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need help with integration?</h2>
          <p className="text-muted-foreground mb-6">
            Our developer team is ready to help you integrate AUTOPOST into your applications.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Developer Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
