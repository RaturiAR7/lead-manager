import { Button } from "../ui/button";

const LeadsListOperators = () => {
  return (
    <div className='flex items-center gap-2 mb-4'>
      <input
        type='text'
        placeholder='Search leads...'
        className='w-full px-3 py-2 border text-base font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
      />
      <Button className='px-5 py-2 border rounded-lg text-base font-bold text-black hover:bg-gray-100 bg-white'>
        Filters
      </Button>
    </div>
  );
};

export default LeadsListOperators;
