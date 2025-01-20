import { defineType, defineField } from "sanity";

export const productType = defineType({
  name: "productType",
  title: "Product Type",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "name",
      },
    }),
  ],
});
