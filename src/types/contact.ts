import z from "zod";

export const ContactSchema = z.object({
  name: z.string({ required_error: "Required" }),
  email: z.string({ required_error: "Required" }).email("Invalid Email"),
  message: z.string({ required_error: "Required" }),
});

export type Contact = z.infer<typeof ContactSchema>;
