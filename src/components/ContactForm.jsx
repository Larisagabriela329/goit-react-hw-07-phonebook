import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from '../redux/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleAddContact = () => {
    if (name && number) {
      dispatch(addContact({ name, number }));
      setName("");
      setNumber("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="tel"
        placeholder="Phone number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <button onClick={handleAddContact}>Add Contact</button>
    </>
  );
};
