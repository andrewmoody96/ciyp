import type { Product } from "~/lib/store-types";

// Phase 1: hardcoded seed data. Phase 2 swaps these getters to Prisma queries
// without changing the shape returned to loaders.

const SAMPLE_IMAGE = (seed: string) =>
  `https://picsum.photos/seed/${seed}/800/800`;

const PRODUCTS: Product[] = [
  {
    id: "prod_tee_logo",
    slug: "ciyp-logo-tee",
    title: "CIYP Logo Tee",
    description:
      "Classic Bodoni-set logo on a soft midweight cotton tee. Roomy unisex fit.",
    category: "APPAREL",
    kind: "PHYSICAL",
    basePriceCents: 2800,
    published: true,
    featured: true,
    sortOrder: 10,
    seoTitle: "CIYP Logo Tee — Chocolate In Your Pocket",
    seoDescription:
      "The official Chocolate In Your Pocket logo t-shirt. Soft cotton, unisex fit.",
    variants: [
      {
        id: "var_tee_s",
        productId: "prod_tee_logo",
        sku: "CIYP-TEE-BLK-S",
        name: "Black / Small",
        optionSize: "S",
        optionColor: "Black",
        priceCents: null,
        inventoryQty: 8,
      },
      {
        id: "var_tee_m",
        productId: "prod_tee_logo",
        sku: "CIYP-TEE-BLK-M",
        name: "Black / Medium",
        optionSize: "M",
        optionColor: "Black",
        priceCents: null,
        inventoryQty: 12,
      },
      {
        id: "var_tee_l",
        productId: "prod_tee_logo",
        sku: "CIYP-TEE-BLK-L",
        name: "Black / Large",
        optionSize: "L",
        optionColor: "Black",
        priceCents: null,
        inventoryQty: 10,
      },
      {
        id: "var_tee_xl",
        productId: "prod_tee_logo",
        sku: "CIYP-TEE-BLK-XL",
        name: "Black / X-Large",
        optionSize: "XL",
        optionColor: "Black",
        priceCents: null,
        inventoryQty: 5,
      },
    ],
    images: [
      {
        id: "img_tee_1",
        productId: "prod_tee_logo",
        variantId: null,
        s3Key: SAMPLE_IMAGE("ciyp-tee-front"),
        thumbS3Key: null,
        alt: "CIYP Logo Tee front",
        sortOrder: 0,
      },
      {
        id: "img_tee_2",
        productId: "prod_tee_logo",
        variantId: null,
        s3Key: SAMPLE_IMAGE("ciyp-tee-back"),
        thumbS3Key: null,
        alt: "CIYP Logo Tee back",
        sortOrder: 1,
      },
    ],
  },
  {
    id: "prod_vinyl_debut",
    slug: "debut-vinyl",
    title: "Debut LP (12-inch Vinyl)",
    description:
      "The debut full-length, pressed on 180g black vinyl. Includes digital download card.",
    category: "MUSIC",
    kind: "PHYSICAL",
    basePriceCents: 3000,
    published: true,
    featured: true,
    sortOrder: 20,
    seoTitle: "Debut LP on Vinyl — CIYP",
    seoDescription:
      "180g black vinyl pressing of the debut album from Chocolate In Your Pocket.",
    variants: [
      {
        id: "var_vinyl_black",
        productId: "prod_vinyl_debut",
        sku: "CIYP-LP-BLK",
        name: "Black 180g",
        optionSize: null,
        optionColor: "Black",
        priceCents: null,
        inventoryQty: 25,
      },
    ],
    images: [
      {
        id: "img_vinyl_1",
        productId: "prod_vinyl_debut",
        variantId: null,
        s3Key: SAMPLE_IMAGE("ciyp-vinyl"),
        thumbS3Key: null,
        alt: "Debut LP vinyl jacket",
        sortOrder: 0,
      },
    ],
  },
  {
    id: "prod_sticker_pack",
    slug: "sticker-pack",
    title: "Sticker Pack (3-piece)",
    description:
      "Three weatherproof vinyl stickers. Slap 'em on your laptop, guitar case, or band van.",
    category: "ACCESSORY",
    kind: "PHYSICAL",
    basePriceCents: 600,
    published: true,
    featured: false,
    sortOrder: 30,
    seoTitle: "CIYP Sticker Pack",
    seoDescription:
      "Three-piece weatherproof vinyl sticker pack from Chocolate In Your Pocket.",
    variants: [
      {
        id: "var_stickers_default",
        productId: "prod_sticker_pack",
        sku: "CIYP-STK-3",
        name: "3-Pack",
        optionSize: null,
        optionColor: null,
        priceCents: null,
        inventoryQty: 100,
      },
    ],
    images: [
      {
        id: "img_stickers_1",
        productId: "prod_sticker_pack",
        variantId: null,
        s3Key: SAMPLE_IMAGE("ciyp-stickers"),
        thumbS3Key: null,
        alt: "CIYP sticker pack",
        sortOrder: 0,
      },
    ],
  },
  {
    id: "prod_poster_tour",
    slug: "tour-poster",
    title: "Tour Poster (18 x 24)",
    description:
      "Limited-run screen-printed tour poster. Numbered edition of 100.",
    category: "ACCESSORY",
    kind: "PHYSICAL",
    basePriceCents: 2000,
    published: true,
    featured: false,
    sortOrder: 40,
    seoTitle: "Limited Tour Poster — CIYP",
    seoDescription:
      "Screen-printed limited-edition tour poster. 18 x 24, numbered edition of 100.",
    variants: [
      {
        id: "var_poster_default",
        productId: "prod_poster_tour",
        sku: "CIYP-PSTR-18",
        name: "18 x 24",
        optionSize: '18" x 24"',
        optionColor: null,
        priceCents: null,
        inventoryQty: 47,
      },
    ],
    images: [
      {
        id: "img_poster_1",
        productId: "prod_poster_tour",
        variantId: null,
        s3Key: SAMPLE_IMAGE("ciyp-poster"),
        thumbS3Key: null,
        alt: "CIYP tour poster",
        sortOrder: 0,
      },
    ],
  },
  {
    id: "prod_digital_ep",
    slug: "early-demos-ep",
    title: "Early Demos (Digital EP)",
    description:
      "Five unreleased early demos. Delivered as high-quality WAV and MP3 downloads after purchase.",
    category: "DIGITAL",
    kind: "DIGITAL",
    basePriceCents: 700,
    published: true,
    featured: false,
    sortOrder: 50,
    seoTitle: "Early Demos EP (Digital) — CIYP",
    seoDescription:
      "Five unreleased early demos from Chocolate In Your Pocket. Digital download (WAV + MP3).",
    variants: [
      {
        id: "var_digital_ep",
        productId: "prod_digital_ep",
        sku: "CIYP-EP-DIG",
        name: "Digital Download (WAV + MP3)",
        optionSize: null,
        optionColor: null,
        priceCents: null,
        inventoryQty: -1,
      },
    ],
    images: [
      {
        id: "img_digital_1",
        productId: "prod_digital_ep",
        variantId: null,
        s3Key: SAMPLE_IMAGE("ciyp-demos"),
        thumbS3Key: null,
        alt: "Early Demos EP cover",
        sortOrder: 0,
      },
    ],
  },
];

export async function getPublishedProducts(): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.published).sort(
    (a, b) => a.sortOrder - b.sortOrder
  );
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return PRODUCTS.find((p) => p.slug === slug && p.published) ?? null;
}

export async function getProductsByVariantIds(
  variantIds: string[]
): Promise<Product[]> {
  if (variantIds.length === 0) return [];
  const ids = new Set(variantIds);
  return PRODUCTS.filter(
    (p) => p.published && p.variants.some((v) => ids.has(v.id))
  );
}
