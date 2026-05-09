const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://diaperstops-api.fly.dev';

export interface Station {
  id: string;
  name: string;
  address: string;
  latitude?: number;
  longitude?: number;
  amenities?: any;
  hours?: string;
  created_by?: string;
  created_at: string;
  average_rating?: number;
  review_count?: number;
}

export interface Review {
  id: string;
  station_id: string;
  user_id: string;
  rating: number;
  comment?: string;
  cleanliness_rating?: number;
  created_at: string;
}

export interface CreateStationData {
  name: string;
  address: string;
  latitude?: number;
  longitude?: number;
  amenities?: any;
  hours?: string;
}

export interface CreateReviewData {
  rating: number;
  comment?: string;
  cleanliness_rating?: number;
}

class ApiClient {
  private baseUrl: string;
  private userId: string;

  constructor() {
    this.baseUrl = API_URL;
    this.userId = '00000000-0000-0000-0000-000000000001'; // TODO: Get from auth
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'x-user-id': this.userId,
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    return response.json();
  }

  // Stations
  async getStations(params?: { latitude?: number; longitude?: number; radius?: number }): Promise<Station[]> {
    const queryParams = new URLSearchParams();
    if (params?.latitude) queryParams.append('latitude', params.latitude.toString());
    if (params?.longitude) queryParams.append('longitude', params.longitude.toString());
    if (params?.radius) queryParams.append('radius', params.radius.toString());
    
    const query = queryParams.toString();
    return this.request(`/api/stations${query ? `?${query}` : ''}`);
  }

  async getStation(id: string): Promise<Station> {
    return this.request(`/api/stations/${id}`);
  }

  async createStation(data: CreateStationData): Promise<Station> {
    return this.request('/api/stations', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Reviews
  async addReview(stationId: string, data: CreateReviewData): Promise<Review> {
    return this.request(`/api/stations/${stationId}/reviews`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Favorites
  async toggleFavorite(stationId: string): Promise<{ favorited: boolean; message: string }> {
    return this.request(`/api/stations/${stationId}/favorite`, {
      method: 'POST',
    });
  }

  async getFavorites(): Promise<Station[]> {
    return this.request('/api/stations/user/favorites');
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export const api = new ApiClient();
