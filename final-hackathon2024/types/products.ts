export interface Product {
  _id: string;
  name: string;
  price: number;
  brandName: string;
  dateAdded: string;
  quantity: number;
  description: string;
  tags: string[];
  features: string[];
  slug: { current: string };
  productType: string;
  dimensions: {
    height?: string;
    width?: string;
    depth?: string;
  };
  categoryName: string;
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
}

export interface Category {
  _id: string;
  _type: "category";
  name: string;
  slug: { current: string };
}

export interface Brands {
  _id: string;
  _type: "brandName";
  name: string;
  slug: { current: string };
}

export interface ProductType {
  _id: string;
  _type: "productType";
  name: string;
  slug: { current: string };
}

// export interface Product {
//     _id: string;
//     name: string;
//     price: number;
//     quantity: number;
//     description: string;
//     tags: string[];
//     features: string[];
//     slug: { current: string };
//     dimensions: {
//       height?: string;
//       width?: string;
//       depth?: string;
//     };
//     category: Pick<Category, "name" | "_id">; // Category object with name and _id
//     image?: {
//       asset: {
//         _ref: string;
//         _type: "image";
//       };
//     };
//   }

//   export interface Category {
//     _id: string;
//     _type: "category";
//     name: string;
//     slug: { current: string };
//   }
