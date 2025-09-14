import LeadsHeader from "@/components/leads/LeadsHeader";
import LeadsListOperators from "@/components/leads/LeadsListOperators";
import { DataTable } from "@/components/leads/LeadsTable";
import { columns, type LeadTypes } from "@/types/lead";
import axios from "axios";
import { useEffect, useState } from "react";

const Lead = () => {
  const [leadList, setLeadList] = useState<LeadTypes[]>([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const response = await axios.get("http://localhost:8000/api/leads/");
      console.log(response.data);
      setLeadList(response.data);
    };
    fetchLeads();
  }, []);

  return (
    <main className='px-5'>
      <LeadsHeader />
      <LeadsListOperators />
      <DataTable data={leadList} columns={columns} />
    </main>
  );
};

export default Lead;
