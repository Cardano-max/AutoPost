// API client for AUTOPOST services
// This module provides a client interface for connecting to backend API services

/**
 * Base configuration for API requests
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

/**
 * Generic fetch wrapper with error handling
 */
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (!response.ok) {
    // Get error message from response if available
    let errorMessage: string;
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorData.error || `API error: ${response.status}`;
    } catch (e) {
      errorMessage = `API error: ${response.status}`;
    }

    throw new Error(errorMessage);
  }

  // Handle empty responses
  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

/**
 * Authentication related API methods
 */
export const authApi = {
  /**
   * Login user with email and password
   */
  login: async (email: string, password: string) => {
    return apiFetch<{ token: string; user: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  /**
   * Register a new user
   */
  signup: async (userData: {
    name: string;
    email: string;
    password: string;
    companyName: string;
    businessType: string;
  }) => {
    return apiFetch<{ token: string; user: any }>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },
};

/**
 * Festival Post related API methods
 */
export const festivalPostApi = {
  /**
   * Get list of upcoming festivals
   */
  getFestivals: async (params?: {
    month?: number;
    year?: number;
    region?: string;
    type?: string;
  }) => {
    const queryParams = params
      ? `?${new URLSearchParams(params as Record<string, string>).toString()}`
      : '';
    return apiFetch<any[]>(`/festivals${queryParams}`);
  },

  /**
   * Generate a festival post
   */
  generatePost: async (data: {
    festivalId: string;
    companyInfo: {
      name: string;
      logo?: string;
      colors?: string[];
    };
    customText?: string;
    templateId?: string;
    outputFormat?: 'jpg' | 'png';
  }) => {
    return apiFetch<{ imageUrl: string; previewUrl: string }>('/festivals/generate', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Schedule a festival post for delivery
   */
  schedulePost: async (data: {
    festivalId: string;
    imageUrl: string;
    deliveryChannels: ('whatsapp' | 'email')[];
    scheduledTime?: string; // ISO date string
    recipients?: string[]; // Phone numbers or emails
  }) => {
    return apiFetch<{ scheduledId: string }>('/festivals/schedule', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

/**
 * Image Post related API methods
 */
export const imagePostApi = {
  /**
   * Generate a marketing image post
   */
  generateImage: async (data: {
    image: string; // Base64 encoded image or URL
    brandInfo: {
      name: string;
      logo?: string;
      colors?: string[];
    };
    text?: string;
    templateId?: string;
  }) => {
    return apiFetch<{ imageUrl: string }>('/images/generate', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

/**
 * Instagram Post related API methods
 */
export const instaPostApi = {
  /**
   * Generate an Instagram-optimized post
   */
  generatePost: async (data: {
    image: string; // Base64 encoded image or URL
    brandInfo: {
      name: string;
      logo?: string;
      colors?: string[];
    };
    caption?: string;
    hashtags?: string[];
    filter?: string;
    format?: 'square' | 'portrait' | 'landscape' | 'story' | 'carousel';
  }) => {
    return apiFetch<{ imageUrl: string; suggestedHashtags?: string[] }>('/instagram/generate', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

/**
 * Video Generator related API methods
 */
export const videoApi = {
  /**
   * Generate a video from images
   */
  generateVideo: async (data: {
    images: string[]; // Array of Base64 encoded images or URLs
    brandInfo: {
      name: string;
      logo?: string;
    };
    transition?: string;
    duration?: number; // In seconds
    music?: string; // Music track ID or URL
    text?: string[];
    outputFormat?: 'mp4' | 'gif' | 'webm';
  }) => {
    return apiFetch<{ videoUrl: string; previewUrl: string }>('/videos/generate', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

/**
 * User profile and settings API methods
 */
export const userApi = {
  /**
   * Get current user profile
   */
  getProfile: async () => {
    return apiFetch<any>('/user/profile');
  },

  /**
   * Update user profile
   */
  updateProfile: async (data: any) => {
    return apiFetch<any>('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  /**
   * Update company information
   */
  updateCompany: async (data: {
    name: string;
    logo?: string;
    colors?: string[];
    address?: string;
    phone?: string;
    website?: string;
  }) => {
    return apiFetch<any>('/user/company', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
};
