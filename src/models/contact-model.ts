import { z } from "zod";

// Define the Contact type
export type Contact = {
  name: string;
  email: string;
  phone: string;
};

// Define the schema
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
});
