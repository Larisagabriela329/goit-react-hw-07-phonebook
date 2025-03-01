import { removeContact } from "contactsSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleRemoveContact = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <div>
      <h1>Contacts List</h1>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <p>
            {contact.name} - {contact.number}
          </p>
          <button onClick={() => handleRemoveContact(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
