import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    createdAt: z.date(),
    author: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
