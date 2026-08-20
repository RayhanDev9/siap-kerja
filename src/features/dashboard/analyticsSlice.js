import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Bungkus utama data (bisa kamu beri nama bebas, misal: dashboardData atau overviewData)
  analyticsData: {
    summaryCards: {}, // Objek kosong untuk menampung data card
    profileEngagement: {
      title: "",
      subtitle: "",
      actionLabel: "",
      chartData: [], // Sangat penting: Array kosong agar tidak error saat render grafik
    },
    skillDevelopment: {
      title: "",
      buttonLabel: "",
      skills: [], // Sangat penting: Array kosong agar tidak error saat di-map
    },
  },

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
      const res = await fetch(`http://127.0.0.1:8000/api/v1/ai/analytics`, {
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
