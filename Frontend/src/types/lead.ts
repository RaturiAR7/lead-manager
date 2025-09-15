export interface LeadTypes {
  id: string;
  name: string;
  phone: string;
  altPhone?: string;
  email: string;
  altEmail?: string;
  note?: string;
  status: "Qualified" | "Converted" | "Follow-Up" | "New";
  qualification?: string;
  interest?: string;
  source: string;
  assignedTo?: string;
  updatedAt?: string;
  jobInterest?: string;
  state: string;
  city?: string;
  passoutYear?: string;
  heardFrom?: string;
}
import type { ColumnDef } from "@tanstack/react-table";
export const columns: ColumnDef<LeadTypes>[] = [
  {
    accessorKey: "name",
    header: "Name",
    enableSorting: true,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: "Status",
    enableSorting: true,
  },
  {
    accessorKey: "email",
    header: "Email",
    enableSorting: true,
  },
  {
    accessorKey: "note",
    header: "Note",
    enableSorting: true,
  },
  {
    accessorKey: "source",
    header: "Source",
    enableSorting: true,
  },
  {
    accessorKey: "state",
    header: "State",
    enableSorting: true,
  },
];
