import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]{
          _id,
          name,
          price,
          "brandName": brandName->name,
          dateAdded,
          quantity,
          description,
          "tags": tags->name,
          features,
          slug,
          "productType": productType->name,
          dimensions,
          "categoryName": category->name,
          "image": image.asset
        }`;

export const category = groq`*[_type == "category"]{
  name,
    _id,
    slug
}`;

export const brandName = groq`*[_type == "brandName"]{
  name,
    _id,
    slug
}`;
export const productType = groq`*[_type == "productType"]{
  name,
    _id,
    slug
}`;
