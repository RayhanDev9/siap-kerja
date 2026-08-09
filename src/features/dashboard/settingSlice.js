import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Bungkus utama data pengaturan
  settingData: {
    profilPengguna: {
      namaLengkap: "",
      email: "",
      fotoProfil: "",
    },
    keamanan: {
      kataSandiSaatIni: "",
      kataSandiBaru: "",
    },
    pengaturanLainnya: [], // Array kosong agar aman saat di-map (tidak error)
  },

  // Status untuk mengatur animasi skeleton/loading
  isLoading: false,

  // Menyimpan pesan error jika API gagal dipanggil
  error: null,
};

export const fetchSetting = createAsyncThunk(
  "fetchSetting/setting",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/settings`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true", // <-- Tambahkan baris ini
        },
      });

      const data = await res.json();
      if (!res.ok) return thunkAPI.rejectWithValue(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchSetting.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSetting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.settingData = action.payload;
      })
      .addCase(fetchSetting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default settingSlice.reducer;
