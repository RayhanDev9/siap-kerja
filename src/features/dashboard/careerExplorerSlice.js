import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Bungkus utama data karir
  careersData: {
    headerData: {
      title: "",
      description: "",
    },
    filterCategories: [], // Array kosong agar aman saat di-map (tidak error)
    jobListings: [], // Array kosong untuk daftar pekerjaan
  },

  // Status untuk menampilkan animasi skeleton/loading
  isLoading: false,

  // Menyimpan pesan error jika API gagal dipanggil
  error: null,
};

export const fetchCareerExplorer = createAsyncThunk(
  "careerExplorer/fetchCareerExplorer",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/careers`, {
        method: "GET",

        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        return thunkAPI.rejectWithValue(data);
      }
      console.info(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const careerExplorerSlice = createSlice({
  name: "careerExplorer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchCareerExplorer.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchCareerExplorer.fulfilled, (state, action) => {
        state.careersData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCareerExplorer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default careerExplorerSlice.reducer;
