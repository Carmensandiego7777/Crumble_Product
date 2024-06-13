export interface Product {
    isBestDeal: boolean;
    discountedPrice: number;
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    categoryId?: number;
    category?: null;
    solo: number;
    count: number;
  }
