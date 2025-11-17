import type { Image } from "sanity";

export interface CustomImage extends Image {
  alt?: string;
  caption?: string;
}

export interface Author {
  name: string;
  image: CustomImage | null;
  bio: string;
  role: string;
}

export interface Category {
  title: string;
  slug: {
    current: string;
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  body: any[];
  mainImage: CustomImage | null;
  author: Author;
  publishedAt: string;
  readTime: number;
  categories: Category[] | null; // correct type
  featured: boolean;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: Image;
  };
}

export interface QuizQuestion {
  question: string;
  options: {
    text: string;
    correct: boolean;
    explanation?: string;
  }[];
}

export interface Quiz {
  title: string;
  description?: string;
  questions: QuizQuestion[];
}
