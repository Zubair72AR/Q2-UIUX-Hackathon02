import { defineType, defineField } from "sanity";

export const Tags = defineType({
  name: "tags",
  title: "Tags",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
  ],
});
