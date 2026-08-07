import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Bungkus utama data dashboard
  dashboardData: {
    // Data user bisa kamu tambahkan jika dari API lain, atau gabung di sini
    user: {
      firstName: "",
      currentDate: "",
    },
    careerReadiness: {
      progressMessage: "",
      scoreData: [], // Array kosong agar chart tidak error
    },
    metrics: {
      aiReadiness: {
        grade: "",
        description: "",
        icon: "",
      },
      learningStreak: {
        days: 0,
        label: "",
        icon: "",
      },
    },
    prioritySkills: [], // Array kosong agar aman saat di-map
    careerRecommendations: [], // Array kosong agar aman saat di-map
  },

  // Status untuk menampilkan animasi loading/skeleton
  isLoading: false,

  // Menyimpan pesan error jika API gagal dipanggil
  error: null,
};

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");

    try {
      // PERHATIAN: Pastikan endpoint URL ini sesuai dengan backend kamu
      const res = await fetch(
        `https://spotted-stoke-flattered.ngrok-free.dev/api/ai/dashboard`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            'ngrok-skip-browser-warning': 'true' // <-- Tambahkan baris ini
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
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Bersihkan error sebelumnya saat mencoba fetch ulang
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.isLoading = false;

        // Kita gunakan spread operator (...) agar properti bawaan seperti 'user'
        // tidak terhapus jika dari API kebetulan tidak mengirimkannya.
        state.dashboardData = action.payload;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default dashboardSlice.reducer;
