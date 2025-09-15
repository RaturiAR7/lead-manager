import LeadsHeader from "@/components/leads/LeadsHeader";
import LeadsListOperators from "@/components/leads/LeadsListOperators";
import { DataTable } from "@/components/leads/LeadsTable";
import { columns, type LeadTypes } from "@/types/lead";
import axios from "axios";
import { useEffect, useState } from "react";
import AddLeadModal from "@/components/leads/LeadsModalForm";
import { type LeadFormData } from "@/validations/LeadValidation";

const Lead = () => {
  const [leadList, setLeadList] = useState<LeadTypes[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddLead = async (data: LeadFormData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/leads/`,
      data
    );
    setLeadList((prev) => [...prev, response.data]);
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchLeads = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/leads/`
      );
      setLeadList(response.data);
    };
    fetchLeads();
  }, []);

  return (
    <main>
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
