import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  countStep: 0,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    countStep: (state, action) => {
      state.countStep = state.countStep + action.payload;
    },
    resetStep: (state) => {
      state.countStep = 0; // Mengembalikan ke step pertama
    },
  },
});

export const {
  selectCourseById,
  setActiveStep,
  resetSelectedCourse,
  countStep,
  resetStep,
} = courseSlice.actions;
export default courseSlice.reducer;
