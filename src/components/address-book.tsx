import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Contact, contactSchema } from "../models/contact-model";
import ContactForm from "./contact-form";
import ContactList from "./contact-list";

const AddressBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const { register, handleSubmit, reset, formState } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  const onSubmit = (data: Contact) => {
    if (isEditing && editIndex !== null) {
      updateContact(data, editIndex);
    } else {
      addContact(data);
    }
    reset();
  };

  const addContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (updatedContact: Contact, index: number) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = updatedContact;
    setContacts(updatedContacts);
    setIsEditing(false);
    setEditIndex(null);
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
      <ContactForm
        isEditing={isEditing}
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={formState.errors}
      />
      <ContactList
        contacts={contacts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default AddressBook;
