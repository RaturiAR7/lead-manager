export interface LeadTypes {
  id: string;
  name: string;
  contact: string;
  status: "Qualified" | "Converted" | "Follow-Up" | "New";
  qualification: string;
  interest: string;
  source: string;
  assignedTo: string;
  updatedAt: string;
}
import type { ColumnDef } from "@tanstack/react-table";
export const columns: ColumnDef<LeadTypes>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "notes",
    header: "Notes",
  },
];
