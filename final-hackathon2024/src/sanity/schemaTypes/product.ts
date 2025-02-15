import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
    defineField({
      name: "productType",
      title: "Product Type",
      type: "reference",
      to: [
        {
          type: "productType",
        },
      ],
    }),
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "reference",
      to: [
        {
          type: "brandName",
        },
      ],
    }),
    defineField({
      name: "name",
      title: "Title",
      validation: (rule) => rule.required(),
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      validation: (rule) => rule.required(),
      type: "slug",
    }),
    defineField({
      name: "image",
      type: "image",
      validation: (rule) => rule.required(),
      title: "Product Image",
    }),
    defineField({
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
      title: "Price",
    }),

    defineField({
      name: "dateAdded",
      type: "datetime",
      title: "Date Added",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "quantity",
      title: "Quantity",
      type: "number",
      validation: (rule) => rule.min(0),
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "reference",
      to: [
        {
          type: "tags",
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Detailed description of the product",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of key features of the product",
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions",
      type: "object",
      fields: [
        { name: "height", title: "Height", type: "string" },
        { name: "width", title: "Width", type: "string" },
        { name: "depth", title: "Depth", type: "string" },
      ],
      description: "Dimensions of the product",
    }),
  ],
});
