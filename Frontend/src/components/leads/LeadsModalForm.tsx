// src/components/AddLeadModal.tsx
import React from "react";
import { useForm } from "react-hook-form";
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
    resolver: yupResolver(leadSchema) as any,
    mode: "onBlur",
  });

  if (!isOpen) return null;

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
          onSubmit={handleSubmit(onSubmitLead)}
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

          <div>
            <label className='block text-sm font-medium'>Phone</label>
            <input
              {...register("phone")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter phone'
            />
            {errors.phone && (
              <p className='text-red-500 text-xs'>{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>Alt. Phone</label>
            <input
              {...register("altPhone")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter alt phone'
            />
            {errors.altPhone && (
              <p className='text-red-500 text-xs'>{errors.altPhone.message}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>Email</label>
            <input
              {...register("email")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter email'
            />
            {errors.email && (
              <p className='text-red-500 text-xs'>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>Alt. Email</label>
            <input
              {...register("altEmail")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter alt email'
            />
            {errors.altEmail && (
              <p className='text-red-500 text-xs'>{errors.altEmail.message}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>Status</label>
            <select
              {...register("status")}
              className='w-full border px-3 py-2 rounded-lg'
            >
              <option value='New'>New</option>
              <option value='Qualified'>Qualified</option>
              <option value='Converted'>Converted</option>
              <option value='Follow-Up'>Follow-Up</option>
            </select>
            {errors.status && (
              <p className='text-red-500 text-xs'>{errors.status.message}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>Qualification</label>
            <input
              {...register("qualification")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter qualification'
            />
            {errors.qualification && (
              <p className='text-red-500 text-xs'>
                {errors.qualification.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>Interest Field</label>
            <input
              {...register("interest")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter interest field'
            />
            {errors.interest && (
              <p className='text-red-500 text-xs'>{errors.interest.message}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>Source</label>
            <input
              {...register("source")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter source'
            />
            {errors.source && (
              <p className='text-red-500 text-xs'>{errors.source.message}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>Assigned To</label>
            <input
              {...register("assignedTo")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter assigned person'
            />
            {errors.assignedTo && (
              <p className='text-red-500 text-xs'>
                {errors.assignedTo.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>Job Interest</label>
            <input
              {...register("jobInterest")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter job interest'
            />
            {errors.jobInterest && (
              <p className='text-red-500 text-xs'>
                {errors.jobInterest.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>State</label>
            <input
              {...register("state")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter state'
            />
            {errors.state && (
              <p className='text-red-500 text-xs'>{errors.state.message}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>City</label>
            <input
              {...register("city")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter city'
            />
            {errors.city && (
              <p className='text-red-500 text-xs'>{errors.city.message}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>Passout Year</label>
            <input
              {...register("passoutYear")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter passout year'
            />
            {errors.passoutYear && (
              <p className='text-red-500 text-xs'>
                {errors.passoutYear.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>Heard From</label>
            <input
              {...register("heardFrom")}
              className='w-full border px-3 py-2 rounded-lg'
              placeholder='Enter source info'
            />
            {errors.heardFrom && (
              <p className='text-red-500 text-xs'>{errors.heardFrom.message}</p>
            )}
          </div>

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
