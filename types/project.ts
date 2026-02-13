export type Project = {
  title: string;
  slug: string;
  description: string;
  url?: string;
  brief?: string;
  style?: string;
  features?: string[];
  reflection?: string;
  featured?: boolean;
  order?: number | null;
  collage?: any[];
  gallery?: any[];
};