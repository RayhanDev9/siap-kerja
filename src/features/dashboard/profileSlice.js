import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // 1. PERBAIKAN: Ubah [] menjadi null. 
  // Karena data profil dari API berbentuk Object, bukan Array.
  data: null, 
  isLoading: false,
  isError: null,
};

// Biasakan format penamaan type: 'namaSlice/namaAksi'
export const fetchProfile = createAsyncThunk('profile/fetchProfile', async function (_, thunkAPI) {
  const token = localStorage.getItem('token');

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/profile`, {
      method: 'GET', // 2. PERBAIKAN: Gunakan titik dua (:), bukan sama dengan (=)
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();


    if (!res.ok) {
      // Mengambil pesan error spesifik dari API jika ada
      return thunkAPI.rejectWithValue(data.message || 'Profile tidak ditemukan datanya');
    }

    // 3. PERBAIKAN PENTING: Kamu lupa me-return datanya! 
    // Jika tidak di-return, action.payload di bawah akan bernilai "undefined"
    // Karena response API-mu dibungkus dalam object "data", kita ambil data.data
    return data.data; 

  } catch (error) {
    // 4. PERBAIKAN: Tambahkan kata 'return' di sini
    return thunkAPI.rejectWithValue(error.message);
  }
});

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = null; // Bersihkan error lama saat memuat ulang
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        console.info(action.payload)
        state.isLoading = false;
        // action.payload sekarang berisi objek profil user (id, name, email, dll)
        state.data = action.payload; 
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

// Jangan lupa diexport reducer-nya agar bisa dipasang di store.js
export default profileSlice.reducer;