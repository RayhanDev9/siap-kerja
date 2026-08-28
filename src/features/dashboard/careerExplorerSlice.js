import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { data } from "react-router";

const initialState = {
  careersData: null,
  filteredJobs: [], // Tambahan properti penampung filter
  isLoading: false,
  error: null,
  activeCategory: "semua", // State penampung tombol yang aktif
  savedCareers: [],
};

export const fetchCareerExplorer = createAsyncThunk(
  "careerExplorer/fetchCareerExplorer",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(
        `https://spotted-stoke-flattered.ngrok-free.dev/api/v1/user/jobs`,
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

export const toggleSaveJob = createAsyncThunk(
  "careerExplorer/toggleSaveJob",
  async (jobId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `https://spotted-stoke-flattered.ngrok-free.dev/api/v1/user/jobs/${jobId}/toggle-save`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "X-Requested-With": "XMLHttpRequest", //
            "ngrok-skip-browser-warning": "true",
          },
        },
      );

      const result = await response.json();

      if (!response.ok) {
        return rejectWithValue(
          result.message || "Gagal mengubah status bookmark",
        );
      }

      console.info(result);
      return { jobId, is_saved: result.data.is_saved };
    } catch (error) {
      return rejectWithValue(error.message || "Terjadi kesalahan jaringan");
    }
  },
);

const careerExplorerSlice = createSlice({
  name: "careerExplorer",
  initialState,
  reducers: {
   catagory: (state, action) => {
      const keyword = action.payload
        ? String(action.payload).trim().toLowerCase()
        : "semua";
        
      const allJobs = state.careersData?.data || [];
      
      // Simpan keyword ke activeCategory agar UI tahu sedang mode filter atau tidak
      state.activeCategory = keyword;

      // 1. Jika memilih "semua" atau input pencarian kosong, kembalikan seluruh data
      if (keyword === "semua" || keyword === "") {
        state.filteredJobs = allJobs;
        return;
      }

      // 2. Filter data berdasarkan keyword
      state.filteredJobs = allJobs.filter((item) => {
        const categoryId = item?.category?.id?.toLowerCase() || "";
        const categoryName = item?.category?.name?.toLowerCase() || "";
        const titleLower = item?.title?.toLowerCase() || "";
        const skillsString = Array.isArray(item?.skills)
          ? item.skills.join(" ").toLowerCase()
          : "";

        // Cocokkan secara eksak untuk kategori, atau pencarian parsial (includes) untuk judul/skill
        return (
          categoryId === keyword ||
          categoryName === keyword ||
          titleLower.includes(keyword) ||
          skillsString.includes(keyword)
        );
      });
    },
    filterSavedCareers(state, action) {
      const keyword = action.payload
        ? String(action.payload).trim().toLowerCase()
        : "semua";
      state.activeCategory = keyword;

      // Ambil basis data karir yang is_saved === true
      const allSaved =
        state.careersData?.data?.filter((item) => item.is_saved) || [];
      state.savedCareers = allSaved;

      // Jika filter "semua" atau kosong, kembalikan semua data tersimpan
      if (keyword === "semua" || keyword === "" || keyword === "all") {
        state.filteredSavedCareers = allSaved;
        return;
      }

      // Filter hanya di dalam daftar yang tersimpan dengan logika yang selaras
      state.filteredSavedCareers = allSaved.filter((item) => {
        const categoryId = item?.category?.id?.toLowerCase() || "";
        const categoryName = item?.category?.name?.toLowerCase() || "";
        const titleLower = item?.title?.toLowerCase() || "";
        const company = item?.company?.toLowerCase() || "";
        const skillsString = Array.isArray(item?.skills)
          ? item.skills.join(" ").toLowerCase()
          : "";

        return (
          categoryId === keyword ||
          categoryName === keyword ||
          titleLower.includes(keyword) ||
          company.includes(keyword) ||
          skillsString.includes(keyword)
        );
      });
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCareerExplorer.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchCareerExplorer.fulfilled, (state, action) => {
        state.careersData = action.payload;
        state.filteredJobs = action.payload.jobListings; // Inisialisasi data awal
        state.isLoading = false;
      })
      .addCase(fetchCareerExplorer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(toggleSaveJob.fulfilled, (state, action) => {
        const { jobId, is_saved } = action.payload;

        // 1. Update status pada master data
        if (state.careersData?.data) {
          state.careersData.data = state.careersData.data.map((item) =>
            String(item.id) === String(jobId)
              ? { ...item, is_saved: Boolean(is_saved) }
              : item,
          );
        }

        // 2. Update filteredJobs (untuk halaman Explorer)
        if (Array.isArray(state.filteredJobs)) {
          state.filteredJobs = state.filteredJobs.map((item) =>
            String(item.id) === String(jobId)
              ? { ...item, is_saved: Boolean(is_saved) }
              : item,
          );
        }

        // 3. Filter ulang list savedCareers secara langsung dari data master
        const updatedSaved = (state.careersData?.data || []).filter(
          (item) => item.is_saved,
        );
        state.savedCareers = updatedSaved;

        // 4. Sinkronkan tampilan list tersimpan yang sedang aktif
        state.filteredSavedCareers = updatedSaved;
      }),
});

export const { catagory, filterSavedCareers } = careerExplorerSlice.actions;
export default careerExplorerSlice.reducer;
