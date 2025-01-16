import { FC } from "react";
import { Contact } from "../models/contact-model";

type ContactListProps = {
  contacts: Contact[];
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
};

const ContactList: FC<ContactListProps> = ({
  contacts,
  handleEdit,
  handleDelete,
}) => (
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
              <td className="border border-gray-300 p-2">{contact.email}</td>
              <td className="border border-gray-300 p-2">{contact.phone}</td>
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
);

export default ContactList;
