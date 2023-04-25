import { defineCollection, z } from "astro:content";

const placeSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    featuredImage: z.string(),
    location: z.string(),
    categories: z.array(z.string()),
  }),
});

const tripSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    featuredImage: z.string(),
    images: z.array(z.object({ src: z.string(), name: z.string() })),
    location: z.string(),
    categories: z.array(z.string()),
  }),
});

const commonSchema = defineCollection({
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
  trips: tripSchema,
  "foods-and-drinks": placeSchema,
  events: eventSchema,
};
