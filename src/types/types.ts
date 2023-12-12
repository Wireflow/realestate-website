import z from "zod";

export const InquirySchema = z.object({
  name: z.string({ required_error: "Your name is required to proceed" }).min(1),
  phone: z
    .number({
      required_error: "Required! This is how we'll get in contact with you!",
      invalid_type_error: "Invalid phone number, please try again!",
    })
    .min(1),

  preference: z.enum([
    "Multi-family",
    "Townhomes",
    "Houses",
    "Condos/Co-ops",
    "Lots/Land",
    "Apartments",
    "Commercial",
  ]),
  location: z
    .string({
      required_error:
        "Required! Location preference is very important when deciding on a property",
    })
    .min(1),
  budget: z
    .number({
      required_error: "Required! Your budget plays a huge role",
      invalid_type_error: "Invalid budget, please try again!",
    })
    .min(1),
});

export const preferences = [
  "Multi-family",
  "Townhomes",
  "Houses",
  "Condos/Co-ops",
  "Lots/Land",
  "Apartments",
  "Commercial",
];

export type Inquiry = z.infer<typeof InquirySchema>;
