import React from "react";
import { useForm } from "react-hook-form";

export const Form = ({ handleFormSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    handleFormSubmit(data); // Fix the function name here
    reset();
  };

  return (
    <div className="mt-10 flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
        <input
          {...register("name")}
          className="rounded-md py-1 text-base font-semibold outline-none pl-2"
          type="text"
          placeholder="name"
        />
        <input
          {...register("email")}
          className="rounded-md py-1 text-base font-semibold outline-none pl-2 "
          type="text"
          placeholder="email"
        />
        <input
          {...register("image")}
          className="rounded-md py-1 text-base font-semibold outline-none pl-2 "
          type="text"
          placeholder="image url"
        />
        <input
          className="px-3 py-1 text-white rounded-lg bg-blue-500"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Form;
