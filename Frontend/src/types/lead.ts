export interface Lead {
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
export const columns: ColumnDef<Lead>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "contact",
    header: "Contact",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
