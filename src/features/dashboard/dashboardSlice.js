import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Bungkus utama data dashboard
  dashboardData: null,

  // Status untuk menampilkan animasi loading/skeleton
  isLoading: false,
  aiReadiness: {}, // Ubah jadi object
  prioritySkills: [],
  dataChart: [],

  // Menyimpan pesan error jika API gagal dipanggil
  error: null,
};

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(
        `https://spotted-stoke-flattered.ngrok-free.dev/api/v1/user/dashboard`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "X-Requested-With": "XMLHttpRequest", //
            "ngrok-skip-browser-warning": "true",
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

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    selectAllDataDashbord(state, action) {
      const key = action.payload;
      // PERBAIKAN: Tadi pakai skillGapData (undefined), harusnya dashboardData
      const rawData = state.dashboardData?.data;

      if (rawData && key) {
        // Otomatis ngambil data sesuai dengan PATH yang terpilih
        state.aiReadiness = rawData.aiReadiness?.[key] || {};
        state.prioritySkills = rawData.prioritySkills?.[key] || [];
        state.dataChart = rawData.dataChart?.[key] || [];
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashboardData = action.payload;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { selectAllDataDashbord } = dashboardSlice.actions;
export default dashboardSlice.reducer;
