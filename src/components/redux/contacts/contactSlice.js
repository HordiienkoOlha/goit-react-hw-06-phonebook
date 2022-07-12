import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: ({ contacts }, { payload }) => {
      contacts.items.push(payload);
    },
    deleteContact: ({ contacts }, { payload }) => {
      contacts.items.filter(item => item.id !== payload);
    },

    filterContact: ({ contacts }, { payload }) => {
      contacts.items.filter(
        item =>
          item.name.toLowerCase().includes(payload) ||
          item.number.includes(payload)
      );
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;

export default contactSlice.reducer;
