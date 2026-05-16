export type ProductCategory = "APPAREL" | "MUSIC" | "ACCESSORY" | "DIGITAL";
export type ProductKind = "PHYSICAL" | "DIGITAL";

export type ProductImage = {
  id: string;
  productId: string;
  variantId: string | null;
  s3Key: string;
  thumbS3Key: string | null;
  alt: string;
  sortOrder: number;
};

export type ProductVariant = {
  id: string;
  productId: string;
  sku: string | null;
  name: string;
  optionSize: string | null;
  optionColor: string | null;
  priceCents: number | null;
  inventoryQty: number;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProductCategory;
  kind: ProductKind;
  basePriceCents: number;
  published: boolean;
  featured: boolean;
  sortOrder: number;
  seoTitle: string | null;
  seoDescription: string | null;
  variants: ProductVariant[];
  images: ProductImage[];
};

export type CartItem = {
  variantId: string;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  updatedAt: string;
};
