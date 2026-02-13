import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (r) => r.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      validation: (r) => r.required(),
    }),

    defineField({
      name: "url",
      title: "Live URL",
      type: "url",
    }),

    defineField({
      name: "brief",
      title: "Brief",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),

    defineField({
      name: "style",
      title: "Style",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),

    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),

    defineField({
      name: "reflection",
      title: "Reflection",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),

    defineField({
      name: "featured",
      title: "Featured (Homepage)",
      type: "boolean",
      initialValue: true,
    }),

    // ✅ NEW: manual ordering field
    defineField({
      name: "order",
      title: "Homepage Order",
      type: "number",
      description: "Lower numbers appear first (e.g. 1, 2, 3).",
      hidden: ({ document }) => !document?.featured, // remove this line if you want it always visible
    }),

    defineField({
      name: "collage",
      title: "Homepage Collage (3 images)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (r) => r.required().min(3).max(3),
    }),

    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (r) => r.required().min(1),
    }),
  ],
});