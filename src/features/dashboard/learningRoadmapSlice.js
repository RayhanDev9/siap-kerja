import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Bungkus utama data roadmap
  roadmapData: {
    overallProgress: {
      label: "",
      percentage: 0,
      estimatedTime: "",
    },
    stages: [], // Array kosong untuk menampung daftar tahapan belajar
  },

  // Status untuk mengatur animasi skeleton/loading
  isLoading: false,

  // Menyimpan pesan error jika API gagal
  error: null,
};

export const fetchLearningRoadmap = createAsyncThunk(
  "learingroadmap/fetchLearningRoadmap",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `https://spotted-stoke-flattered.ngrok-free.dev/api/ai/roadmap`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            'ngrok-skip-browser-warning': 'true' // <-- Tambahkan baris ini
          },
        },
      );

      const data = res.json();

      if (!res.ok) {
        return thunkAPI.rejectWithValue(data);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const learningRoadmapSlice = createSlice({
  name: "larningRoadmap",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchLearningRoadmap.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLearningRoadmap.fulfilled, (state, action) => {
        state.isLoading = false;
        state.roadmapData = action.payload;
      })
      .addCase(fetchLearningRoadmap.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default learningRoadmapSlice.reducer;
