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
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-2 py-1 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-2 py-1 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-2 py-1 text-left">
                Phone
              </th>
              <th className="border border-gray-300 px-2 py-1 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-2 py-1 break-words text-center">
                  {contact.name}
                </td>
                <td className="border border-gray-300 px-2 py-1 break-words">
                  {contact.email}
                </td>
                <td className="border border-gray-300 px-2 py-1 break-words">
                  {contact.phone}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="mb-2 sm:mb-0 px-2 py-1 bg-green-500 text-white rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-2 py-1 bg-red-500 text-white rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <p className="text-gray-600">No contacts available</p>
    )}
  </div>
);

export default ContactList;
