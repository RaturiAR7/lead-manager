// src/components/AddLeadModal.tsx
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { leadSchema } from "@/validations/LeadValidation";
import type { InferType } from "yup";

type LeadFormData = InferType<typeof leadSchema>;

interface AddLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitLead: (data: LeadFormData) => void;
}

const AddLeadModal: React.FC<AddLeadModalProps> = ({
  isOpen,
  onClose,
  onSubmitLead,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: yupResolver(leadSchema) as any, // <-- fix type mismatch
    mode: "onBlur", // optional (validates on blur)
  });

  if (!isOpen) return null;

  const onSubmit: SubmitHandler<LeadFormData> = (data) => {
    onSubmitLead(data);
  };

  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center'>
      <div
        className='absolute inset-0 bg-black/25 backdrop-blur-xs'
        onClick={onClose}
      />
      <div className='relative bg-white rounded-lg shadow-lg w-[700px] max-h-[90vh] overflow-y-auto p-6 z-10'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>Add Lead</h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700 text-lg'
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-2 gap-4'
        >
          <div>
            <label className='block text-sm font-medium'>Name</label>
            <input
              {...register("name")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter name'
            />
            {errors.name && (
              <p className='text-red-500 text-xs'>{errors.name.message}</p>
            )}
          </div>

          {/* Continue with your other fields... */}

          <div className='col-span-2 flex justify-end gap-3 mt-4'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 border rounded-lg hover:bg-gray-100'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
            >
              Add Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLeadModal;
