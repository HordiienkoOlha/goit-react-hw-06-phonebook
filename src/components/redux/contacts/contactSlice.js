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

    // filterContact: (state, action) => {
    //   const newFilter = state.filter.toLowerCase();
    //   state.filter(
    //     item =>
    //       item.name.toLowerCase().includes(newFilter) ||
    //       item.number.includes(newFilter)
    //   );
    // },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
//   export const { addContact, deleteContact, filterContact } =
//     contactSlice.actions;

export default contactSlice.reducer;
