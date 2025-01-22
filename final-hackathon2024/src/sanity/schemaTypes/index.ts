import { type SchemaTypeDefinition } from "sanity";
import { Category } from "./category";
import { product } from "./product";
import { productType } from "./productType";
import { brandName } from "./brandName";
import { Tags } from "./tags";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Category, product, productType, brandName, Tags],
};
