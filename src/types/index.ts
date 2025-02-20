import { ReactNode } from "react";

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface IconFilters {
  name: string;
  icon: ReactNode;
  category: string;
}

export interface ButtonProps {
  onCategorySelect: (category: string) => void;
}

export interface Links {
  name: string;
  path: string;
}

export interface ActivitiesProps {
  activities: {
    points: number;
    date: string;
  }[];
}

export interface PTCardProps {
  points: number;
}

export interface ProductProps {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  redeemProduct: (price: number) => void;
}

export interface Activities {
  description: String;
  points: number;
  date: string;
}

