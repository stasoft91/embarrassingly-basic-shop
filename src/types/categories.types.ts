export interface CategoriesImage {
  url: string;
  width: number;
  height: number;
}

export interface CategoriesItem {
  id: number;
  orderBy: number;
  hdThumbnailUrl: string;
  thumbnailUrl: string;
  imageUrl: string;
  originalImageUrl: string;
  originalImage: CategoriesImage;
  thumbnail: CategoriesImage;
  name: string;
  nameTranslated: { [key: string]: string };
  url: string;
  productCount: number;
  enabledProductCount: number;
  description: string;
  descriptionTranslated: { [key: string]: string };
  enabled: boolean;
}

export interface CategoriesResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  items: CategoriesItem[];
}
