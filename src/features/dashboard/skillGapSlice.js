import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Bungkus utama data kesenjangan keahlian (Skill Gap)
  skillGapData: {
    overallReadiness: {
      percentage: 0,
      message: "",
    },
    competencyMatrix: {
      labels: [], // Sangat penting: Array kosong agar Chart tidak error
      datasets: [], // Sangat penting: Array kosong agar Chart tidak error
    },
    skillCategoryDetails: [], // Array kosong agar aman saat di-map
    marketDemandMap: [], // Array kosong agar aman saat di-map
  },

  // Status untuk menampilkan animasi loading/skeleton
  isLoading: false,

  // Menyimpan pesan error jika API gagal dipanggil
  error: null,
};

export const fetchSkillGap = createAsyncThunk(
  "fetchSkillGap/skillGap",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/ai/skill-gap`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true", // <-- Tambahkan baris ini
        },
      });
      const data = await res.json();
      if (!res.ok) {
        return thunkAPI.rejectWithValue(data);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const skillGapSlice = createSlice({
  name: "skillGap",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchSkillGap.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSkillGap.fulfilled, (state, action) => {
        state.isLoading = false;
        state.skillGapData = action.payload;
      })
      .addCase(fetchSkillGap.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default skillGapSlice.reducer;
