import * as yup from "yup";

export const leadSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().optional(),
  altPhone: yup.string().optional(),
  email: yup.string().email("Invalid email").required("Email is required"),
  altEmail: yup.string().email("Invalid email").optional(),
  status: yup
    .string()
    .oneOf(["New", "Qualified", "Converted", "Follow-Up"], "Invalid status")
    .required("Status is required"),
  qualification: yup.string().optional(),
  interestField: yup.string().optional(),
  source: yup.string().optional(),
  assignedTo: yup.string().optional(),
  jobInterest: yup.string().optional(),
  state: yup.string().optional(),
  city: yup.string().optional(),
  passoutYear: yup.string().optional(),
  heardFrom: yup.string().optional(),
});

export type LeadFormData = yup.InferType<typeof leadSchema>;
