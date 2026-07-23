import { z } from "zod";

export const CategorySchema = z.object({
   id: z
      .number()
      .positive('id shouls be positive'),
    name: z
      .string()
      .min(3, 'name should have min legth of 3'),
    slug: z
      .string(),
    image: z
      .url(),
    creationAt: z.iso.datetime(),
    updatedAt: z.iso.datetime()
  }).strict();

export const ProductSchema = z.object({
  id: z
    .number()
    .positive('id should be positive'),
  title: z
    .string()
    .min(3, 'title should have min len of 3'),
  slug: z.string(),
  price: z
    .number()
    .nonnegative('price should be 0 or greater'),
  description: z.string(),
  category: CategorySchema,
  images: z.array(z.url()),
  creationAt: z.iso.datetime(),
  updatedAt: z.iso.datetime()
}).strict();

//for typescript usage
export type CategoryType = z.infer<typeof CategorySchema>;
export type ProductType = z.infer<typeof ProductSchema>;