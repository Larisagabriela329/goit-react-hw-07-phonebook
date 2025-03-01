import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: state.contacts.length > 0 ? state.contacts[state.contacts.length - 1].id + 1 : 1,
        name: action.payload.name,
        number: action.payload.number,
      };
      state.contacts.push(newContact);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
