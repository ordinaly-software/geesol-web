import { createClient, type QueryParams } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-02-19',
  useCdn: true,
})

export const SanityLive = {
  fetch: async <T = any>(
    query: string,
    params: QueryParams = {},
    options?: { next?: { tags?: string[]; revalidate?: number } }
  ): Promise<T> => {
    return client.fetch<T>(query, params, options)
  }
}

export const sanityFetch = SanityLive.fetch