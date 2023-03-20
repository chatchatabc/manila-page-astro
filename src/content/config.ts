import { defineCollection, z } from "astro:content";

const placeSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    featuredImage: z.string(),
  }),
});

export const collections = {
  places: placeSchema,
  trips: placeSchema,
  "foods-and-drinks": placeSchema,
};
