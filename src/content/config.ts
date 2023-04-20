import { defineCollection, z } from "astro:content";

const placeSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    featuredImage: z.string(),
  }),
});

const eventSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    featuredImage: z.string(),
    date: z.date(),
    location: z.string(),
  }),
});

export const collections = {
  places: placeSchema,
  trips: placeSchema,
  "foods-and-drinks": placeSchema,
  events: eventSchema,
};
