import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the Contact type
type Contact = {
  name: string;
  email: string;
  phone: string;
};

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
});

const App = () => {
  const [contacts, setContacts] = useState<Contact[]>([]); // Use Contact[] as the type
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  const onSubmit = (data: Contact) => {
    // Use Contact type for data
    if (isEditing && editIndex !== null) {
      const updatedContacts = [...contacts];
      updatedContacts[editIndex] = data;
      setContacts(updatedContacts);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setContacts([...contacts, data]);
    }
    reset();
  };

  const handleEdit = (index: number) => {
    reset(contacts[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Address Book</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 bg-gray-100 p-4 rounded-md shadow-md"
      >
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full p-2 border rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input
            type="text"
            {...register("phone")}
            className="w-full p-2 border rounded-md"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          {isEditing ? "Update Contact" : "Add Contact"}
        </button>
      </form>

      {/* Contacts Table */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Contact List</h2>
        {contacts.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Phone</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{contact.name}</td>
                  <td className="border border-gray-300 p-2">
                    {contact.email}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {contact.phone}
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="mr-2 px-2 py-1 bg-green-500 text-white rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-2 py-1 bg-red-500 text-white rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">No contacts available</p>
        )}
      </div>
    </div>
  );
};

export default App;
