type Product = {
  path: string;
  id: number;
  name: string;
  category: string;
  type: string;
  price: number;
  brand: string;
  dateAdded: string;
  image: string;
  className?: string;
  description: string;
};
const products: Product[] = [
  {
    path: "dandy",
    id: 1,
    name: "The Dandy Chair",
    category: "Furniture",
    type: "Chair",
    price: 120,
    brand: "Brand A",
    dateAdded: "2023-12-01",
    image: "/Photo01.png",
    description:
      "The Dandy Chair is crafted with a combination of modern aesthetics and comfort, perfect for any living room or office space. It offers great style, durability, and cozy seating.",
  },
  {
    path: "rustic",
    id: 2,
    name: "Rustic Vase Set",
    category: "Decor",
    type: "Vase",
    price: 80,
    brand: "Brand B",
    dateAdded: "2023-12-02",
    image: "/Photo02.png",
    description:
      "This Rustic Vase Set adds a charming, earthy touch to your home. The handcrafted design and natural textures make it a beautiful statement piece for your living room or hallway.",
  },
  {
    path: "silky",
    id: 3,
    name: "The Silky Vase",
    category: "Decor",
    type: "Vase",
    price: 90,
    brand: "Brand C",
    dateAdded: "2023-12-03",
    image: "/Photo03.png",
    description:
      "The Silky Vase brings a touch of elegance and refinement to your decor. Its smooth surface and graceful design make it perfect for displaying flowers or simply enhancing your space.",
  },
  {
    path: "lucy",
    id: 4,
    name: "The Lucy Lamp",
    category: "Lighting",
    type: "Lamp",
    price: 150,
    brand: "Brand D",
    dateAdded: "2023-12-04",
    image: "/Photo04.png",
    description:
      "The Lucy Lamp combines modern design with ambient lighting to create a warm, inviting atmosphere. Its versatile style complements a wide range of home decor, from minimalist to traditional.",
  },
  {
    path: "coffee-table",
    id: 5,
    name: "Elegant Coffee Table",
    category: "Furniture",
    type: "Table",
    price: 200,
    brand: "Brand A",
    dateAdded: "2023-12-05",
    image: "/Photo05.png",
    description:
      "This Elegant Coffee Table blends modern sophistication with timeless style. Its sleek design and premium construction make it the perfect addition to any living room, offering both function and style.",
  },
  {
    path: "armchair",
    id: 6,
    name: "Modern Armchair",
    category: "Furniture",
    type: "Chair",
    price: 250,
    brand: "Brand B",
    dateAdded: "2023-12-06",
    image: "/Photo06.png",
    description:
      "The Modern Armchair features clean lines and superior comfort. It is designed for ultimate relaxation and is a perfect fit for contemporary spaces, adding elegance and a cozy atmosphere to your home.",
  },
  {
    path: "bookshelf",
    id: 7,
    name: "Classic Bookshelf",
    category: "Furniture",
    type: "Shelf",
    price: 300,
    brand: "Brand C",
    dateAdded: "2023-12-07",
    image: "/Photo07.png",
    description:
      "The Classic Bookshelf is a perfect blend of functionality and style. Its sturdy frame and spacious shelves provide ample storage, making it ideal for organizing books and decorative items in your home.",
  },
  {
    path: "wall-clock",
    id: 8,
    name: "Artistic Wall Clock",
    category: "Decor",
    type: "Clock",
    price: 75,
    brand: "Brand D",
    dateAdded: "2023-12-08",
    image: "/Photo08.png",
    description:
      "The Artistic Wall Clock features a unique, eye-catching design that adds personality to any room. Its bold numbers and minimalist style make it a stylish and functional timepiece for your home.",
  },
  {
    path: "floor-lamp",
    id: 9,
    name: "Stylish Floor Lamp",
    category: "Lighting",
    type: "Lamp",
    price: 180,
    brand: "Brand A",
    dateAdded: "2023-12-09",
    image: "/Photo09.png",
    description:
      "The Stylish Floor Lamp offers both beauty and functionality. Its sleek, modern design and adjustable light make it perfect for creating the ideal ambiance in your living room or reading nook.",
  },
  {
    path: "cozy-chair",
    id: 10,
    name: "Cozy Chair",
    category: "Furniture",
    type: "Chair",
    price: 140,
    brand: "Brand B",
    dateAdded: "2023-11-01",
    image: "/Photo01.png",
    description:
      "The Cozy Chair combines comfort and style, with soft cushions and a sturdy frame. Perfect for reading or lounging, it brings a warm and inviting feel to any living room or bedroom.",
  },
  {
    path: "elegant-vase",
    id: 11,
    name: "Elegant Vase Set",
    category: "Decor",
    type: "Vase",
    price: 85,
    brand: "Brand C",
    dateAdded: "2023-11-02",
    image: "/Photo02.png",
    description:
      "The Elegant Vase Set is a sophisticated addition to any decor. With its delicate design and beautiful finish, it enhances any space, making it perfect for displaying fresh flowers or decorative accents.",
  },
  {
    path: "glossy-vase",
    id: 12,
    name: "The Glossy Vase",
    category: "Decor",
    type: "Vase",
    price: 100,
    brand: "Brand D",
    dateAdded: "2023-11-03",
    image: "/Photo03.png",
    description:
      "The Glossy Vase features a sleek, shiny finish that adds a touch of luxury to any space. Perfect for holding fresh flowers or as a standalone decor piece, it enhances the beauty of your home.",
  },
  {
    path: "modern-lamp",
    id: 13,
    name: "The Modern Lamp",
    category: "Lighting",
    type: "Lamp",
    price: 160,
    brand: "Brand A",
    dateAdded: "2023-11-04",
    image: "/Photo04.png",
    description:
      "The Modern Lamp combines innovative design with practical lighting. Its clean lines and bright light make it an ideal addition to any contemporary living room, bedroom, or office space.",
  },
  {
    path: "coffee-table-modern",
    id: 14,
    name: "Modern Coffee Table",
    category: "Furniture",
    type: "Table",
    price: 220,
    brand: "Brand B",
    dateAdded: "2023-11-05",
    image: "/Photo05.png",
    description:
      "The Modern Coffee Table brings a sleek, stylish look to any living room. Crafted from premium materials, its clean design offers ample surface space while complementing your modern interior decor.",
  },
  {
    path: "luxury-armchair",
    id: 15,
    name: "Luxury Armchair",
    category: "Furniture",
    type: "Chair",
    price: 270,
    brand: "Brand C",
    dateAdded: "2023-11-06",
    image: "/Photo06.png",
    description:
      "The Luxury Armchair features premium upholstery and a refined design. Its comfort and sophistication make it a perfect addition to any living room or study, offering relaxation and style.",
  },
  {
    path: "urban-bookshelf",
    id: 16,
    name: "Urban Bookshelf",
    category: "Furniture",
    type: "Shelf",
    price: 320,
    brand: "Brand D",
    dateAdded: "2023-11-07",
    image: "/Photo07.png",
    description:
      "The Urban Bookshelf offers both style and practicality, providing ample storage space for books and decor. Its sleek, modern design makes it a standout piece in any urban-inspired home.",
  },
  {
    path: "vintage-clock",
    id: 17,
    name: "Vintage Wall Clock",
    category: "Decor",
    type: "Clock",
    price: 95,
    brand: "Brand A",
    dateAdded: "2023-11-08",
    image: "/Photo08.png",
    description:
      "The Vintage Wall Clock exudes classic charm with its retro design and timeless appeal. Perfect for adding a touch of nostalgia to any space, this clock is both functional and decorative.",
  },
  {
    path: "sleek-lamp",
    id: 18,
    name: "Sleek Floor Lamp",
    category: "Lighting",
    type: "Lamp",
    price: 190,
    brand: "Brand B",
    dateAdded: "2023-11-09",
    image: "/Photo09.png",
    description:
      "The Sleek Floor Lamp offers a minimalist design with clean lines and a slim profile. Its adjustable lighting and modern aesthetic make it a great fit for any contemporary living space.",
  },
];
export default products;
