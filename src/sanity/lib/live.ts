// Querying with "sanityFetch" will keep content automatically updated
// Note: next-sanity v11.x doesn't have defineLive API
// Using a manual wrapper implementation instead
import { client } from './client'

// Manual implementation for next-sanity v11.x compatibility
export const SanityLive = {
  fetch: async (query: string, params?: Record<string, unknown>, options?: Record<string, unknown>) => {
    return client.fetch(query, params, options);
  }
};

// Alias for compatibility
export const sanityFetch = SanityLive.fetch;
