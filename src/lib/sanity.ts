import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'w2eyivpw',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

export interface GalleryItem {
  _id: string;
  title: string;
  category: string;
  imageUrl: string | null;
  description?: string;
  price?: number;
}

export interface PricingItem {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
}

// Fetch gallery items from Sanity
export const fetchGalleryItems = async (): Promise<GalleryItem[]> => {
  try {
    const query = `*[_type == "gallery"] | order(_createdAt desc) {
      _id,
      title,
      category,
      "imageUrl": image.asset->url,
      description,
      price
    }`;
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return [];
  }
};

// Fetch pricing items from Sanity
export const fetchPricingItems = async (): Promise<PricingItem[]> => {
  try {
    const query = `*[_type == "pricing"] | order(price asc) {
      _id,
      title,
      description,
      category,
      price
    }`;
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error('Error fetching pricing items:', error);
    return [];
  }
};
