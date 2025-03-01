import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, deleteContact } from "../redux/contactsSlice";

export const ContactList = () => {
  const { items, isLoading, error } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleRemoveContact = (id) => {
    dispatch(deleteContact(id));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Add a check to ensure `items` is an array
  if (!Array.isArray(items)) {
    return <p>No contacts available</p>;
  }

  return (
    <div>
      <h1>Contacts List</h1>
      {items.length === 0 ? (
        <p>No contacts to display</p>
      ) : (
        items.map((contact) => (
          <div key={contact.id}>
            <p>
              {contact.name} - {contact.number}
            </p>
            <button onClick={() => handleRemoveContact(contact.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};
