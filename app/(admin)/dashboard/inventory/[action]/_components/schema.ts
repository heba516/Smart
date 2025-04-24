import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3, { message: "Must be at least 3 characters." }),
  description: z.string().optional(),
  highlights: z.string().optional(),
  image_url: z.string().min(1,{message:"invalid image"}),
  price: z.coerce.number().min(1, { message: "At least 1 EGP" }),
  discount: z.coerce.number().optional(),
  discountType: z.string().optional(),
  barcode: z.string().min(1, { message: "Must be at least 1 characters." }),
  stock: z.coerce.number().min(0, { message: "Must be at least 0 item." }),
  brand: z.string().min(1,{message: "Please select a brand"}),
  categoryId: z.string().min(1,{message: "Please select a category"}),
  subCategoryId: z.string().min(1,{message: "Please select a subcategory"}),
});
