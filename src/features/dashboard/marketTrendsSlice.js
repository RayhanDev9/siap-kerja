import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMarketTrends = createAsyncThunk(
  "marketTrends/fetchMarketTrendsData",
  async function (_, thunkAPI) {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `http://127.0.0.1:8000/api/v1/user/market-trends`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true",
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        return thunkAPI.rejectWithValue(data);
      }

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const initialState = {
  marketTrendsData: null,
  // Tambahan state untuk fitur filter Tab
  filteredMarketTrends: [], 
  activeCategory: "semua", 
  
  isLoading: false,
  error: null,
};

const marketTrendsSlice = createSlice({
  name: "marketTrends",
  initialState,
  reducers: {
    // Fungsi ini persis kayak di careerExplorerSlice
    filterCategory(state, action) {
      const keyword = action.payload
        ? String(action.payload).trim().toLowerCase()
        : "semua";
      
      const allTrends = state.marketTrendsData?.data || [];
      state.activeCategory = keyword;

      // Jika "semua", kembalikan seluruh data array utuh
      if (keyword === "semua" || keyword === "") {
        state.filteredMarketTrends = allTrends;
        return;
      }

      // Jika milih salah satu (Teknologi/Bisnis/Kreatif), filter berdasarkan nama kategori
      state.filteredMarketTrends = allTrends.filter((item) => {
        const cat = item.category?.toLowerCase() || "";
        const label = item.category_label?.toLowerCase() || "";
        return cat === keyword || label === keyword;
      });
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchMarketTrends.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMarketTrends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.marketTrendsData = action.payload;
        // Jadikan data utuh sebagai nilai awal filteredMarketTrends
        state.filteredMarketTrends = action.payload.data; 
      })
      .addCase(fetchMarketTrends.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { filterCategory } = marketTrendsSlice.actions;
export default marketTrendsSlice.reducer;