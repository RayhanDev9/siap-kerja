import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ==========================================
// 1. INITIAL STATE
// ==========================================
// Menyimpan status dari proses API onboarding
const initialState = {
  data: null, // Untuk menyimpan data balikan dari backend jika sukses
  isLoading: false, // Status loading saat fetch berjalan
  isSuccess: false, // Penanda jika onboarding berhasil 100%
  isError: false, // Penanda jika terjadi error
  // errorMessage: "", // Pesan error dari backend (misal: validasi gagal)
};

// ==========================================
// 2. ASYNC THUNK (Fungsi Fetch API)
// ==========================================
// Parameter 'onboardingData' adalah payload yang akan dikirim dari komponen React
export const submitOnboarding = createAsyncThunk(
  "onboarding/submitOnboarding",
  async (onboardingData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`http://127.0.0.1:8000/api/onboarding`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true", // <-- Tambahkan baris ini
        },
        body: JSON.stringify(onboardingData), // Mengirim data ke backend
      });

      const data = await response.json();

      // Jika response dari server BUKAN 200 OK (misal: 400 Bad Request atau 500 Server Error)
      if (!response.ok) {
        // Lemparkan pesan error dari backend ke blok catch/rejected
        return thunkAPI.rejectWithValue(
          data.message || "Terjadi kesalahan pada server.",
        );
      }

      // Jika sukses, kembalikan data (akan masuk ke action.payload di fulfilled)
      return data;
    } catch (error) {
      // Tangkap error jaringan (misal: internet putus atau server mati total)
      return thunkAPI.rejectWithValue(
        error.message || "Gagal menghubungi server.",
      );
    }
  },
);

// ==========================================
// 3. CREATE SLICE
// ==========================================
const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    // Fungsi opsional untuk mereset state kembali ke awal (misal saat user pindah halaman)
    resetOnboardingState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      // state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Saat fetch mulai berjalan
      .addCase(submitOnboarding.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        // state.errorMessage = "";
      })
      // Saat fetch berhasil dan backend merespons sukses
      .addCase(submitOnboarding.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload; // Menyimpan response utuh {message: '...', data: {...}}
      })
      // Saat fetch gagal (ditolak oleh response.ok atau masuk ke catch)
      .addCase(submitOnboarding.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.errorMessage = action.payload; // Menyimpan pesan error dari rejectWithValue
      });
  },
});

export const { resetOnboardingState } = onboardingSlice.actions;
export default onboardingSlice.reducer;
