import z from "zod";

export const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(5, "Phone must be valid"),
  altPhone: z.string().optional(),

  email: z.email("Invalid email"),
  altEmail: z.email("Invalid alternate email").optional(),

  note: z.string().optional(),

  status: z.enum(["Qualified", "Converted", "Follow-Up", "New"]).default("New"),

  qualification: z.string().optional(),
  interest: z.string().optional(),
  source: z.string().min(1, "Source is required"),
  assignedTo: z.string().optional(),
  jobInterest: z.string().optional(),

  state: z.string().min(1, "State is required"),
  city: z.string().optional(),
  passoutYear: z.string().optional(),
  heardFrom: z.string().optional(),
});
