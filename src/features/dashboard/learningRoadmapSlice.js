import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { select } from "framer-motion/client";

const initialState = {
  // Bungkus utama data roadmap
  data: null,

  // Status untuk mengatur animasi skeleton/loading
  isLoading: false,
  selectedCategoryData: null,
  // Menyimpan pesan error jika API gagal
  error: null,
  selectedCourses: [], // Menyimpan array daftar kursusnya
};

export const fetchLearningRoadmap = createAsyncThunk(
  "larningRoadmap/fetchLearningRoadmap",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/user/roadmap`, {
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

export const updateCourseStatus = createAsyncThunk(
  "larningRoadmap/updateCourseStatus",
  async function ({ stepId, status }, thunkAPI) {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/user/roadmap/steps/${stepId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({ status }),
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

const learningRoadmapSlice = createSlice({
  name: "larningRoadmap",
  initialState,
  reducers: {
    selectCategoryCareer(state, action) {
      // 2. action.payload berisi string dari komponen (misal: "Teknologi")
      const selectedCategory = action.payload;

      // 3. Pastikan data dari backend sudah benar-benar ada
      if (state.data && state.data.data && selectedCategory) {
        // 4. Ubah hurufnya jadi kecil ("Teknologi" -> "teknologi") agar sesuai dengan key API
        const keyPilihan = selectedCategory.toLowerCase();

        // Ambil array datanya
        const dataKategori = state.data.data[keyPilihan] || [];

        // 5. Simpan array utuh ke state baru (seperti sebelumnya)
        state.selectedCategoryData = dataKategori;

        // 6. UPDATE BARU: Masukkan courses dari index ke-0 ke selectedCourses
        if (dataKategori.length > 0) {
          // Ambil properti 'courses' dari path pertama (index 0)
          state.selectedCourses = dataKategori[0].courses || [];
        } else {
          // Kosongkan jika ternyata backend tidak mengirim data path satupun
          state.selectedCourses = [];
        }
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchLearningRoadmap.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLearningRoadmap.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        console.info(action.payload);
      })
      .addCase(fetchLearningRoadmap.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const { selectCategoryCareer } = learningRoadmapSlice.actions;
export default learningRoadmapSlice.reducer;
