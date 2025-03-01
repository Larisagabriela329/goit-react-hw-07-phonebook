import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactsService from "service/contactsService";


const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: "",
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  return contactsService.fetchContacts()
})

export const addContact = createAsyncThunk('contacts/addContact', async() => {
  return contactsService.addContact()
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async ()=> {
  return contactsService.deleteContact()
})

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.pending, (state, _action)=>{
      state.status = 'loading'
    })
    .addCase(fetchContacts.fulfilled, (state, action)=> {
      state.status = 'success';
      state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action)=> {
      state.status = 'failed';
      state.error = action.error.message
    })

    .addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload)
    })
    .addCase(addContact.rejected, (state, action) => {
      state.error = action.error.message;
    })

    .addCase(deleteContact.fulfilled, (state, action) => {
      const index = state.items.findIndex(el => el.id === action.payload)

      state.items.splice(index, 1)
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.error = action.payload.error
  })
}
});

export const contactsReducer = contactsSlice.reducer;