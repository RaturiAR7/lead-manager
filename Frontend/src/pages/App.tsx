import { DataTable } from "../components/leads/LeadsTable";
import { columns, type Lead } from "@/types/lead";

const sampleLeads: Lead[] = [
  {
    id: "1",
    name: "Kari Legros",
    contact: "857.256.0540",
    status: "Follow-Up",
    qualification: "Masters",
    interest: "Mobile Development",
    source: "Email Campaign",
    assignedTo: "John Doe",
    updatedAt: "May 22, 2025 11:02 PM",
  },
  {
    id: "2",
    name: "Bridget Hayes",
    contact: "1-318-365-9874 x98876",
    status: "Qualified",
    qualification: "PhD",
    interest: "Digital Marketing",
    source: "Website",
    assignedTo: "John Doe",
    updatedAt: "May 21, 2025 11:34 PM",
  },
  {
    id: "3",
    name: "Amos D'Amore",
    contact: "275-600-3449 x992",
    status: "Converted",
    qualification: "Bachelors",
    interest: "Data Science",
    source: "Social Media",
    assignedTo: "Jane Smith",
    updatedAt: "May 19, 2025 3:03 PM",
  },
];

const App = () => {
  return (
    <div>
      <DataTable columns={columns} data={sampleLeads} />
    </div>
  );
};

export default App;
