import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 1. Membuat Thunk untuk Login (API Call dieksekusi di sini!)
export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      // Mengirim email & password ke backend
      const response = await axios.post('https://api.kamu.com/login', userData);
      
      // Simpan token ke localStorage agar user tidak login ulang saat refresh
      localStorage.setItem('token', response.data.token); 
      
      // Kembalikan data dari backend untuk disimpan di state Redux
      return response.data; 
    } catch (error) {
      // Jika error (misal password salah), tangkap pesan dari backend
      return rejectWithValue(error.response.data.message || "Gagal Login");
    }
  }
);

// 2. Membuat Slice untuk State Management
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token') || null, // Cek token jika sebelumnya sudah login
    isLoading: false,
    error: null,
  },
  reducers: {
    // Fungsi untuk tombol Logout
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    }
  },
  // 3. extraReducers untuk menangani status Loading, Sukses, dan Gagal dari API
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true; // Munculkan loading saat API dipanggil
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false; // Loading selesai
        state.token = action.payload.token; // Simpan token
        state.user = action.payload.user;   // Simpan data user
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Tampilkan error dari backend
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;