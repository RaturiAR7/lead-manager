import { Button } from "../ui/button";
const LeadHeader = () => {
  return (
    <section className='flex items-center justify-between mb-8'>
      <header>
        <h1 className='text-3xl font-bold'>Leads</h1>
        <p className='text-gray-600'>Manage and track your leads</p>
      </header>
      <Button className='bg-blue-700'>Add New Lead</Button>
    </section>
  );
};

export default LeadHeader;
