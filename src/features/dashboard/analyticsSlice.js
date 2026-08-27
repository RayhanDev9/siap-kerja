import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Bungkus utama data (bisa kamu beri nama bebas, misal: dashboardData atau overviewData)
  analyticsData: null,
  // Status untuk mengatur animasi skeleton/loading
  isLoading: false,

  // Menyimpan pesan error jika API gagal dipanggil
  error: null,
};

export const fetchAnalytics = createAsyncThunk(
  "fetchAnalytics/analytics",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(
        `https://spotted-stoke-flattered.ngrok-free.dev/api/v1/user/analytics`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "X-Requested-With": "XMLHttpRequest", //
            "ngrok-skip-browser-warning": "true", // <-- Tambahkan baris ini
          },
        },
      );
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

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAnalytics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAnalytics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.analyticsData = action.payload;
      })
      .addCase(fetchAnalytics.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default analyticsSlice.reducer;
