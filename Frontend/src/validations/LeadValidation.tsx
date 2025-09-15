import * as yup from "yup";

export const leadSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .min(10, "Invalid phone number")
    .required("Phone is required"),
  altPhone: yup.string().optional(),
  email: yup.string().email("Invalid email").required("Email is required"),
  altEmail: yup.string().email("Invalid email").optional(),
  note: yup.string().optional(),
  status: yup
    .string()
    .oneOf(["New", "Qualified", "Converted", "Follow-Up"], "Invalid status")
    .required("Status is required"),
  qualification: yup.string().optional(),
  interest: yup.string().optional(),
  source: yup.string().required("Source is required"),
  assignedTo: yup.string().optional(),
  updatedAt: yup.string().optional(),
  jobInterest: yup.string().optional(),
  state: yup.string().required("State is required"),
  city: yup.string().optional(),
  passoutYear: yup.string().optional(),
  heardFrom: yup.string().optional(),
});

export type LeadFormData = yup.InferType<typeof leadSchema>;
