import { FC } from "react";
import FormField from "./form-field";

type ContactFormProps = {
  isEditing: boolean;
  onSubmit: () => void;
  register: any;
  errors: any;
};

const ContactForm: FC<ContactFormProps> = ({
  isEditing,
  onSubmit,
  register,
  errors,
}) => (
  <form
    onSubmit={onSubmit}
    className="flex flex-col space-y-4 bg-gray-100 p-4 rounded-md shadow-md"
  >
    <FormField
      label="Name"
      name="name"
      register={register}
      error={errors.name?.message}
    />
    <FormField
      label="Email"
      name="email"
      register={register}
      error={errors.email?.message}
    />
    <FormField
      label="Phone"
      name="phone"
      register={register}
      error={errors.phone?.message}
    />
    <button
      type="submit"
      className="px-4 py-2 bg-blue-600 text-white rounded-md"
    >
      {isEditing ? "Update Contact" : "Add Contact"}
    </button>
  </form>
);

export default ContactForm;
