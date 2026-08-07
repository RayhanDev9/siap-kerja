import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 1. UBAH NAMA: Tambahkan kata "fetch" agar jelas bahwa ini fungsi untuk mengambil data
export const fetchMarketTrends = createAsyncThunk(
  "marketTrends/fetchMarketTrendsData",
  // Gunakan '_' jika tidak ada data body yang dikirim (karena ini GET)
  async function (_, thunkAPI) {
    try {
      const token = localStorage.getItem("token");

      // 2. PERBAIKAN FETCH: Tambahkan await, benarkan method, dan bungkus headers
      const res = await fetch(
        `https://spotted-stoke-flattered.ngrok-free.dev/api/market-trends`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            'ngrok-skip-browser-warning': 'true' // <-- Tambahkan baris ini
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
  marketTrendsData: {
    jobGrowth: {
      chartData: [],
      trend: {
        text: "",
        isPositive: true,
      },
    },
    topSkills: {
      title: "",
      items: [],
    },
    salaryAnalysis: {
      title: "",
      items: [],
    },
  },
  isLoading: false,
  error: null,
};

const marketTrendsSlice = createSlice({
  name: "marketTrends",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // Saat sedang loading (pending)
      .addCase(fetchMarketTrends.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // 3. CARA MENGISI RESPONSE SUKSES (fulfilled)
      .addCase(fetchMarketTrends.fulfilled, (state, action) => {
        state.isLoading = false;
        // Langsung timpa seluruh marketTrendsData dengan data asli dari action.payload
        state.marketTrendsData = action.payload;
      })
      // 4. PERBAIKAN REJECTED: Gunakan .rejected, bukan .rejectWithValue
      .addCase(fetchMarketTrends.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Simpan errornya ke dalam state.error
        console.error("Gagal ambil market trends:", action.payload);
      }),
});

export default marketTrendsSlice.reducer;
