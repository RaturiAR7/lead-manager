import LeadsHeader from "@/components/leads/LeadsHeader";
import LeadsListOperators from "@/components/leads/LeadsListOperators";
import { DataTable } from "@/components/leads/LeadsTable";
import { columns, type LeadTypes } from "@/types/lead";
import axios from "axios";
import { useEffect, useState } from "react";
import AddLeadModal from "@/components/leads/LeadsModalForm";

const Lead = () => {
  const [leadList, setLeadList] = useState<LeadTypes[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddLead = async (data: LeadTypes) => {
    console.log("Lead Data Submitted:", data);
    const response = await axios.post("http://localhost:8000/api/leads/", data);
    console.log("Response from server:", response.data);
    setLeadList(response.data);
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchLeads = async () => {
      const response = await axios.get("http://localhost:8000/api/leads/");
      setLeadList(response.data);
    };
    fetchLeads();
  }, []);

  return (
    <main className='px-5 relative'>
      <LeadsHeader setModalOpen={setModalOpen} />
      <LeadsListOperators />
      <AddLeadModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmitLead={handleAddLead}
      />
      <DataTable data={leadList} columns={columns} />
    </main>
  );
};

export default Lead;
