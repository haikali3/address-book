import { FC } from "react";

type FormFieldProps = {
  label: string;
  name: string;
  register: any;
  error?: string;
};

const FormField: FC<FormFieldProps> = ({ label, name, register, error }) => (
  <div>
    <label className="block font-medium mb-1">{label}</label>
    <input
      type="text"
      {...register(name)}
      className="w-full p-2 border rounded-md"
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default FormField;
