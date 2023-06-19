import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  comment: "",
  date: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataName: (state, action) => {
      state.name = action.payload;
    },
    dataDate: (state, action) => {
      state.date = action.payload;
    },
    dataComment: (state, action) => {
      state.comment = action.payload;
    },
    resetFormulaire: (state) => {
      state.name = "";
      state.date = null;
      state.comment = "";
    },
  },
});

export const { dataComment, dataName, dataDate, resetFormulaire } = dataSlice.actions;
export default dataSlice.reducer;
