import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactsService from "service/contactsService";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
};

// ✅ Fix: Pass `contactId` as a parameter
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  return contactsService.fetchContacts();
});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact) => {
  return contactsService.addContact(newContact);
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId) => {
  return contactsService.deleteContact(contactId);
});

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ✅ Fetch Contacts
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })

      // ✅ Add Contact
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.error = action.error.message;
      })

      // ✅ Delete Contact

      
      .addCase(deleteContact.fulfilled, (state, action) => {
        const deletedId = action.payload.id; // API should return deleted contact ID
        state.contacts.items = state.contacts.items.filter((el) => el.id !== deletedId);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.error = action.error.message; // Fix: Use `action.error.message`
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
