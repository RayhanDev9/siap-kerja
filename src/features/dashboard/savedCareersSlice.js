import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ==========================================
// 1. ASYNC THUNK (Fungsi Fetch API)
// ==========================================
export const fetchSavedCareers = createAsyncThunk(
  "savedCareers/fetchSavedCareers",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`http://127.0.0.1:8000/api/saved-careers`, {
        method: "GET", // Gunakan GET untuk mengambil data
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true", // <-- Tambahkan baris ini
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(
          data.message || "Gagal mengambil data karir tersimpan.",
        );
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Terjadi kesalahan jaringan.",
      );
    }
  },
);

// ==========================================
// 2. INITIAL STATE
// ==========================================
const initialState = {
  // Menyimpan data dari API /saved-careers (bentuknya Array)
  data: [],

  // Menyimpan data profile (bisa diisi dengan mock dataProfile milikmu)

  // Status loading & error
  isLoading: false,
  isError: false,
};

// ==========================================
// 3. CREATE SLICE
// ==========================================
const savedCareersSlice = createSlice({
  name: "savedCareers",
  initialState,
  reducers: {
    // Mereset status loading/error
    resetSavedCareersState: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    // Fungsi manual untuk memasukkan mock dataProfile kamu ke dalam state Redux
    loadMockProfile: (state, action) => {
      state.profileData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSavedCareers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchSavedCareers.fulfilled, (state, action) => {
        state.isLoading = false;
        // Asumsi data dari API adalah array langsung. Jika dibungkus (misal: action.payload.data), sesuaikan di sini.
        state.data = action.payload;
      })
      .addCase(fetchSavedCareers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetSavedCareersState, loadMockProfile } =
  savedCareersSlice.actions;
export default savedCareersSlice.reducer;
