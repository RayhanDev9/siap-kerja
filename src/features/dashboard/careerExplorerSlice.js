import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  careersData: {
    headerData: {
      title: "",
      description: "",
    },
    filterCategories: [],
    jobListings: [],
  },
  filteredJobs: [], // Tambahan properti penampung filter
  isLoading: false,
  error: null,
};

export const fetchCareerExplorer = createAsyncThunk(
  "careerExplorer/fetchCareerExplorer",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/careers`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
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

const careerExplorerSlice = createSlice({
  name: "careerExplorer",
  initialState,
  reducers: {
    catagory(state, action) {
      console.info(
        "Filtered Jobs:",
        JSON.parse(JSON.stringify(state.filteredJobs)),
      );
      const keyword = action.payload
        ? action.payload.trim().toLowerCase()
        : "semua";

      // 1. Update status aktif tombol kategori (jika yang diklik/dicari adalah salah satu label tombol)
      state.careersData.filterCategories =
        state.careersData.filterCategories.map((item) => ({
          ...item,
          isActive: item.label.toLowerCase() === keyword,
        }));

      // 2. Jika keyword adalah "semua" atau kosong, tampilkan semua data lowongan
      if (keyword === "semua" || keyword === "") {
        state.filteredJobs = state.careersData.jobListings;
        return;
      }

      // 3. Filter data berdasarkan kategori tombol ATAU pencarian bebas (judul, perusahaan, skills)
      state.filteredJobs = state.careersData.jobListings.filter((item) => {
        const titleLower = item.title ? item.title.toLowerCase() : "";
        const companyLower = item.company ? item.company.toLowerCase() : "";
        const skillsString = item.skills
          ? item.skills.join(" ").toLowerCase()
          : "";

        // Kondisi khusus jika memilih kategori utama dari tombol
        if (keyword === "teknologi") {
          return (
            titleLower.includes("developer") ||
            titleLower.includes("engineer") ||
            titleLower.includes("frontend") ||
            titleLower.includes("backend") ||
            skillsString.includes("laravel") ||
            skillsString.includes("mysql") ||
            skillsString.includes("react")
          );
        }

        if (keyword === "bisnis") {
          return (
            titleLower.includes("analyst") ||
            titleLower.includes("business") ||
            titleLower.includes("product") ||
            titleLower.includes("marketing")
          );
        }

        if (keyword === "kreatif") {
          return (
            titleLower.includes("ui") ||
            titleLower.includes("ux") ||
            titleLower.includes("designer") ||
            titleLower.includes("content")
          );
        }

        // Kondisi pencarian bebas (ketikan di input search)
        return (
          titleLower.includes(keyword) ||
          companyLower.includes(keyword) ||
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
      }),
});

export const { catagory } = careerExplorerSlice.actions;
export default careerExplorerSlice.reducer;
